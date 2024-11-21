//import Image from "next/image";
import localFont from "next/font/local";
import Topo from "@/Components/Topo";
import Bstart from "@/Components/BodyStart";
import Projetos from "@/Components/Projetos";
import Rodape from "@/Components/Rodape";

export default function Home() {
  return (
    <>
    <Topo/>
    <Bstart/>
    <Projetos/>
    <Rodape/>
    </>
  );
}