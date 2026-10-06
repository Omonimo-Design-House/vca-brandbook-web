import { Chrome, Subtitle, Rule, Label, Caption } from './_shared.jsx';

const imgLine1 = "https://www.figma.com/api/mcp/asset/7eaaa789-b29e-45c6-bfe5-425451774c7e.svg";
const imgLogoVca = "https://www.figma.com/api/mcp/asset/d8eeddcc-60f7-4d2b-a55a-a7b7c7be10e6.svg";
const imgLogoVca1 = "https://www.figma.com/api/mcp/asset/35849dcf-17b7-4b91-98e9-e21ae79f1dd8.svg";
const imgLogoVca2 = "https://www.figma.com/api/mcp/asset/ab68909a-ea23-411f-896b-635278332a81.svg";

// Hidden template layers and the older panel 15:516 sit under the full-cover panel 17:1099 and are omitted.
export default function Component13LogotipoOrientacion() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="15:511" data-name="13. Logotipo orientacion">
      <Chrome title="Logotipo" />
      <Subtitle>Orientación</Subtitle>
      <Label left={364} top={246}>CORRECTO</Label>
      <Label left={1402} top={246}>INCORRECTO</Label>
      <Rule left={364} top={237} w={1003} />
      <Rule left={1403} top={237} w={437} />
      <Caption left={365} top={486} title="Horizontal">Esta es nuestra orientación por defecto.</Caption>
      <Caption left={1023} top={835} w={250} title="Vertical">Gracias al ambigrama, el logo se lee igual girado 90° hacia cualquier lado. Úsalo así en lomos, bordes y piezas angostas.</Caption>
      <Caption left={1498} top={835} w={248} title="Espejado">Reflejar el logo rompe el ambigrama: las letras quedan al revés y deja de leerse VCA.</Caption>
      <div className="-translate-y-1/2 absolute h-[137px] left-[424.33px] top-[389.5px] w-[365.333px]" data-node-id="2013:748" data-name="Logo VCA">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca} />
      </div>
      <div className="-translate-y-1/2 absolute flex h-[365.333px] items-center justify-center left-[1071px] top-[571px] w-[137px]" data-node-id="2013:754">
        <div className="-rotate-90 flex-none">
          <div className="h-[137px] relative w-[365.333px]" data-name="Logo VCA">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca1} />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[365.333px] items-center justify-center left-[1545px] top-[571px] w-[137px]" data-node-id="2013:760">
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="h-[137px] relative w-[365.333px]" data-name="Logo VCA">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca2} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[500.298px] items-center justify-center left-[1531px] top-[311px] w-[175px]" data-node-id="17:1141">
        <div className="flex-none rotate-[-70.72deg]">
          <div className="h-0 relative w-[530.022px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
