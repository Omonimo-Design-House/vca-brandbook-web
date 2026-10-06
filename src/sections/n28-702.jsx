import { Chrome, Subtitle, Rule, PhotoRow, fv } from './_shared.jsx';

const p = (left, top, width, height) => ({ left, top, width, height });
const crops = [
  ["https://www.figma.com/api/mcp/asset/cea6e3a6-bec0-44dd-9ba7-c565f2b6b426.png", p('-54.39%', '-12.5%', '209.21%', '125%')],
  ["https://www.figma.com/api/mcp/asset/876e8bb4-120f-442c-8024-fea18ccb56f3.png", p('-73.33%', '-6.25%', '222.22%', '125%')],
  ["https://www.figma.com/api/mcp/asset/bec09b3d-c74f-4e35-8527-7c0fa1370166.png", p('-9.86%', '-25%', '197.24%', '166.67%')],
  ["https://www.figma.com/api/mcp/asset/442b083e-9575-42da-8bcf-630e36224ed9.png", p('-76.14%', '-38.57%', '253.81%', '142.86%')],
];

export default function RecursosRelieve() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="28:702" data-name="06-Personalidad">
      <Chrome title={`Recursos Gráficos `} />
      <Subtitle>Logo en Alto y Bajo Relieve</Subtitle>
      <Rule left={81} top={229} w={248} />
      <PhotoRow id="28:723" crops={crops} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[88px] not-italic text-[#0c0c0c] text-[20px] top-[257px] w-[231px]" style={fv}>
        El relieve, alto o bajo, graba el logo sobre papel, tela o un muro de estuco hasta convertirlo en una marca que se percibe por el tacto y la sombra más que por la lectura. Por eso es la única aplicación donde puede usarse a gran escala y en el mismo tono del fondo: aquí funciona como textura del material.
      </p>
    </div>
  );
}
