import { Chrome, Subtitle, SideText } from './_shared.jsx';

const imgCombinacion = "https://www.figma.com/api/mcp/asset/f5d83ad7-8664-4c42-be72-fecab552d9a2.svg";
const imgCombinacion1 = "https://www.figma.com/api/mcp/asset/75c1e6a0-9de4-4e5a-916b-c7acbebef48d.svg";
const imgCombinacion2 = "https://www.figma.com/api/mcp/asset/912e627f-23ba-46bb-8bc4-89b3acf49cdb.svg";
const imgCombinacion3 = "https://www.figma.com/api/mcp/asset/658cbfd6-6490-41c8-b631-f8e0aa098bec.svg";
const imgCombinacion4 = "https://www.figma.com/api/mcp/asset/f4a81639-23d8-4442-8a2e-f1e418a9e14c.svg";

const Combo = ({ src }) => (
  <div className="h-[290px] relative shrink-0 w-[400px]" data-name="Combinación">
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
  </div>
);
const Fila = ({ children }) => (
  <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Fila">{children}</div>
);

// Hidden template layers under the full-cover panel 20:2902 are omitted.
export default function Component30ColorArmoniasDeColor() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="20:2897" data-name="30- Color - Armonías de Color">
      <Chrome title="Color" />
      <Subtitle>Armonías de Color</Subtitle>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[365px] overflow-clip top-[233px] w-[1496px]" data-node-id="20:3057" data-name="Contenido">
        <Fila><Combo src={imgCombinacion} /></Fila>
        <Fila><Combo src={imgCombinacion1} /></Fila>
        <Fila><Combo src={imgCombinacion2} /></Fila>
        <Fila><Combo src={imgCombinacion3} /><Combo src={imgCombinacion4} /></Fila>
      </div>
      <SideText>Cada color de fondo tiene un acento que le sienta bien: uno claro, que abre espacio, y uno oscuro, que da profundidad. Estas son las combinaciones ya probadas — el punto de partida antes de armar una pieza nueva.</SideText>
    </div>
  );
}
