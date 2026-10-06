import { fv, Chrome, Subtitle, Rule } from './_shared.jsx';

const imgRectangle9 = "https://www.figma.com/api/mcp/asset/dfabda9f-dcae-44bd-baf5-d1ef8175c8a7.png";
const imgCirculo = "https://www.figma.com/api/mcp/asset/3447fd8a-8fc5-44af-8251-77bfcb1eef19.svg";
const imgCirculo1 = "https://www.figma.com/api/mcp/asset/563ebbe9-e0cf-479f-a0d6-9eec7d2860ad.svg";
const imgCirculo2 = "https://www.figma.com/api/mcp/asset/f2cb73ef-43fd-4357-8790-2db77fe171ec.svg";
const imgCirculo3 = "https://www.figma.com/api/mcp/asset/a8ae388e-66a9-4912-bcea-0fc46fc2d77a.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/28f8d1cd-0d4c-48ab-8538-80b6044c70df.svg";
const imgLine5 = "https://www.figma.com/api/mcp/asset/6afb23e5-b2b2-485c-9732-60a699231fa3.svg";

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
const Circle = ({ left, src }) => (
  <div className="absolute size-[130px] top-[435px]" style={{ left }} data-name="Círculo">
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
  </div>
);
const CardLabel = ({ left, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#0c0c0c] text-[10px] top-[345px] w-[130px]" style={{ ...fv, left }}>{children}</p>
);
const B = ({ children }) => <p className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal] mb-0 text-[20px]" style={fv}>{children}</p>;
const L = ({ children }) => <p className="leading-[normal] mb-0 text-[20px]" style={fv}>{children}</p>;
const Gap = () => <p className="leading-[normal] mb-0 text-[20px]">​</p>;
const Note = ({ left, children }) => (
  <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] not-italic text-[#0c0c0c] text-[0px] top-[749px] w-[342px] whitespace-pre-wrap" style={{ ...fv, left }}>
    {children}
  </div>
);

// Hidden template layers under the panel 31:1039 are omitted, as are leftovers copied from the
// logo page that are invisible (#E9E5DA on #E9E5DA): the second-row labels/strikes at y=871,
// the "Capa_1" vector at y=1002 and the "Color sobre fotografía" label above the 4th card.
export default function Component32ColorUsosIncorrectos() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="31:1034" data-name="32- Color usos incorrectos">
      <Chrome title="Color" />
      <Subtitle>Usos Incorrectos</Subtitle>
      <Rule left={81} top={237} w={247} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[normal] left-[88px] not-italic text-[#0c0c0c] text-[20px] top-[324px] w-[231px]" style={fv}>
        El color también tiene sus límites: estas son las combinaciones y aplicaciones que rompen la identidad de la marca.
      </p>
      <div className="absolute bg-[#b2bca2] left-[364px] rounded-[10px] size-[342px] top-[329px]" />
      <div className="absolute bg-[#e6dbb9] left-[742px] rounded-[10px] size-[342px] top-[329px]" />
      <div className="absolute bg-white left-[1120px] rounded-[10px] size-[342px] top-[329px]" />
      <div className="absolute left-[1498px] rounded-[10px] size-[342px] top-[329px]" data-node-id="31:1057">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle9} />
      </div>
      <Circle left={471} src={imgCirculo} />
      <Circle left={848} src={imgCirculo1} />
      <Circle left={1226} src={imgCirculo2} />
      <Circle left={1610} src={imgCirculo3} />
      <CardLabel left={379}>Armonia de color equivocada</CardLabel>
      <CardLabel left={758}>Poco Contraste</CardLabel>
      <CardLabel left={1134}>Colores fuera de paleta</CardLabel>
      <Strike left={379} top={345} img={imgLine4} />
      <Strike left={756} top={303} img={imgLine5} />
      <Strike left={1134} top={345} img={imgLine4} />
      <Strike left={1510} top={345} img={imgLine4} />
      {[364, 742, 1120, 1498].map(left => <Rule key={left} left={left} top={237} w={342} />)}
      <Note left={363}>
        <B>Incorrecto</B><L>Combinar colores de la paleta sin seguir las armonías ya definidas rompe la coherencia visual de la marca.</L><Gap />
        <B>Correcto</B><L>Usar únicamente las combinaciones validadas en la sección de Armonías de Color.</L>
      </Note>
      <Note left={742}>
        <B>Incorrecto</B><L>Cuando el acento y el fondo tienen valores muy similares, el color pierde su función y se vuelve invisible.</L><Gap />
        <B>Correcto</B><L>Elegir combinaciones con contraste suficiente para que el acento se distinga con claridad.</L>
      </Note>
      <Note left={1121}>
        <B>Incorrecto</B><L>Reemplazar Vital por blanco puro o Paisaje por un verde más saturado.</L><Gap /><Gap />
        <B>Correcto</B><L>Usar siempre los valores exactos de la paleta, en digital y en impreso.</L>
      </Note>
      <Note left={1498}>
        <B>Incorrecto</B><L>Un color sólido puesto directamente sobre una fotografía compite con la imagen y pierde su propia identidad.</L><Gap />
        <B>Correcto</B><L>Aplicar el color sobre áreas limpias de la imagen, o dejar que la fotografía hable sola.</L>
      </Note>
    </div>
  );
}
