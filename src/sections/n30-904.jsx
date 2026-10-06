import { fv, TopRules } from './_shared.jsx';

const imgLogoVca = "https://www.figma.com/api/mcp/asset/c0aac4b0-ae6c-4205-9606-ddf1e02a6274.svg";

export default function Cierre() {
  return (
    <div className="bg-[#e6dbb9] relative size-full" data-node-id="30:904" data-name="07 · Divisor de sección">
      <TopRules />
      <div className="-translate-y-1/2 absolute h-[616px] left-[81px] top-[calc(50%+95px)] w-[1642.667px]" data-node-id="2013:686" data-name="Logo VCA">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca} />
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-px items-start left-[365px] not-italic overflow-clip text-[#0c0c0c] top-[72px] whitespace-nowrap" data-name="Meta">
        <p className="font-['Google_Sans_Flex:Medium'] font-medium leading-[0] relative shrink-0 text-[0px]" style={fv}>
          <span className="leading-[normal] text-[32px]">VC Arquitectura</span>
          <span className="leading-[normal] text-[20.64px]" style={fv}>®</span>
        </p>
        <p className="font-['Google_Sans_Flex:Light'] font-light leading-[normal] relative shrink-0 text-[32px]" style={fv}>{`Brand guidelines `}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[80px] not-italic text-[#0c0c0c] text-[15px] top-[74px] whitespace-nowrap" style={fv}>{`By Omónimo Design House `}</p>
      <p className="[word-break:break-word] absolute font-['Google_Sans_Flex:Medium'] font-medium leading-[normal] left-[80px] not-italic text-[#0c0c0c] text-[15px] top-[93px] whitespace-nowrap" style={fv}>{`(2026)© `}</p>
    </div>
  );
}
