import { fv, Chrome, Subtitle, SideText, Rule } from './_shared.jsx';

const imgLine9 = "https://www.figma.com/api/mcp/asset/3ef6a4c1-c0c8-4c7f-9a33-d3fee866e9b5.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/1a5598c9-1553-4ee5-9b67-ebbb50b43dee.svg";

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
const WideStrike = ({ left }) => (
  <div className="absolute flex h-[311px] items-center justify-center top-[849px] w-[692px]" style={{ left }}>
    <div className="flex-none rotate-[-24.2deg]">
      <div className="h-0 relative w-[758.673px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine9} />
        </div>
      </div>
    </div>
  </div>
);
const CardLabel = ({ left, top = 303, w = 130, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#0c0c0c] text-[10px]" style={{ ...fv, left, top, width: w }}>{children}</p>
);
const Big = ({ top, w = 502, left = 473, children }) => (
  <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic text-[#0c0c0c] text-[32px]" style={{ ...fv, left, top, width: w }}>{children}</p>
);
const Note = ({ left, top, bad, good, gap }) => (
  <div className="[word-break:break-word] absolute h-[138px] leading-[0] not-italic text-[#0c0c0c] text-[0px] w-[342px] whitespace-pre-wrap" style={{ left, top }}>
    <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] mb-0 text-[14px]" style={fv}>Incorrecto</p>
    <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] mb-0 text-[14px]" style={fv}>
      {bad}
      {gap && <><br aria-hidden /><br aria-hidden /></>}
    </p>
    {!gap && <p className="leading-[normal] mb-0 text-[14px]">​</p>}
    <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] mb-0 text-[14px]" style={fv}>Correcto</p>
    <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] text-[14px]" style={fv}>{good}</p>
  </div>
);

// Hidden template layers under the full-cover panel 31:1147 are omitted.
export default function Component38TipografiaUsosIncorrectos() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="31:1142" data-name="38 - Tipografía Usos Incorrectos">
      <Chrome title="Tipografía" />
      <Subtitle>Usos Incorrectos</Subtitle>
      <SideText>Estos son los errores más frecuentes al aplicar la tipografía de la marca, y por qué comprometen su lectura.</SideText>
      {[364, 742, 1120, 1498].map(left => (
        <div key={left} className="absolute bg-white rounded-[10px] size-[342px] top-[287px]" style={{ left }} />
      ))}
      <div className="absolute bg-white h-[342px] left-[364px] rounded-[10px] top-[831px] w-[720px]" />
      <div className="absolute bg-white h-[342px] left-[1120px] rounded-[10px] top-[831px] w-[720px]" />
      <CardLabel left={379} top={849} w={163}>Composiciones sin jerarquía visual o que se salgan de los lineamientos para cada tipo de texto.</CardLabel>
      <CardLabel left={1134} top={849} w={163}>Texto ilegible</CardLabel>
      <CardLabel left={379}>Mala partición de palabras</CardLabel>
      <CardLabel left={758} w={168}>Sustituir por una tipografía similar</CardLabel>
      <CardLabel left={1134}>Alterar el tracking e interletrado fuera del margen permitido</CardLabel>
      <CardLabel left={1512}>Aplicar efectos no autorizados</CardLabel>
      <WideStrike left={1134} />
      <WideStrike left={379} />
      <Strike left={379} top={303} img={imgLine4} />
      <Strike left={756} top={303} img={imgLine4} />
      <Strike left={1134} top={303} img={imgLine4} />
      <Strike left={1510} top={303} img={imgLine4} />
      {/* Figma breaks this word mid-letter on purpose (the example); lines hard-coded so browsers match. */}
      <div className="absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[440px] not-italic text-[#0c0c0c] text-[32px] top-[404px] w-[191px] whitespace-nowrap" data-node-id="31:1210" style={fv}>
        <p className="mb-0">ARQUITECT</p><p className="mb-0">URA E</p><p className="mb-0">INTERIORI</p><p>SMO</p>
      </div>
      <Big top={941}>ARQUITECTURA E INTERIORISMO</Big>
      <Big top={991}>{`VC ARQUITECTURA `}</Big>
      <Big top={1041}>Medellín Colombia</Big>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal h-[48px] leading-[normal] left-[912.5px] not-italic text-[#0c0c0c] text-[20px] text-center top-[441px] w-[197px]" data-node-id="31:1211">
        ARQUITECTURA E INTERIORISMO
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal h-[48px] leading-[normal] left-[1472.5px] not-italic text-[#0c0c0c] text-[5px] text-center top-[1002px] w-[197px]" data-node-id="31:1227" style={fv}>
        ARQUITECTURA E INTERIORISMO
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal h-[48px] leading-[normal] left-[1669.5px] not-italic text-[#0c0c0c] text-[20px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[441px] w-[197px]" data-node-id="31:1215" style={fv}>
        ARQUITECTURA E INTERIORISMO
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal h-[95px] leading-[0] left-[1290.5px] not-italic text-[#0c0c0c] text-[20px] text-center top-[441px] tracking-[-2.4px] w-[197px] whitespace-pre-wrap" data-node-id="31:1213" style={fv}>
        <p className="leading-[1.347] mb-0">ARQUITECTURA E</p>
        <p className="leading-[1.347] mb-0">​</p>
        <p className="leading-[1.347]">INTERIORISMO</p>
      </div>
      {[364, 742, 1120, 1498].map(left => <Rule key={left} left={left} top={237} w={342} />)}
      <Note left={363} top={668} gap bad="Cortar una palabra a la mitad entre líneas dificulta la lectura y se ve descuidado." good="Partir siempre por palabra completa, nunca a mitad de una." />
      <Note left={363} top={1201} bad="Dar el mismo peso a título, nombre y ubicación elimina la jerarquía y confunde la lectura." good="Respetar los tres niveles definidos —título, subtítulo, texto corrido— y su diferencia de peso." />
      <Note left={1121} top={1201} bad="Reducir el texto por debajo de un tamaño legible vuelve la información inutilizable." good="Respetar el tamaño mínimo de lectura en cada aplicación." />
      <Note left={742} top={668} bad={`Usar una tipografía "parecida" cuando la oficial no está disponible diluye el carácter de la marca.`} good="Usar siempre la tipografía oficial: Google Sans Flex." />
      <Note left={1121} top={668} bad="Forzar el espaciado entre letras más allá de lo definido rompe el ritmo del texto." good="Mantener el tracking dentro de los valores definidos para cada nivel tipográfico." />
      <Note left={1498} top={668} bad="Sombras, contornos o cualquier efecto decorativo no pertenecen al sistema tipográfico de la marca." good="Usar el texto siempre plano, sin efectos añadidos." />
    </div>
  );
}
