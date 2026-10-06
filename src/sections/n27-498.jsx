import { fv, Chrome, Subtitle, Rule, MeasureIcons, SpecList } from './_shared.jsx';

// Figma wraps this specimen per character; browsers wrap per word, so the lines are hard-coded
// exactly as they break in Figma.
const lines = ['AaBbCcDd', 'EeFfGgHhIiJj', 'KkLlMmNnÑ', 'ñOoPpQqRr', 'SsTtUuVvwXx', 'YyZz1345', '67890!&@$', '%()*®'];

// Hidden template layers under the full-cover panel 27:503 are omitted.
export default function Component34TipografiaTitulos() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="27:498" data-name="34 - Tipografía Títulos">
      <Chrome title="Tipografía" />
      <Subtitle>Títulos</Subtitle>
      <Rule left={81} top={229} w={248} />
      <MeasureIcons y={384} ly={450} />
      <div className="absolute content-stretch flex flex-col h-[2493px] items-start left-[366px] overflow-clip top-[209px] w-[1470px]" data-node-id="27:621" data-name="Contenido">
        <div className="[word-break:break-word] font-['Google_Sans_Flex:Thin'] font-thin leading-[0] not-italic relative shrink-0 text-[#0c0c0c] text-[265px] text-center w-[1470px]" data-node-id="27:622" style={fv}>
          {lines.map((l, i) => (
            <p key={l} className={`leading-[270px] whitespace-nowrap${i < lines.length - 1 ? ' mb-0' : ''}`}>{l}</p>
          ))}
        </div>
      </div>
      <SpecList items={[
        ['Familia:', 'Google Sans Flex'], ['Peso:', 'Thin'], ['Caja:', 'Alta'],
        ['Margen de espaciado entre letras:', '-25 / +25'],
        ['Altura entre líneas:', 'Igual o hasta 4 puntos más que el puntaje de la tipografía.'],
      ]} />
    </div>
  );
}
