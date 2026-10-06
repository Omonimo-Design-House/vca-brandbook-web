const imgLogoVca = "https://www.figma.com/api/mcp/asset/5fb957c4-8a23-47b0-8e3a-922f004fe868.svg";
const imgCapa1 = "https://www.figma.com/api/mcp/asset/752824e8-f203-41ff-85e7-d4f4cc818230.svg";

export default function Component01Portada() {
  return (
    <div className="bg-[#b2bca2] relative size-full" data-node-id="2:2" data-name="01 · Portada">
      <div className="absolute bg-[#0c0c0c] h-[1.5px] left-[365px] top-[57px] w-[1475px]" data-node-id="8:190" data-name="Regla lateral" />
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Google_Sans_Flex:Medium'] font-medium gap-px items-start leading-[normal] left-[81px] not-italic text-[#0c0c0c] text-[15px] top-[72px] whitespace-nowrap" data-node-id="2:4" data-name="Meta">
        <p className="relative shrink-0" data-node-id="2:5" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{`By Omónimo Design House `}</p>
        <p className="relative shrink-0" data-node-id="2:6" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{`(2026)© `}</p>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-px items-start left-[365px] not-italic text-[#0c0c0c] top-[72px] whitespace-nowrap" data-node-id="8:191" data-name="Meta">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[0] relative shrink-0 text-[0px]" data-node-id="8:192" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <span className="leading-[normal] text-[32px]">VC Arquitectura</span>
          <span className="leading-[normal] text-[20.64px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            ®
          </span>
        </p>
        <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] relative shrink-0 text-[32px]" data-node-id="8:193" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{`Brand guidelines `}</p>
      </div>
      <div className="-translate-y-1/2 absolute h-[107px] left-[818px] top-[calc(50%+390.5px)] w-[285px]" data-node-id="2013:680" data-name="Logo VCA">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca} />
      </div>
      <div className="absolute bg-[#0c0c0c] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="17:1352" data-name="Regla lateral" />
      <div className="absolute flex h-[936.754px] items-center justify-center left-[559px] top-[72px] w-[899.265px]" data-node-id="2022:2532">
        <div className="flex-none rotate-30">
          <div className="h-[723.242px] relative w-[620.817px]" data-name="Capa_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCapa1} />
          </div>
        </div>
      </div>
    </div>
  );
}
