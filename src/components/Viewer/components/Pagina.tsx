"use client";

const pageWidth = 595; // 8.5 pulgadas en px
// const pageWidth = 965; // 8.5 pulgadas en px
const pageHeight = 842;
// const pageHeight = 1421; //1365
function Pagina({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="area-imprimible"
      style={{
        width: `${pageWidth}px`,
        height: `${pageHeight}px`,
        margin: "1in", // margen de 1 pulgada
        pageBreakAfter: "always",
        //overflow: 'hidden',
        top: "842px",
        left: 0,
      }}
    >
      {children}
    </div>
  );
}

export default Pagina;
