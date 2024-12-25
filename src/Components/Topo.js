import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Topo(){
    let displayMode = "hidden";
    const [active, setActive] = useState(false);

    const mostrarModo = ()=>{
        setActive(!active)
    }

    if(active == false){
        displayMode = "hidden"
        //console.log(active)
    } else if(active == true){
        displayMode = " "
        //console.log(active)
    }
   
    return(
        <>
        <header>
            <nav>
                <div className="flex justify-between">
                    <h1>THDev</h1>
                    <RxHamburgerMenu id="burger-menu" className="text-4xl botao sm:hidden" onClick={mostrarModo}/>
                </div>
                <div className="gap-5 max-sm:hidden">
                    <a href="#Home">Home</a>
                    <a href="#Sobremim">Sobre mim</a>
                    <a href="#Trabalhos">Trabalhos</a>
                    <a href="#Contato">Contato</a>
                </div>
            </nav>
            <div id="mobileMenu" className={displayMode}>
                <nav className="flex flex-col grow-0 content-stretch text-center w-full h-screen sm:hidden">
                    <a href="#Home" className="border-b-4 border-t-8 border-y-zinc-700 p-4">Home</a>
                    <a href="#Sobremim" className="border-y-4 border-y-zinc-700 p-4">Sobre mim</a>
                    <a href="#Trabalhos" className="border-y-4 border-y-zinc-700 p-4">Trabalhos</a>
                    <a href="#Contato" className="border-y-4 border-b-8 border-y-zinc-700  p-4">Contato</a>
                </nav>
            </div>
        </header>
      </>
    )
}

