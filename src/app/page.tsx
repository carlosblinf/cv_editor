import "./tailwind.css";
import Viewer from "../components/Viewer";
import Builder from "@/components/Builder";

export default function Home() {
  return (
    <main className="h-screen">
      <Builder />
      {/* <Viewer /> */}
    </main>
  );
}
