import { fv, Chrome, Subtitle, SideText } from './_shared.jsx';

const imgVector = "https://www.figma.com/api/mcp/asset/d6140496-625c-4464-adde-9d3c726856c7.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/71f3d0e1-903a-4c43-8247-b589c436e5a1.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/b4ddf4e7-2511-4ded-b8ca-2a73e1cc2598.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/59b3bb3f-449d-47e3-a5e5-5380cbf6d461.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/aaa745bf-6f21-4482-93a7-13766a3ccbac.svg";

const piece = (left, top, w, h, src) => (
  <div className="absolute" style={{ left, top, width: w, height: h }} data-name="Vector">
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
  </div>
);
// Small "Marca viva" mark with a project name; w = group width.
const Mark = ({ w, text }) => (
  <div className="h-[80px] relative shrink-0" style={{ width: w }} data-name={`Marca viva · ${text}`}>
    {piece(0, 0.15, 60.512, 79.847, imgVector)}
    {piece(67.78, 0.45, 29.725, 42.641, imgVector1)}
    {piece(w - 60.507, 0.15, 60.512, 79.857, imgVector2)}
    {piece(w - 97.507, 37.05, 29.725, 42.641, imgVector3)}
    {piece(w - 14.367, 0, 10.145, 10.033, imgVector4)}
    <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[105.78px] not-italic text-[#0c0c0c] text-[10.575px] top-[33.56px] tracking-[0.846px] uppercase whitespace-nowrap" style={fv}>
      {text}
    </p>
  </div>
);

// Hidden template layers under the panel 19:2490 are omitted.
export default function Component27MarcaVivaProyectos() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="19:2481" data-name="27 - Marca viva Proyectos">
      <Chrome title="Marca viva" />
      <Subtitle>Proyectos</Subtitle>
      <div className="absolute content-stretch flex gap-[110px] items-start left-[554px] overflow-clip top-[281px] w-[1046.58px]" data-node-id="2014:655" data-name="Marca viva · Proyectos">
        <Mark w={272.247} text="Casa M10" />
        <Mark w={272.247} text="Casa El 3" />
        <Mark w={274.086} text="Casa M03" />
      </div>
      <SideText>Cada obra recibe su propia versión, con el nombre de la casa en el centro. Se usa en la valla de obra y en todo lo que se publique sobre ese proyecto.</SideText>
    </div>
  );
}
