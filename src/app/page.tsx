import "./tailwind.css";
import Builder from "@/components/Builder";
import Providers from "@/components/Providers";
import Viewer from "@/components/Viewer";

export default function Home() {
  return (
    <main className="grid w-full h-screen grid-cols-4">
      <Providers>
        <Builder />
        <Viewer />
      </Providers>
    </main>
  );
}
