import { Chrome, Subtitle, SideText, LivingMark } from './_shared.jsx';

const imgs = [
  "https://www.figma.com/api/mcp/asset/338eb19b-9b31-4e0e-94cf-70da7329bc50.svg",
  "https://www.figma.com/api/mcp/asset/8229eb77-5de1-450a-8d74-d0547756e45e.svg",
  "https://www.figma.com/api/mcp/asset/547afab6-ec91-4825-bb18-e1782864453d.svg",
  "https://www.figma.com/api/mcp/asset/25d83e5b-61e1-4e50-83c4-38f055ce115e.svg",
  "https://www.figma.com/api/mcp/asset/f02f5fd4-1e75-46d8-9bd1-85273ed01d55.svg",
];

// Hidden template layers under the panel 18:2266 are omitted. The mark was centred on that
// 953px panel (476.5 − 141.5 = 335).
export default function Component25MarcaVivaWeb() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="18:2257" data-name="25 - Marca viva Web">
      <Chrome title="Marca viva" />
      <Subtitle>Web</Subtitle>
      <SideText w={240}>Para papelería y firmas de correo, donde lo siguiente que hace quien la recibe es buscar la web.</SideText>
      <LivingMark id="2014:641" cls="left-[745.56px] top-[335px]" w={533.888} text="vcarquitectura.com" imgs={imgs} />
    </div>
  );
}
