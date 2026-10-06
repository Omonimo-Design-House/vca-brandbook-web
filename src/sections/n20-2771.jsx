import { fv, Chrome, Subtitle } from './_shared.jsx';

// One colour card: name on top, Digital / Impreso specs at the bottom.
function Swatch({ cls, name, hex, cmyk, cmykFont = "font-['Inter:Light']" }) {
  return (
    <div className={`border-[1.5px] border-solid content-stretch flex flex-[1_0_0] flex-col h-[699px] items-start justify-between min-w-px overflow-clip pb-[30px] pt-[26px] px-[30px] relative rounded-[24px] ${cls}`} data-name="Color">
      <p className="font-['Google_Sans_Flex:Light'] relative shrink-0" style={fv}>{name}</p>
      <div className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full" data-name="Specs">
        <div className="content-stretch flex flex-col font-['Inter:Light'] gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Digital">
          <p className="[text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">Digital:</p>
          <p className="relative shrink-0">{hex}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Impresos">
          <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Light'] relative shrink-0 underline">Impreso:</p>
          <p className={`${cmykFont} relative shrink-0`} style={fv}>{cmyk}</p>
        </div>
      </div>
    </div>
  );
}
const Row = ({ top, children }) => (
  <div className="absolute content-stretch flex flex-col h-[699px] items-start left-[364px] overflow-clip w-[1454px]" style={{ top }} data-name="Contenido">
    <div className="[word-break:break-word] content-stretch flex font-light gap-[24px] h-[699px] items-start leading-[33px] not-italic overflow-clip relative shrink-0 text-[#0c0c0c] text-[25px] w-[1454px] whitespace-nowrap" data-name="Swatches">
      {children}
    </div>
  </div>
);

// Hidden template layers under the full-cover panel 20:2776 are omitted.
export default function Component29ColorPaletaPrincipal() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="20:2771" data-name="29 - Color Paleta Principal">
      <Chrome title="Color" />
      <Subtitle>Paleta Principal</Subtitle>
      <Row top={230}>
        <Swatch cls="bg-[#0c0c0c] border-[#0c0c0c] text-[#e9e5da]" name="Grafito (Materiales)" hex="#0C0C0C" cmyk="C:86 M:76 Y:46 K:100" />
        <Swatch cls="bg-[#e6dbb9] border-[#e6dbb9]" name="Resplandor (Luz)" hex="#E6DBB9" cmyk="C:13 M:13 Y:33 K:0" />
      </Row>
      <Row top={954}>
        <Swatch cls="bg-[#b2bca2] border-[#b2bca2]" name="Paisaje (Entorno)" hex="#B2BCA2" cmyk="C:36 M:18 Y:40 K:3" />
        <Swatch cls="bg-[#e9e5da] border-[#0c0c0c]" name="Vital (Movimiento)" hex="#E9E5DA" cmyk="C:11 M:9 Y:16 K:0" cmykFont="font-['Google_Sans_Flex:Light']" />
      </Row>
    </div>
  );
}
