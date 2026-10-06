import { fv, Chrome } from './_shared.jsx';

const Light = ({ children, last }) => (
  <p className={`font-['Google_Sans_Flex:Light'] font-light leading-[normal] ${last ? '' : 'mb-0'} text-[24px] tracking-[-0.24px]`} style={fv}>{children}</p>
);
const Gap = ({ size = 24 }) => <p className="leading-[normal] mb-0" style={{ fontSize: size }}>​</p>;

export default function Component08Voz() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="12:264" data-name="08- Voz">
      <Chrome title="Nuestra voz" />
      <div className="absolute bg-[rgba(12,12,12,0.45)] h-[2px] left-[1018px] top-[300px] w-[349px]" data-name="Regla lateral" />
      <div className="absolute bg-[rgba(12,12,12,0.45)] h-[2px] left-[1403px] top-[300px] w-[437px]" data-name="Regla lateral" />
      {/* Mixed letter-spacing in Figma: 4% on the heading, -1% on the body (set per line). */}
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Bold'] font-bold leading-[0] left-[1025px] not-italic text-[#0c0c0c] text-[0px] top-[320px] w-[343px] whitespace-pre-wrap" data-node-id="12:285" style={fv}>
        <p className="leading-[normal] mb-0 text-[36px] tracking-[1.44px]">UNA VOZ QUE SE TOMA SU TIEMPO.</p>
        <Gap size={20} />
        <Light>Hablamos claro, lento y pausado.</Light>
        <Gap />
        <Light>Nombramos lo que el cuerpo percibe: la temperatura, la luz y el material.</Light>
        <Gap />
        <Light last>Nuestro lenguaje es el español. El inglés entra solo cuando el término técnico no tiene un equivalente mejor.</Light>
      </div>
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[0] left-[1404px] not-italic text-[#0c0c0c] text-[24px] top-[320px] tracking-[-0.48px] w-[436px] whitespace-pre-wrap" data-node-id="12:296" style={fv}>
        <p className="leading-[normal] mb-0">{`Cuando presentamos un proyecto empezamos por quien lo va a habitar: cómo se mueve en la mañana, dónde se sienta a leer. `}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">Palabras como lujo, exclusivo o de autor quedan por fuera. Si un material vale la pena, se dice por qué: el roble del piso se escogió porque no se enfría de noche.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Citamos un arquitecto o una obra solo cuando le ayuda al cliente a entender una decisión.</p>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin h-[650px] leading-[0] left-[512px] not-italic text-[#0c0c0c] text-[158px] text-center top-[229px] tracking-[-3.16px] w-[914px]" data-node-id="12:297" style={fv}>
        <p className="leading-[158px] mb-0">Observar.</p>
        <p className="leading-[158px] mb-0">Equilibrar.</p>
        <p className="leading-[158px] mb-0">Construir.</p>
        <p className="leading-[158px]">Habitar.</p>
      </div>
    </div>
  );
}
