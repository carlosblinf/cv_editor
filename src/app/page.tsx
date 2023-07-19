import './tailwind.css'
import Builder from "@/components/Builder";
import Viewer from "@/components/Viewer";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        width: "100vh",
        height: "100vh",
      }}
    >
      {/* <Builder /> */}
      <Viewer />
    </main>
  );
}
