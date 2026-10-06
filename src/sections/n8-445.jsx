import { fv, Chrome } from './_shared.jsx';

const B = ({ children }) => (
  <span className="font-['Google_Sans_Flex:Bold'] font-bold leading-[normal]" style={fv}>{children}</span>
);
const R = ({ children }) => <span className="leading-[normal]">{children}</span>;

const pillars = [
  [365, 'LUZ', 259, <><B>La luz decide si el cuerpo descansa o se queda en alerta.</B><R>{' Se diseña antes que cualquier cosa.'}</R></>],
  [754, 'MOVIMIENTO', 309, <><R>{'Circulaciones anchas y ambientes que se continúan. '}</R><B>Recorrer la casa no le debería pedir esfuerzo al cuerpo.</B></>],
  [1143, 'MATERIA', 309, <R>Madera, piedra, barro y fibras naturales. La piel reconoce una textura cálida y natural, esto también es bienestar.</R>],
  [1532, 'ENTORNO', 309, <><R>{'Ventanales de piso a techo y terrazas que se sienten parte de la sala. '}</R><B>Buscamos una relación de armonía entre el espacio y su entorno.</B></>],
];

export default function Component06Pilares() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="8:445" data-name="06-Pilares">
      <Chrome title="Pilares de marca" />
      {[714, 1103, 1492].map(left => (
        <div key={left} className="absolute bg-[rgba(12,12,12,0.45)] h-[269px] top-[333px] w-[2px]" style={{ left }} data-name="Regla lateral" />
      ))}
      {pillars.map(([left, title, w, body]) => (
        <div key={title}>
          <div className="absolute content-stretch flex flex-col items-start top-[344px] w-[309px]" style={{ left }} data-name="Meta">
            <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium h-[52px] leading-[42px] not-italic relative shrink-0 text-[#0c0c0c] text-[36px] tracking-[8.28px] uppercase w-[309px] whitespace-nowrap" style={fv}>
              {title}
            </p>
          </div>
          <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light leading-[normal] not-italic text-[#0c0c0c] text-[20px] top-[415px]" style={{ ...fv, left, width: w }}>
            {body}
          </p>
        </div>
      ))}
    </div>
  );
}
