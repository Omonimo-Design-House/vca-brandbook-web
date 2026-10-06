import { fv, Chrome } from './_shared.jsx';

const traits = [
  // [short rule top, thick rule top, word top, text top, word, text]
  [254, 254, 318, 274, 'Sensibles', 'Vemos el mundo con otros ojos; somos capaces de apreciar cosas que los demás no ven en primera instancia.'],
  [566, 566, 635, 605, 'Serenos', 'Trabajamos sin afán. Una decisión de obra se toma cuando hay información suficiente, aunque eso mueva el cronograma.'],
  [875, 877, 941, 910, 'Precisos', 'Cada línea del plano tiene una razón y la sabemos explicar. Lo que no cumple una función sale del proyecto.'],
  [1182, 1182, 1251, 1231, 'Atemporales', 'Diseñamos para que el espacio siga funcionando en veinte años, cuando la tendencia de hoy ya se haya ido.'],
];

export default function Component07Personalidad() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="10:208" data-name="07-Personalidad">
      <Chrome title="Personalidad" />
      {traits.map(([r1, r2, wt, tt, word, text]) => (
        <div key={word}>
          <div className="absolute bg-[rgba(12,12,12,0.45)] h-[2px] left-[81px] w-[247px]" style={{ top: r1 }} data-name="Regla lateral" />
          <div className="absolute bg-[rgba(12,12,12,0.45)] h-[10px] left-[364px] w-[1476px]" style={{ top: r2 }} data-name="Regla lateral" />
          <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin h-[119px] leading-[64px] left-[372px] not-italic text-[#0c0c0c] text-[158px] tracking-[-3.16px] w-[1330px]" style={{ ...fv, top: wt }}>
            {word}
          </p>
          <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] left-[88px] not-italic text-[#0c0c0c] text-[20px] w-[231px]" style={{ ...fv, top: tt }}>
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
