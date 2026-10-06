import { fv, Chrome, Subtitle, Rule, MeasureIcons, SpecList } from './_shared.jsx';

const sample = 'Creemos que habitar no es ocupar un espacio. Es sentirlo. Es que la luz llegue donde el cuerpo busca calma. Que los materiales cedan al tacto. Que la circulación fluya sin que nadie lo note. Que el exterior entre, no invada. Eso no se improvisa.';

export default function Component36TipografiaTextoCorrido() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="27:573" data-name="36 - Tipografía Texto Corrido">
      <Chrome title="Tipografía" />
      <Subtitle>Texto Corrido</Subtitle>
      <Rule left={81} top={229} w={248} />
      <MeasureIcons y={385} ly={449} />
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal leading-[28px] left-[1119px] not-italic text-[#0c0c0c] text-[24px] top-[243px] w-[436px]" data-node-id="27:650" style={fv}>{sample}</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Regular'] font-normal leading-[28px] left-[649px] not-italic text-[#0c0c0c] text-[24px] top-[251px] w-[434px]" data-node-id="27:649" style={fv}>{sample}</p>
      <SpecList items={[
        ['Familia:', 'Google Sans Flex'], ['Peso:', 'Regular'], ['Caja:', 'Tipo Oración'],
        ['Margen de espaciado entre letras:', '-25 / +25'],
        ['Altura entre líneas:', 'Igual o hasta 4 puntos más que el puntaje de la tipografía.'],
      ]} />
    </div>
  );
}
