import { fv, Chrome, Subtitle, SideNote, NoteP } from './_shared.jsx';

const imgRectangle11 = "https://www.figma.com/api/mcp/asset/acd3da48-c6bb-4f25-aa6b-2b26af4dec3f.png";
const imgLogoVca = "https://www.figma.com/api/mcp/asset/9934286b-5c21-4052-85fa-e92983266ce4.svg";
const imgLogoVca1 = "https://www.figma.com/api/mcp/asset/cec92b49-7da9-41cf-82b1-6274b9dc175d.svg";
const imgLogoVca2 = "https://www.figma.com/api/mcp/asset/2eeab4e7-51b4-4390-b603-5ec70eeeea10.svg";
const imgLogoVca3 = "https://www.figma.com/api/mcp/asset/449f661b-cdb0-4875-ab3b-df05a0e3fd48.svg";
const imgLogoVca4 = "https://www.figma.com/api/mcp/asset/12d063cc-d768-487c-a9bd-a6f0a5ad697e.svg";
const imgLogoVca5 = "https://www.figma.com/api/mcp/asset/3308964c-2ad8-4af9-8c32-7caacf5a4414.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/1b5f7b66-a279-401f-b7b3-28afe46d3326.svg";
const imgLine8 = "https://www.figma.com/api/mcp/asset/9451a08f-0105-4fe8-9f98-bc40881dc108.svg";

// Diagonal strike line across a 342px card.
const Strike = ({ left, top, img }) => (
  <div className="absolute flex items-center justify-center size-[315px]" style={{ left, top }}>
    <div className="-rotate-45 flex-none">
      <div className="h-0 relative w-[445.477px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={img} />
        </div>
      </div>
    </div>
  </div>
);
const CardLabel = ({ left, top, light, children }) => (
  <p className={`[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic ${light ? 'text-[#e9e5da]' : 'text-[#0c0c0c]'} text-[10px] w-[130px]`} style={{ ...fv, left, top }}>{children}</p>
);
// "Incorrecto / Correcto" note under each card.
const Note = ({ left, top, bad, good }) => (
  <div className="[word-break:break-word] absolute h-[138px] leading-[0] not-italic text-[#0c0c0c] text-[0px] w-[342px] whitespace-pre-wrap" style={{ left, top }}>
    <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] mb-0 text-[14px]" style={fv}>Incorrecto</p>
    <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] mb-0 text-[14px]" style={fv}>{bad}</p>
    <p className="leading-[normal] mb-0 text-[14px]">​</p>
    <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] mb-0 text-[14px]" style={fv}>Correcto</p>
    <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] text-[14px]" style={fv}>{good}</p>
  </div>
);
const Logo = ({ cls, src }) => (
  <div className={`-translate-y-1/2 absolute ${cls}`} data-name="Logo VCA">
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
  </div>
);

// Hidden template layers under the full-cover panel 15:932 are omitted.
export default function Component16LogotipoUsosIncorrectos() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="15:927" data-name="16-Logotipo usos incorrectos">
      <Chrome title="Logotipo" />
      <Subtitle>Usos Incorrectos</Subtitle>
      <div className="absolute bg-white left-[364px] rounded-[10px] size-[342px] top-[287px]" />
      <div className="absolute bg-[#b2bca2] left-[364px] rounded-[10px] size-[342px] top-[857px]" />
      <div className="absolute bg-white left-[742px] rounded-[10px] size-[342px] top-[287px]" />
      <div className="absolute left-[742px] rounded-[10px] size-[342px] top-[857px]" data-node-id="17:1438">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute left-[-32.5%] max-w-none size-[165%] top-[-32.5%]" src={imgRectangle11} />
        </div>
      </div>
      <div className="absolute bg-white left-[1120px] rounded-[10px] size-[342px] top-[287px]" />
      <div className="absolute bg-white left-[1498px] rounded-[10px] size-[342px] top-[287px]" />
      <Logo cls="h-[7px] left-[525.67px] top-[calc(50%-286px)] w-[18.667px]" src={imgLogoVca} />
      <Logo cls="h-[59px] left-[455.83px] top-[calc(50%+278px)] w-[157.333px]" src={imgLogoVca1} />
      <Logo cls="h-[57px] left-[836.5px] top-[calc(50%+275px)] w-[152px]" src={imgLogoVca2} />
      <Logo cls="h-[40px] left-[1615.17px] top-[calc(50%-283.5px)] w-[106.667px]" src={imgLogoVca3} />
      <Logo cls="h-[45px] left-[1205px] top-[calc(50%-284px)] w-[180px]" src={imgLogoVca4} />
      <div className="-translate-y-1/2 absolute flex h-[107.907px] items-center justify-center left-[844.14px] top-[calc(50%-297.78px)] w-[137.837px]" data-node-id="2013:844">
        <div className="-rotate-30 flex-none">
          <div className="h-[49.063px] relative w-[130.834px]" data-name="Logo VCA">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca5} />
          </div>
        </div>
      </div>
      <CardLabel left={379} top={303}>Usar a escala muy pequeña</CardLabel>
      <CardLabel left={379} top={871} light>Poco contraste</CardLabel>
      <CardLabel left={756} top={871} light>Imágenes muy pesadas</CardLabel>
      <CardLabel left={758} top={303}>Rotar 45°</CardLabel>
      <CardLabel left={1134} top={303}>Distorsionar</CardLabel>
      <CardLabel left={1512} top={303}>Cambiar color</CardLabel>
      <Strike left={379} top={303} img={imgLine4} />
      <Strike left={379} top={871} img={imgLine8} />
      <Strike left={756} top={303} img={imgLine4} />
      <Strike left={756} top={871} img={imgLine8} />
      <Strike left={1134} top={303} img={imgLine4} />
      <Strike left={1510} top={303} img={imgLine4} />
      {[364, 742, 1120, 1498].map(left => (
        <div key={left} className="absolute bg-[rgba(12,12,12,0.45)] h-[2px] top-[237px] w-[342px]" style={{ left }} data-name="Regla lateral" />
      ))}
      <Note left={363} top={668} bad="Por debajo del tamaño mínimo, los detalles se pierden y el logo deja de leerse con claridad." good="Respetar siempre el tamaño mínimo. Si el espacio no alcanza, se cambia el formato de la pieza." />
      <Note left={363} top={1238} bad="Sobre fondos de tono similar, el logo pierde presencia y legibilidad." good="Ubicarlo siempre sobre un fondo con contraste suficiente." />
      <Note left={742} top={668} bad="El logo nunca gira en un ángulo distinto a 90°." good="Siempre en posición horizontal o vertical (ver página de orientación)." />
      <Note left={742} top={1238} bad="Sobre fotografías cargadas de elementos, el logo compite y se diluye." good="Colocarlo en una zona limpia de la imagen o sobre un fondo sólido." />
      <Note left={1121} top={668} bad="Estirar o comprimir el logo altera sus proporciones y su carácter." good="Escalar siempre de forma proporcional, nunca solo en ancho o solo en alto." />
      <Note left={1498} top={668} bad="El logo no se adapta a colores fuera de la paleta de marca." good="Usar únicamente los colores oficiales definidos en este manual." />
      <SideNote ruleLeft={80} ruleW={248}>
        <NoteP last>Errores frecuentes que comprometen la legibilidad y el reconocimiento del logo.</NoteP>
      </SideNote>
    </div>
  );
}
