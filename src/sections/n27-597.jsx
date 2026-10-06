import { fv, Chrome, Subtitle, Rule, MeasureIcons, SpecList } from './_shared.jsx';

export default function Component35TipografiaSubtitulos() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="27:597" data-name="35-Tipografía Subtitulos">
      <Chrome title="Tipografía" />
      <Subtitle>Subtítulos</Subtitle>
      <Rule left={81} top={229} w={248} />
      <MeasureIcons y={385} ly={449} />
      <SpecList items={[
        ['Familia:', 'Google Sans Flex'], ['Peso:', 'Medium'], ['Caja:', 'Alta'],
        ['Margen de espaciado entre letras:', '+100 / +200'],
        ['Altura entre líneas:', 'Igual o hasta 4 puntos más que el puntaje de la tipografía.'],
      ]} />
      <div className="absolute content-stretch flex flex-col items-start left-[366px] overflow-clip top-[279px] w-[1470px]" data-node-id="27:628" data-name="Contenido">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[96px] not-italic relative shrink-0 text-[#0c0c0c] text-[96px] text-center tracking-[26.88px] uppercase w-[1470px]" data-node-id="27:629" style={fv}>
          GOOGLE SANS FLEX
        </p>
      </div>
    </div>
  );
}
