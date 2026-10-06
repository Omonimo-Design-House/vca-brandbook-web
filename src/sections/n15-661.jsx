import { fv, Chrome, Subtitle, SideNote, NoteP, NoteGap } from './_shared.jsx';

const imgCapa1 = "https://www.figma.com/api/mcp/asset/4e9faf6a-07f7-4512-bb2f-c76bae1f0848.svg";

const labels = [
  [365, 1074, 223, 'Comunicación Corporativa'], [1123, 1078, 223, 'Camiseta'], [1588, 1074, 223, 'Lockscreen'],
  [1027, 585, 223, 'Sobre'], [1619, 333, 192, 'Tarjeta Personal'], [1619, 619, 88, 'Regalo corporativo'], [1717, 620, 46, 'ID'],
];

// Hidden template layers under the panel 15:666 are omitted.
export default function Component15LogotipoEjemplosDeAplicacion() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="15:661" data-name="15-Logotipo ejemplos de aplicación">
      <Chrome title="Logotipo" />
      <Subtitle>Ejemplos de aplicación</Subtitle>
      <SideNote ruleLeft={80} ruleW={248}>
        <NoteP>{`El logotipo es la firma principal de VC Arquitectura: la forma en que el nombre se escribe cuando hay espacio para hacerlo con claridad. `}</NoteP>
        <NoteGap />
        <NoteP last>Va en papelería, señalética, web, publicidad y cualquier pieza donde el logotipo sea protagonista. El símbolo ® acompaña la firma en la mayoría de los casos, si el espacio es reducido podemos omitirlo.</NoteP>
      </SideNote>
      {labels.map(([left, top, w, text]) => (
        <p key={text} className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#0c0c0c] text-[14px]" style={{ ...fv, left, top, width: w }}>
          {text}
        </p>
      ))}
      <div className="absolute h-[841px] left-[365px] top-[197px] w-[1470px]" data-node-id="15:787" data-name="Capa_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCapa1} />
      </div>
    </div>
  );
}
