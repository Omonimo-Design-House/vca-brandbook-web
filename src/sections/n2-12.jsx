import { Pill } from './_shared.jsx';
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/fa8a1d10-e34e-442a-bd0f-9bd50c16f756.svg";
const imgRegla = "https://www.figma.com/api/mcp/asset/31e2df29-6aa6-4fdb-aec1-ef65cf15b054.svg";
const fv = { fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' };

// One index entry: top rule + big thin title. Same classes as the exported "Item" buttons.
function Item({ id, rule, row, text, textId }) {
  return (
    <button className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id={id} data-name="Item">
      <div className="bg-[#0c0c0c] h-[1.5px] relative shrink-0 w-full" data-node-id={rule} data-name="Regla" />
      <div className="content-stretch flex items-start justify-between overflow-clip pb-[22px] pt-[18px] relative shrink-0 w-full" data-node-id={row} data-name="r">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Thin'] font-thin leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[64px] text-left whitespace-nowrap" data-node-id={textId} style={fv}>
          {text}
        </p>
      </div>
    </button>
  );
}

export default function Component03Indice() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="2:12" data-name="03 · Índice">
      <div className="absolute h-[200px] left-0 top-0 w-[1920px]" data-node-id="2:13" data-name="Chrome / Encabezado" />
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" data-node-id="8:254" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Google_Sans_Flex:Medium'] font-medium gap-px items-start leading-[normal] left-[79px] not-italic text-[15px] top-[72px] whitespace-nowrap" data-node-id="8:255" data-name="Meta">
        <p className="relative shrink-0 text-[#0c0c0c]" data-node-id="8:256" style={fv}>VC Arquitectura®</p>
        <p className="relative shrink-0 text-[rgba(12,12,12,0.45)]" data-node-id="8:257" style={fv}>Brand Guidelines</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[361px] top-[72px]" data-node-id="8:258" data-name="Meta">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[32px] whitespace-nowrap" data-node-id="8:259" style={fv}>
          Index
        </p>
      </div>
      <div className="absolute content-stretch flex gap-[36px] items-start left-[365px] overflow-clip top-[418px] w-[1475px]" data-node-id="2:23" data-name="Columnas">
        <div className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-[718px]" data-node-id="2:24" data-name="Columna 1">
          <Item id="2:25" rule="2:26" row="2:27" textId="2:28" text="Core Values" />
          <Item id="2:30" rule="2:31" row="2:32" textId="2:33" text="Logotipo" />
          <Item id="2:40" rule="2:41" row="2:42" textId="2:43" text="Marca Viva" />
          <Item id="2013:875" rule="2013:876" row="2013:877" textId="2013:878" text="Color" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="2:55" data-name="Columna 2">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2:56" data-name="Item">
            <div className="bg-[#0c0c0c] h-[1.5px] relative shrink-0 w-full" data-node-id="2:57" data-name="Regla" />
            <button className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2:50" data-name="Item">
              <div className="content-stretch flex h-[119px] items-start justify-between overflow-clip pb-[22px] pt-[18px] relative shrink-0 w-full" data-node-id="2:52" data-name="r">
                <p className="[word-break:break-word] font-['Google_Sans_Flex:Thin'] font-thin leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[64px] text-left whitespace-nowrap" data-node-id="2:53" style={fv}>
                  Tipografías
                </p>
              </div>
            </button>
            <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="2:46">
              <div className="-scale-y-100 flex-none w-full">
                <div className="h-[1.5px] relative w-full" data-name="Regla">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRegla} />
                </div>
              </div>
            </div>
            <button className="content-stretch cursor-pointer flex items-start justify-between overflow-clip pb-[22px] pt-[18px] relative shrink-0 w-full" data-node-id="2:58" data-name="r">
              <p className="[word-break:break-word] font-['Google_Sans_Flex:Thin'] font-thin leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[64px] text-left whitespace-nowrap" data-node-id="2:59" style={fv}>
                Recursos Gráficos
              </p>
            </button>
          </div>
          <Item id="2:61" rule="2:62" row="2:63" textId="2:64" text="Key visuals" />
        </div>
      </div>
      <div className="absolute bg-[#0c0c0c] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="17:1354" data-name="Regla lateral" />
      <Pill id="41:453" linkId="41:454" left={355} top={1025} href="https://drive.google.com/drive/folders/11jGpsieZniA67_PjDkSnlmQ43b06UsOh?usp=drive_link">descargar EN PDF</Pill>
    </div>
  );
}
