import { Chrome, Subtitle, Rule, fv } from './_shared.jsx';

const imgFoto = "https://www.figma.com/api/mcp/asset/56ce282c-9af8-492d-af81-caf0456eeb9c.png";
const imgFoto1 = "https://www.figma.com/api/mcp/asset/78676eb8-23c4-425f-9525-27a809505e4b.png";

export default function RecursosFormas() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="28:738" data-name="06-Personalidad">
      <Chrome title={`Recursos Gráficos `} />
      <Subtitle>Formas Orgánicas</Subtitle>
      <Rule left={81} top={229} w={248} />
      <div className="absolute border-[#0c0c0c] border-[1.5px] border-solid h-[449px] left-[364px] rounded-[24px] top-[213px] w-[719px]" data-node-id="29:773" data-name="FOTO">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgFoto} />
      </div>
      <div className="absolute border-[#0c0c0c] border-[1.5px] border-solid h-[449px] left-[1121px] rounded-[24px] top-[213px] w-[719px]" data-node-id="29:775" data-name="FOTO">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[183.54%] left-[-50.02%] max-w-none top-[-59.71%] w-[300%]" src={imgFoto1} />
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:ExtraLight'] font-extralight leading-[0] left-[88px] not-italic text-[#0c0c0c] text-[20px] top-[257px] w-[231px] whitespace-pre-wrap" style={fv}>
        <p className="leading-[normal] mb-0">Círculos de distinto tamaño que se tocan y se superponen hasta formar una sola mancha. Cada círculo es un espacio y cada uno es distinto, como lo es la manera de habitar de cada persona.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Va siempre en Grafito, sola y con aire alrededor, en portadas, afiches e historias. Una forma por pieza.</p>
      </div>
    </div>
  );
}
