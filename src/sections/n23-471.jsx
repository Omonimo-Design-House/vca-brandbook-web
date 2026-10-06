import { fv, Chrome, Subtitle, Rule } from './_shared.jsx';

const imgFoto = "https://www.figma.com/api/mcp/asset/bd91293f-3b22-4211-88b0-973877346c10.png";
const imgFoto1 = "https://www.figma.com/api/mcp/asset/42cc57fb-381b-4e31-bdc0-9cac85ecff1d.png";
const imgFoto2 = "https://www.figma.com/api/mcp/asset/83a35802-7593-45e9-9a2e-e9526d913ea2.png";

const Foto = ({ src, left }) => (
  <div className="flex-[1_0_0] h-[420px] min-w-px relative rounded-[24px]" data-name="FOTO">
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
      <img alt="" className="absolute h-full max-w-none top-0 w-[207.47%]" style={{ left }} src={src} />
    </div>
  </div>
);

// Hidden template layers under the full-cover panel 23:476 are omitted.
export default function Component31ColorizacionDeFotoYVideo() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="23:471" data-name="31 - Colorización de foto y video">
      <Chrome title="Color" />
      <Subtitle>Colorización de foto y video</Subtitle>
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[0] left-[365px] not-italic text-[#0c0c0c] text-[0px] top-[711px] w-[1475px] whitespace-pre-wrap" data-node-id="25:623" style={fv}>
        <p className="leading-[normal] mb-0 text-[24px]">Especificaciones Técnicas</p>
        <p className="leading-[normal] mb-0 text-[20px]">​</p>
        <p className="font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] text-[20px]" style={fv}>
          Luz natural y cálida, entre 4000 y 4500K, que entra de lado por una ventana o una claraboya. Contraste bajo y sombras con detalle. Saturación reducida entre 15–20%, para que la piedra y la madera se acerquen a “Resplandor y Vital”, y la vegetación a “Paisaje”. Si aparece una persona, va en movimiento con barrido de cámara (1/8 a 1/15 de segundo) y el espacio sigue siendo el protagonista.
        </p>
      </div>
      <div className="absolute content-stretch flex gap-[20px] h-[433px] items-start left-[364px] overflow-clip top-[234px] w-[1478px]" data-node-id="23:601" data-name="Fotos">
        <Foto src={imgFoto} left="-32.99%" />
        <Foto src={imgFoto1} left="-43.36%" />
        <Foto src={imgFoto1} left="-107.47%" />
        <Foto src={imgFoto2} left="-78.63%" />
      </div>
      <Rule left={81} top={237} w={247} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[83px] not-italic text-[#0c0c0c] text-[20px] top-[257px] w-[240px]" data-node-id="23:621" style={fv}>
        Un mismo lugar puede sentirse completamente distinto según el tratamiento de color que reciba. Estas son las reglas que hacen que cualquier pieza visual se reconozca como parte de la marca.
      </p>
    </div>
  );
}
