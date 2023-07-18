import Builder from "@/components/Builder";
import Viewer from "@/components/Viewer";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
      <Builder />
      <Viewer />
    </main>
  );
}
