import { fv, TopRules, Meta, Pill } from './_shared.jsx';

export default function DescargarPdf() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="30:867" data-name="06-Personalidad">
      <Meta />
      <div className="absolute content-stretch flex flex-col h-[723px] items-start left-[92px] overflow-clip top-[181px] w-[1372px]" data-name="Meta">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Thin'] font-thin leading-[157px] not-italic relative shrink-0 text-[#0c0c0c] text-[158px] tracking-[-3.16px] w-[1324px]" data-node-id="30:873" style={fv}>{`Para descargar la versión PDF de este manual, haz clicK en el botón `}</p>
      </div>
      <TopRules />
      <Pill id="41:477" linkId="41:478" left={661} top={714} href="https://drive.google.com/drive/folders/11jGpsieZniA67_PjDkSnlmQ43b06UsOh?usp=drive_link">descargar EN PDF</Pill>
    </div>
  );
}
