import { fv, Chrome } from './_shared.jsx';

const rows = [
  ['¿QuiÉnes somos?', 319.25, 137, 'Un estudio de arquitectura enfocado en el bienestar y el equilibrio.'],
  ['¿Qué hacemos?', 642.25, 137, 'Arquitectura, interiorismo y construcción para casas, clínicas y oficinas.'],
  ['¿Cómo lo hacemos?', 950.25, 90, 'Preguntando primero cómo se va a sentir el cuerpo de quien entre.'],
  ['¿Por qué?', 1248.25, 139, 'Porque cada persona tiene una manera única de habitar el mundo. Encontrarla y construirla es nuestro trabajo.'],
];

export default function Component04Adn() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="8:294" data-name="04 · ADN">
      <Chrome title="ADN" />
      {rows.map(([label, top, h, text]) => (
        <div key={label}>
          <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin leading-[64px] left-[360px] not-italic text-[#0c0c0c] text-[64px] w-[1330px]" style={{ ...fv, top, height: h }}>
            {text}
          </p>
          <div className="absolute content-stretch flex flex-col items-start left-[81px] overflow-clip" style={{ top }} data-name="Meta">
            <p className="[word-break:break-word] font-['Google_Sans_Flex:SemiBold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] uppercase whitespace-nowrap" style={fv}>
              {label}
            </p>
          </div>
        </div>
      ))}
      {[294, 618, 926, 1223].map(top => (
        <div key={top} className="absolute bg-[rgba(12,12,12,0.45)] h-[2px] left-[81px] w-[1759px]" style={{ top }} data-name="Regla lateral" />
      ))}
    </div>
  );
}
