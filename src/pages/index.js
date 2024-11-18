//import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <main>
        <h1 class='text-violet-700 font-bold text-4xl'>Teste de Inicio</h1>
        <p>Hello World!</p>
      </main>
    </div>
  );
}