import { Chrome } from './_shared.jsx';

const imgSala = "https://www.figma.com/api/mcp/asset/560260ef-29b0-4be9-90f8-71ee9b380e3a.png";
const imgKeyVisual = "https://www.figma.com/api/mcp/asset/62ac6db2-dcb8-4765-a838-ebf1f5abc913.png";
const imgKeyVisual1 = "https://www.figma.com/api/mcp/asset/a7756618-b9e9-4208-b3d6-7cca56951212.png";
const imgKeyVisual2 = "https://www.figma.com/api/mcp/asset/c75590e5-f511-4d98-8236-f1f7d679a878.png";
const imgKeyVisual3 = "https://www.figma.com/api/mcp/asset/d5481326-3938-4ebe-813b-0df0f5d752f4.png";
const imgSinTitulo1Copia2 = "https://www.figma.com/api/mcp/asset/bd01dc3d-d2ef-4e58-819c-d5579bd518fb.png";
const imgKeyVisual4 = "https://www.figma.com/api/mcp/asset/f968c0de-d7d8-45f5-9160-232fce0038c3.png";
const imgKeyVisual5 = "https://www.figma.com/api/mcp/asset/a37ea6a8-cbcb-4dbb-9cdb-c8e2de46e11e.png";
const imgKeyVisual6 = "https://www.figma.com/api/mcp/asset/38c8d12e-3773-4d3f-8adf-73f964ca91d4.png";
const imgCapa1 = "https://www.figma.com/api/mcp/asset/8b84e98b-5c95-43bd-951a-4a599325e787.svg";

const Fila = ({ children }) => (
  <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Fila">{children}</div>
);
const Card = ({ h, src }) => (
  <div className="border-[#0c0c0c] border-[1.5px] border-solid flex-[1_0_0] min-w-px relative rounded-[24px]" style={{ height: h }} data-name="KEY VISUAL">
    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={src} />
  </div>
);

// The Figma frame is 2349px wide but all content sits inside the 1920px page; the rest is clipped.
export default function KeyVisuals() {
  return (
    <div className="bg-[#e9e5da] relative size-full" data-node-id="29:789" data-name="06-Personalidad">
      <Chrome title="Key Visuals" />
      <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[79px] top-[228px] w-[1761px]" data-node-id="29:850">
        <Fila>
          <div className="bg-[#0c0c0c] border-[#0c0c0c] border-[1.5px] border-solid content-stretch flex flex-[1_0_0] h-[900px] items-center justify-center min-w-px overflow-clip relative rounded-[24px]" data-name="KEY VISUAL">
            <div className="bg-[#f5f5f7] h-[1320.75px] overflow-clip relative shrink-0 w-[1761px]" data-name="Sala · logo">
              <div className="-translate-x-1/2 absolute h-[1324.189px] left-1/2 top-[-1.72px] w-[2321.631px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSala} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(21,21,21,0.21)] h-[1547.754px] left-[calc(50%-0.86px)] top-1/2 w-[2048.194px]" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[156.495px] left-1/2 top-[calc(50%+0.86px)] w-[625.98px]" data-name="Capa_1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCapa1} />
              </div>
            </div>
          </div>
        </Fila>
        <Fila><Card h={760} src={imgKeyVisual} /><Card h={760} src={imgKeyVisual1} /></Fila>
        <Fila><Card h={620} src={imgKeyVisual2} /><Card h={620} src={imgKeyVisual3} /></Fila>
        <Fila>
          <div className="bg-black border-[#0c0c0c] border-[1.5px] border-solid content-stretch flex flex-[1_0_0] h-[900px] items-center justify-center min-w-px overflow-clip relative rounded-[24px]" data-name="KEY VISUAL">
            <div className="h-[648px] relative shrink-0 w-[1339px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSinTitulo1Copia2} />
            </div>
          </div>
        </Fila>
        <Fila><Card h={520} src={imgKeyVisual4} /><Card h={520} src={imgKeyVisual5} /><Card h={520} src={imgKeyVisual6} /></Fila>
      </div>
    </div>
  );
}
