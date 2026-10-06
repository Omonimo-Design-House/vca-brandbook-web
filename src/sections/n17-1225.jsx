import { fv, Chrome, Subtitle, Rule, NoteP, NoteGap } from './_shared.jsx';

const imgLogoVca = "https://www.figma.com/api/mcp/asset/01669afe-0e4e-4fd6-b804-ecedcfc38d67.svg";
const imgLogoVca1 = "https://www.figma.com/api/mcp/asset/deb0c536-05b7-4626-8dea-bc1d60d0f703.svg";

const SizeLabel = ({ left, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#0c0c0c] text-[13px] top-[255px] tracking-[5.46px] uppercase whitespace-pre" style={{ ...fv, left }}>{children}</p>
);

// Hidden template layers and the older panel 17:1230 sit under the full-cover panel 17:1273 and are
// omitted. Logo centres were relative to that 1113px panel, so they are pinned in px here.
export default function Component14LogotipoTamanos() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="17:1225" data-name="14. Logotipo Tamaños">
      <Chrome title="Logotipo" />
      <Subtitle>Tamaños Permitidos</Subtitle>
      <SizeLabel left={365}>{`Tamaño  mínimo`}</SizeLabel>
      <SizeLabel left={1120}>{`Tamaño  mÁXIMO`}</SizeLabel>
      <Rule left={364} top={237} w={718} />
      <Rule left={1121} top={237} w={719} />
      <Rule left={364} top={627} w={718} />
      <Rule left={1121} top={627} w={719} />
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] left-[363px] not-italic text-[#0c0c0c] text-[20px] top-[660px] w-[342px] whitespace-pre-wrap" data-node-id="17:1291" style={fv}>
        <NoteP>Por debajo de este tamaño, el anillo del ® —el trazo más delgado de toda la pieza— empieza a cerrarse y pierde su forma.</NoteP>
        <NoteGap />
        <p className="leading-[normal] mb-0">
          — Mínimo impresión: 10 mm
          <br aria-hidden />
          <br aria-hidden />
        </p>
        <NoteP last>— Mínimo digital: 32 px</NoteP>
      </div>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[1120px] not-italic text-[#0c0c0c] text-[20px] top-[660px] w-[340px]" data-node-id="17:1292" style={fv}>
        No tiene límite superior. Está construido para sostenerse a cualquier escala sin perder proporción ni presencia, de una tarjeta a una fachada. La única condición es respetar siempre su clear space.
      </p>
      <div className="absolute bg-white h-[264px] left-[364px] top-[302px] w-[720px]" data-node-id="17:1342" />
      <div className="absolute bg-white h-[264px] left-[1120px] top-[302px] w-[720px]" data-node-id="17:1343" />
      <div className="-translate-y-1/2 absolute h-[173px] left-[1248.33px] top-[433.5px] w-[461.333px]" data-node-id="2013:730" data-name="Logo VCA">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca} />
      </div>
      <div className="-translate-y-1/2 absolute h-[27px] left-[685px] top-[438.5px] w-[72px]" data-node-id="2013:736" data-name="Logo VCA">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca1} />
      </div>
    </div>
  );
}
