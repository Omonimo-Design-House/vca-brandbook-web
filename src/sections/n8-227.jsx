const imgReglaLateral = "https://www.figma.com/api/mcp/asset/722c246e-7787-4936-9241-ec11afc252d7.svg";

export default function Component02Introduccion() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="8:227" data-name="02 · Introducción">
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Google_Sans_Flex:Medium'] font-medium gap-px items-start leading-[normal] left-[79px] not-italic overflow-clip text-[15px] top-[72px] whitespace-nowrap" data-node-id="8:230" data-name="Meta">
        <p className="relative shrink-0 text-[#0c0c0c]" data-node-id="8:231" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          VC Arquitectura®
        </p>
        <p className="relative shrink-0 text-[rgba(12,12,12,0.45)]" data-node-id="8:232" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          Brand Guidelines
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[362px] overflow-clip top-[72px]" data-node-id="8:233" data-name="Meta">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[32px] whitespace-nowrap" data-node-id="8:234" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          Introducción
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Thin'] font-thin h-[726px] leading-[136px] left-[361px] not-italic text-[#0c0c0c] text-[130px] top-[361px] tracking-[-5.2px] w-[1464px]" data-node-id="8:249" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{`Este manual documenta los elementos que conforman la identidad visual de VC Arquitectura® y el criterio con el que deben aplicarse. `}</p>
      <div className="[word-break:break-word] absolute font-['Google_Sans_Flex:Light'] font-light h-[92px] leading-[0] left-[366px] not-italic text-[32px] text-[rgba(12,12,12,0.45)] top-[1147px] w-[912px] whitespace-pre-wrap" data-node-id="8:251" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[19px] mb-0">{`Omónimo Design House `}</p>
        <p className="leading-[19px] mb-0">​</p>
        <p className="leading-[19px]">{`Medellín / Colombia -(2026)© `}</p>
      </div>
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" data-node-id="17:1357" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute bg-[#0c0c0c] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="17:1358" data-name="Regla lateral" />
    </div>
  );
}
