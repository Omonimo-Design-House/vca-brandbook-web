import { fv, Chrome, Subtitle, SideNote, NoteP, NoteGap } from './_shared.jsx';

const imgLogoVca = "https://www.figma.com/api/mcp/asset/7d2ca0f8-b925-425f-85f2-2f52dc8a3804.svg";

const Box = ({ cls }) => <div className={`absolute border-[1.5px] border-solid border-white ${cls}`} data-name="Logo box" />;
const VBox = ({ left }) => (
  <div className="absolute flex h-[357.861px] items-center justify-center top-[209.14px] w-[90.029px]" style={{ left }}>
    <div className="flex-none rotate-90">
      <div className="border-[1.5px] border-solid border-white h-[90.029px] relative w-[357.861px]" data-name="Logo box" />
    </div>
  </div>
);
const Pct = ({ left, top }) => (
  <p className="absolute h-[18.96px] w-[34.353px]" style={{ ...fv, left, top }}>50%</p>
);

// Hidden template layers under the full-cover panel 14:406 are omitted.
export default function Component12LogotipoClearSpace() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="14:397" data-name="12.Logotipo Clear space">
      <Chrome title="Logotipo" />
      <Subtitle>Clear Space</Subtitle>
      <SideNote w={255}>
        <NoteP>El logo de VC Arquitectura es ligero y se sostiene en trazos finos, así que necesita aire alrededor. Le damos un margen que ningún otro elemento (texto, imagen, borde) puede invadir. Ese espacio protege su legibilidad.</NoteP>
        <NoteGap />
        <NoteP last>Se calcula dejando un margen vacío equivalente al 50% de su altura.</NoteP>
      </SideNote>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light_Italic'] font-light italic leading-[normal] left-[724.71px] text-[16px] text-[rgba(12,12,12,0.45)] top-[594px] whitespace-nowrap" data-node-id="15:510" style={fv}>
        Clear Space: 50% de la altura del logo a cada lado
      </p>
      <div className="absolute contents" data-node-id="14:509">
        <div className="absolute bg-[rgba(217,217,217,0.5)] h-[86.503px] left-[727.08px] top-[211.51px] w-[85.291px]" />
        <div className="absolute bg-[rgba(217,217,217,0.5)] h-[86.503px] left-[727.08px] top-[480.5px] w-[85.291px]" />
        <div className="absolute bg-[rgba(217,217,217,0.5)] h-[86.503px] left-[1296.63px] top-[480.5px] w-[85.291px]" />
        <div className="absolute bg-[rgba(217,217,217,0.5)] h-[86.503px] left-[1296.63px] top-[210.32px] w-[85.291px]" />
        <Box cls="h-[180.116px] left-[813.56px] top-[298.01px] w-[481.887px]" />
        <Box cls="h-[90.058px] left-[724.71px] top-[209.14px] w-[659.576px]" />
        <Box cls="h-[90.058px] left-[724.71px] top-[476.94px] w-[659.576px]" />
        <Box cls="h-[90.058px] left-[724.71px] top-[388.07px] w-[659.576px]" />
        <VBox left={1294.26} />
        <VBox left={724.71} />
        <div className="[word-break:break-word] absolute contents font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#0c0c0c] text-[13px]" data-name="50%">
          <Pct left={1323.87} top={514.86} />
          <Pct left={1323.87} top={245.87} />
          <Pct left={753.14} top={245.87} />
          <Pct left={753.14} top={514.86} />
        </div>
        <div className="-translate-y-1/2 absolute h-[178.931px] left-[812.54px] top-[calc(50%+31.66px)] w-[477.148px]" data-node-id="2013:766" data-name="Logo VCA">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca} />
        </div>
      </div>
    </div>
  );
}
