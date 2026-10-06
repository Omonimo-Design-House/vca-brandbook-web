// Pieces repeated on almost every brandbook page in Figma (same classes as the exported layers).
export const fv = { fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' };

// The two top rules at y=57. Figma exports the long one as an SVG of a solid #0C0C0C 1476×2 box.
export function TopRules({ color = '#0c0c0c' }) {
  return (
    <>
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" style={{ background: color }} data-name="Regla lateral" />
      <div className="absolute h-[2px] left-[80px] top-[57px] w-[248px]" style={{ background: color }} data-name="Regla lateral" />
    </>
  );
}

// "VC Arquitectura® / Brand Guidelines" meta block, top left.
export function Meta({ left = 81, color = '#0c0c0c', dim = 'rgba(12,12,12,0.45)' }) {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Google_Sans_Flex:Medium'] font-medium gap-px items-start leading-[normal] not-italic overflow-clip text-[15px] top-[72px] whitespace-nowrap" style={{ left }} data-name="Meta">
      <p className="relative shrink-0" style={{ ...fv, color }}>VC Arquitectura®</p>
      <p className="relative shrink-0" style={{ ...fv, color: dim }}>Brand Guidelines</p>
    </div>
  );
}

// Section title next to the meta block (32px Medium).
export function Title({ left = 365, color = '#0c0c0c', children }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start overflow-clip top-[72px]" style={{ left }} data-name="Meta">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[32px] whitespace-nowrap" style={{ ...fv, color }}>
        {children}
      </p>
    </div>
  );
}

// Full chrome: rules + meta + optional title.
export function Chrome({ title, metaLeft, titleLeft, color, dim }) {
  return (
    <>
      <TopRules color={color} />
      <Meta left={metaLeft} color={color} dim={dim} />
      {title && <Title left={titleLeft} color={color}>{title}</Title>}
    </>
  );
}

// Glass pill with an underlined uppercase Drive link (download buttons).
export function Pill({ id, linkId, left, top, href, children }) {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center p-[25px] rounded-[37px]" style={{ left, top }} data-node-id={id}>
      <a className="[word-break:break-word] block font-['Google_Sans_Flex:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#0c0c0c] text-[16px] tracking-[4.16px] uppercase whitespace-nowrap" href={href} data-node-id={linkId} style={fv} target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">{children}</p>
      </a>
    </div>
  );
}

// Italic grey subtitle under the section title (y=116).
export function Subtitle({ left = 365, children }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start overflow-clip top-[116px]" style={{ left }} data-name="Meta">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Light_Italic'] font-light italic leading-[normal] relative shrink-0 text-[24px] text-[rgba(12,12,12,0.45)] whitespace-nowrap" style={fv}>
        {children}
      </p>
    </div>
  );
}

// Big thin chapter word (Core Values, Logotipo, …) at y=151.
export function ChapterWord({ children }) {
  return (
    <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin h-[286px] leading-[275px] left-[364px] not-italic text-[#0c0c0c] text-[315px] top-[151px] tracking-[-12.6px] w-[1493px]" style={fv}>
      {children}
    </p>
  );
}

// Two-line meta used on chapter openers (absolute <p>s instead of a flex column).
export function OpenerMeta() {
  return (
    <>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[81px] not-italic text-[#0c0c0c] text-[15px] top-[72px] whitespace-nowrap" style={fv}>VC Arquitectura®</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[81px] not-italic text-[15px] text-[rgba(12,12,12,0.45)] top-[91px] whitespace-nowrap" style={fv}>Brand Guidelines</p>
    </>
  );
}

// Grey divider rule (rgba 0.45) used inside pages.
export function Rule({ left, top, w, h = 2 }) {
  return <div className="absolute bg-[rgba(12,12,12,0.45)]" style={{ left, top, width: w, height: h }} data-name="Regla lateral" />;
}

// Left column note: grey rule at y=237 and ExtraLight 20px text at y=257.
export function SideNote({ w = 247, ruleLeft = 81, ruleW = 247, children }) {
  return (
    <>
      <Rule left={ruleLeft} top={237} w={ruleW} />
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] left-[81px] not-italic text-[#0c0c0c] text-[20px] top-[257px] whitespace-pre-wrap" style={{ ...fv, width: w }}>
        {children}
      </div>
    </>
  );
}
export const NoteP = ({ children, last }) => <p className={`leading-[normal]${last ? '' : ' mb-0'}`}>{children}</p>;
export const NoteGap = () => <p className="leading-[normal] mb-0">​</p>;

// Spaced uppercase label (CORRECTO / INCORRECTO), 13px.
export function Label({ left, top, children }) {
  return (
    <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#0c0c0c] text-[13px] tracking-[5.46px] uppercase whitespace-nowrap" style={{ ...fv, left, top }}>
      {children}
    </p>
  );
}

// Bold title + ExtraLight description (20px), used under logo examples.
export function Caption({ left, top, w, title, children }) {
  return (
    <div className={`[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] not-italic text-[#0c0c0c] text-[0px] ${w ? '' : 'whitespace-nowrap'}`} style={{ ...fv, left, top, width: w }}>
      <p className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal] mb-0 text-[20px]" style={fv}>{title}</p>
      <p className="leading-[normal] text-[20px]">{children}</p>
    </div>
  );
}

// "Marca viva" logo: the VCA pieces pulled apart with a word in the middle of the C.
// w = group width; the right-hand pieces sit at fixed offsets from the right edge.
export function LivingMark({ id, cls, w, text, imgs: [a, b, c, d, e] }) {
  const piece = (left, top, pw, ph, src) => (
    <div className="absolute" style={{ left, top, width: pw, height: ph }} data-name="Vector">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
    </div>
  );
  return (
    <div className={`-translate-y-1/2 absolute h-[120px] ${cls}`} style={{ width: w }} data-node-id={id}>
      {piece(0, 0.22, 90.768, 119.77, a)}
      {piece(101.67, 0.68, 44.587, 63.962, b)}
      {piece(w - 90.768, 0.22, 90.768, 119.785, c)}
      {piece(w - 146.258, 55.57, 44.587, 63.962, d)}
      {piece(w - 21.558, 0, 15.218, 15.049, e)}
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[158.67px] not-italic text-[#0c0c0c] text-[15.862px] top-[50.34px] tracking-[1.269px] uppercase whitespace-nowrap" style={fv}>
        {text}
      </p>
    </div>
  );
}

// Side note variant used on later pages: rule at y=237, 20px ExtraLight <p> at x=88.
export function SideText({ w = 231, children }) {
  return (
    <>
      <Rule left={81} top={237} w={247} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[88px] not-italic text-[#0c0c0c] text-[20px] top-[257px]" style={{ ...fv, width: w }}>
        {children}
      </p>
    </>
  );
}

// Line-height / letter-spacing glyphs beside the typography spec lists (1px grey ticks + "A").
// `y` = top of the letter-spacing glyph (384/385), `ly` = top of the line-height glyph (450/449).
export function MeasureIcons({ y, ly }) {
  const tick = { background: 'rgba(12,12,12,0.45)' };
  const A = (left, top, size) => (
    <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[16px] not-italic text-[rgba(12,12,12,0.45)] whitespace-nowrap" style={{ ...fv, left, top, fontSize: size }}>A</p>
  );
  return (
    <>
      <div className="absolute h-[1px] left-[57px] w-[15px]" style={{ ...tick, top: ly - 1 }} />
      <div className="absolute h-[1px] left-[57px] w-[15px]" style={{ ...tick, top: ly + 14 }} />
      {A(60, ly, 14)}
      <div className="absolute h-[15px] left-[56.5px] w-[1px]" style={{ ...tick, top: y + 1 }} />
      <div className="absolute h-[15px] left-[71.5px] w-[1px]" style={{ ...tick, top: y + 1 }} />
      {A(61, y, 10)}
    </>
  );
}

// Typography spec list: [label, value] pairs separated by blank lines (20px, 22px leading).
export function SpecList({ items, top = 249 }) {
  return (
    <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[0] left-[80px] not-italic text-[#0c0c0c] text-[0px] w-[248px] whitespace-pre-wrap" style={{ top }}>
      {items.map(([k, v], i) => (
        <div key={k}>
          {i > 0 && <p className="leading-[22px] mb-0 text-[20px]">​</p>}
          <p className="mb-0 text-[20px]">
            <span className="font-['Google_Sans_Flex:Medium'] font-medium leading-[22px] text-[#0c0c0c]" style={fv}>{k}</span>
            <span className="font-['Google_Sans_Flex:Light'] font-light leading-[22px]" style={fv}>{` ${v}`}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

// Row of four bordered photo cards (420px tall) at y=230; each crop = [src, {left, top, width, height}].
export function PhotoRow({ id, crops, top = 230, border = true }) {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[433px] items-start left-[364px] overflow-clip w-[1478px]" style={{ top }} data-node-id={id} data-name="Fotos">
      {crops.map(([src, pos], i) => (
        <div key={i} className={`${border ? 'border-[#0c0c0c] border-[1.5px] border-solid ' : ''}flex-[1_0_0] h-[420px] min-w-px relative rounded-[24px]`} data-name="FOTO">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
            <img alt="" className="absolute max-w-none" style={pos} src={src} />
          </div>
        </div>
      ))}
    </div>
  );
}
