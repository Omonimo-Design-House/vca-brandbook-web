import { Chrome, Subtitle, SideNote, NoteP } from './_shared.jsx';

const imgLogoVca = "https://www.figma.com/api/mcp/asset/e1246fb6-2e4d-45d0-95ad-7957aa48d106.svg";

// Hidden template layers under the full-cover panel 14:362 are omitted.
export default function Component11LogoConTagline() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="14:353" data-name="11. Logo con tagline">
      <Chrome title="Logotipo" />
      <Subtitle>Con Descriptor</Subtitle>
      <SideNote ruleLeft={79} ruleW={249}>
        <NoteP last>Esta versión le da al receptor más contexto sobre quiénes somos. Se usa cuando la pieza no lo explica por sí sola, o cuando ese contexto necesita reforzarse.</NoteP>
      </SideNote>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[161px] left-[calc(50%+195px)] top-[calc(50%+21.5px)] w-[644px]" data-node-id="2013:698" data-name="Logo VCA">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVca} />
      </div>
    </div>
  );
}
