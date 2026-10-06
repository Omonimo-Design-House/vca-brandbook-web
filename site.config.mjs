// Everything that changes between projects lives here. build.mjs reads it.
export default {
  // <head>
  lang: 'es',
  title: 'VC Arquitectura® — Brand guidelines',
  description: 'Brand guidelines de VC Arquitectura® por Omónimo Design House.',
  // One Google Fonts URL with every family/weight the design uses (incl. italics).
  googleFonts: 'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:ital,opsz,wght@0,6..144,100..1000;1,6..144,100..1000&family=Inter:wght@300;400;500&display=swap',

  // Width of the Figma frame. The page is laid out at this width and scaled to the screen.
  designWidth: 1920,
  // Colour behind the page (visible only on overscroll).
  pageBackground: '#e9e5da',

  // Figma family (as it appears in get_design_context, spaces -> "_") -> CSS font stack.
  fonts: {
    Google_Sans_Flex: "'Google Sans Flex', sans-serif",
    Inter: "'Inter', sans-serif",
  },

  // Prototype navigation: clicked node id -> target section node id (SCROLL_TO).
  nav: {
    '2:25': '2:86',      // Core Values
    '2:30': '13:208',    // Logotipo
    '2:40': '18:2245',   // Marca Viva
    '2013:875': '19:2758', // Color
    '2:50': '27:485',    // Tipografías
    '2:58': '27:654',    // Recursos Gráficos
    '2:61': '29:776',    // Key visuals
  },
  navFallback: {},
  links: {},

  // Nodes with Figma's GLASS effect (CSS approximation is applied to them).
  glassNodes: ['41:453', '41:457', '13:287', '41:469', '41:477'],

  // Elements fixed on screen while scrolling (Figma "fixed" children of the root frame).
  floating: [
    { nodeId: '41:446', x: 1765, y: 195, w: 80, h: 80, radius: 47, navTo: '2:12', glass: true,
      html: `<div class="content-stretch drop-shadow-[0px_0px_3.9px_rgba(0,0,0,0.25)] flex items-center justify-center px-[22px] py-[10px] relative rounded-[47px] size-full"><button class="[word-break:break-word] block cursor-pointer font-['Google_Sans_Flex:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0c0c] text-[13px] text-left tracking-[1.95px] whitespace-nowrap" data-node-id="41:445"><p class="leading-[1.202]">MENÚ</p></button></div>` },
  ],

  favicon: { asset: '5fb957c4-8a23-47b0-8e3a-922f004fe868.svg', touchBackground: '#e9e5da' },
};
