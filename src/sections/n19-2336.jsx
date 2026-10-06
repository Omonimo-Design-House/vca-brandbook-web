import { Chrome, Subtitle, SideText, LivingMark } from './_shared.jsx';

const imgs = [
  "https://www.figma.com/api/mcp/asset/e0d08107-2b07-4ff7-a76d-fb1ab57c7f5f.svg",
  "https://www.figma.com/api/mcp/asset/6de9d5d4-d0a3-417d-9a42-9354116701bd.svg",
  "https://www.figma.com/api/mcp/asset/132881b3-2487-48c2-a91f-a668bd68f70b.svg",
  "https://www.figma.com/api/mcp/asset/44a290bc-f2c2-4e5f-85bf-0101c5c2c67c.svg",
  "https://www.figma.com/api/mcp/asset/95e2637b-13fb-4f7a-a159-ecbf2ba1cee5.svg",
];

// Hidden template layers under the panel 19:2345 are omitted.
export default function Component26MarcaVivaUbicacion() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="19:2336" data-name="26 - Marca viva Ubicación">
      <Chrome title="Marca viva" />
      <Subtitle>Ubicación</Subtitle>
      <SideText>Para la vitrina y la señalética del estudio. El centro dice dónde encontrarlo.</SideText>
      <LivingMark id="2014:648" cls="left-[757.55px] top-[calc(50%+43.67px)]" w={510.439} text="Complex local 204" imgs={imgs} />
    </div>
  );
}
