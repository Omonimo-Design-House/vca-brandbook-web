import { Chrome, Subtitle, Rule, PhotoRow, fv } from './_shared.jsx';

const p = (left, top, width, height) => ({ left, top, width, height });
const crops = [
  ["https://www.figma.com/api/mcp/asset/62fdaa15-ec18-44c5-8b2c-caa65aea7a59.png", p('0', '-122.22%', '371.75%', '222.22%')],
  ["https://www.figma.com/api/mcp/asset/dd48791c-65ff-403d-bc98-5b7e1c1ba80b.png", p('-150%', '-163.84%', '500%', '282.49%')],
  ["https://www.figma.com/api/mcp/asset/3e2ab496-1d6d-42b9-8a45-99b826cd4b66.png", p('-267.72%', '0', '393.7%', '333.33%')],
  ["https://www.figma.com/api/mcp/asset/eb802216-f367-4a06-8306-00512a89f180.png", p('-19.69%', '-4.44%', '393.7%', '222.22%')],
];

export default function RecursosTexturas() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="28:667" data-name="06-Personalidad">
      <Chrome title={`Recursos Gráficos `} />
      <Subtitle>Texturas</Subtitle>
      <Rule left={81} top={229} w={248} />
      <PhotoRow id="28:696" crops={crops} />
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] left-[88px] not-italic text-[#0c0c0c] text-[20px] top-[257px] w-[231px] whitespace-pre-wrap" style={fv}>
        <p className="leading-[normal] mb-0">Las texturas dan profundidad táctil a los fondos: la marca de un papel, el tejido fino de una tela. Sostienen el color y la tipografía sin llamar la atención sobre sí mismas.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Se aplican como capa de fondo, a baja intensidad y en un solo tono por pieza — nunca combinando varias texturas entre sí, y nunca con tanta fuerza que empiecen a competir con el texto que llevan encima.</p>
      </div>
    </div>
  );
}
