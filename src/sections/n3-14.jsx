import { Chrome, Subtitle } from './_shared.jsx';

const imgLogoVca = "https://www.figma.com/api/mcp/asset/f767a507-e2a0-4634-945d-3afbbf648abc.svg";

// Hidden template layers (Visual identity / [Título de la diapositiva] / Cuerpo…) sit under the
// full-cover panel 13:310 and are omitted.
export default function Component10LogoStandard() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="3:14" data-name="10 · Logo · Standard">
      <Chrome title="Logotipo" />
      <Subtitle>Estandard</Subtitle>
      <div className="-translate-y-1/2 absolute h-[162px] left-[811px] top-[calc(50%+55px)] w-[432px]" data-node-id="2013:692" data-name="Logo VCA">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca} />
      </div>
    </div>
  );
}
