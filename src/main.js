// Runtime for the static Figma page: fit-to-screen scaling, prototype navigation, links.
// Configuration comes from site.config.mjs via window.SITE (injected by build.mjs).
const { designWidth, nav, navFallback, links, floating } = window.SITE;

// Scale the fixed-width design to the viewport. A transform (not CSS zoom) renders the
// same in Safari/iPadOS, Chrome and Firefox. Floating elements are scaled separately
// because position:fixed does not work inside a transformed ancestor.
const stage = document.querySelector('.stage');
const page = document.querySelector('.page');
const floats = [...document.querySelectorAll('.floating')];
const fit = () => {
  const s = document.documentElement.clientWidth / designWidth;
  page.style.transform = `scale(${s})`;
  stage.style.height = `${page.offsetHeight * s}px`;
  floats.forEach((el, i) => {
    el.style.transform = `translate(${floating[i].x * s}px, ${floating[i].y * s}px) scale(${s})`;
  });
};
fit();
window.addEventListener('resize', fit);

const byNode = id => document.querySelector(`[data-node-id="${id}"]`);
const sectionFor = id => document.getElementById('n' + (navFallback[id] || id).replace(':', '-'));

const allNav = { ...nav };
floating.forEach(f => { if (f.navTo) allNav[f.nodeId] = f.navTo; });
for (const [from, to] of Object.entries(allNav)) {
  const el = byNode(from);
  if (!el) continue;
  el.dataset.nav = to;
  el.setAttribute('role', 'link');
  el.tabIndex = 0;
  const go = () => sectionFor(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.addEventListener('click', go);
  el.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
}

for (const [id, href] of Object.entries(links)) {
  const el = byNode(id);
  if (!el || el.tagName === 'A') continue; // already a real link in the markup
  const a = document.createElement('a');
  a.href = href; a.target = '_blank'; a.rel = 'noopener';
  a.className = el.className; a.style.cssText = el.style.cssText;
  a.dataset.nodeId = id;
  a.append(...el.childNodes);
  el.replaceWith(a);
}
