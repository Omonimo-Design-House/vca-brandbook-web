import { fv, Chrome, Subtitle, Rule } from './_shared.jsx';

const imgLogoVca = "https://www.figma.com/api/mcp/asset/47272a7a-1ed7-44d2-8ef7-e17e84c25b95.svg";
const imgLine15 = "https://www.figma.com/api/mcp/asset/3abc6586-808f-4439-9bab-b5e73698dcfe.svg";

const Level = ({ top, name, font, size }) => (
  <div className="[word-break:break-word] absolute leading-[0] left-[457px] not-italic text-[#0c0c0c] text-[0px] w-[248px]" style={{ top }}>
    <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[16px] mb-0 text-[16px]" style={fv}>{name}</p>
    <p className="font-['Google_Sans_Flex:Light'] font-light leading-[16px] mb-0 text-[16px]" style={fv}>{font}</p>
    <p className="font-['Google_Sans_Flex:Light'] font-light leading-[16px] mb-0 text-[16px]" style={fv}>{size}</p>
  </div>
);
const Arrow = ({ top }) => (
  <div className="absolute flex h-0 items-center justify-center left-[457px] w-[455px]" style={{ top }}>
    <div className="flex-none rotate-180">
      <div className="h-0 relative w-[455px]">
        <div className="absolute inset-[-2.67px_0_-2.67px_-0.59%]">
          <img alt="" className="block max-w-none size-full" src={imgLine15} />
        </div>
      </div>
    </div>
  </div>
);

export default function Component37TipografiaJerarquiaVisual() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="33:1232" data-name="37 - Tipografía Jerarquía Visual">
      <Chrome title="Tipografía" />
      <Subtitle>Jerarquía Visual</Subtitle>
      <Rule left={81} top={229} w={248} />
      <Level top={469} name="Título:" font="Google Sans Flex Thin" size="110 pt" />
      <Level top={678} name="Subtítulo" font="Google Sans Flex Medium" size="24 pt" />
      <Level top={793} name="Texto corrido" font="Google Sans Flex Regular" size="14 pt" />
      <div className="absolute bg-white h-[835px] left-[834px] top-[229px] w-[1006px]" data-node-id="33:1261" />
      <div className="-translate-y-1/2 absolute h-[33.926px] left-[941px] top-[calc(50%-124.54px)] w-[90.469px]" data-node-id="2013:742" data-name="Logo VCA">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca} />
      </div>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin leading-[90px] left-[930px] not-italic text-[#0c0c0c] text-[110px] top-[396px] tracking-[-4.4px] w-[831px]" style={fv}>
        Encontramos el espacio correcto.
      </p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[27px] left-[930px] not-italic text-[#0c0c0c] text-[24px] top-[647px] tracking-[8.64px] w-[831px]" style={fv}>
        ENTRE EL CUERPO Y EL ESPACIO
      </p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal leading-[16px] left-[930px] not-italic text-[#0c0c0c] text-[14px] top-[729px] w-[385px]" style={fv}>
        Antes de dibujar el primer plano, Valentina pregunta cómo se mueve cada persona dentro de su casa: a qué hora entra la luz al cuarto y cuántos pasos hay entre la cocina y la mesa. Con esas respuestas se ubican las ventanas y se decide el ancho de cada pasillo.
      </p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal leading-[16px] left-[1346px] not-italic text-[#0c0c0c] text-[14px] top-[729px] w-[385px]" style={fv}>
        El resultado se nota al entrar. La piedra del baño está tibia en la mañana, la sala recibe sol de lado después del almuerzo y nadie tiene que pensar por dónde caminar. VC Arquitectura trabaja con ese criterio desde el primer boceto hasta la entrega de llaves.
      </p>
      <Arrow top={439} />
      <Arrow top={660} />
      <Arrow top={769} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[88px] not-italic text-[#0c0c0c] text-[20px] top-[257px] w-[240px]" style={fv}>
        Cada nivel de texto cumple una función distinta: el título capta la atención, el subtítulo la sostiene, y el cuerpo de texto explica. Tres tamaños, tres pesos, un mismo sistema — así se lee una pieza de un vistazo, sin perderse en ella.
      </p>
    </div>
  );
}
