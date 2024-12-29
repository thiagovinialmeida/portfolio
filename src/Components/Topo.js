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
        <header  className="fixed top-0 left-0 right-0 w-full">
            <nav>
                <div className="bg-neutral-900 flex flex-wrap justify-between">
                        <h1 className="text-violet-400 text-2xl sm:pl-10 p-2">THDev</h1>
                        <RxHamburgerMenu id="burger-menu" className="text-4xl m-2 sm:hidden" onClick={mostrarModo}/>
                    <div className="flex gap-10 p-2 max-sm:hidden">
                        <a href="#Home" className="hover:bg-violet-400 p-2 rounded-lg">Home</a>
                        <a href="#Sobremim" className="hover:bg-violet-400 p-2 rounded-lg">Sobre mim</a>
                        <a href="#Trabalhos" className="hover:bg-violet-400 p-2 rounded-lg">Trabalhos</a>
                        <a href="#Contato" className="mr-10 hover:bg-violet-400 p-2 rounded-lg">Contato</a>
                    </div>
                </div>
            </nav>
            <div id="mobileMenu" className={displayMode}>
                <nav className="flex flex-col grow-0 content-stretch text-center w-full h-screen sm:hidden">
                    <a href="#Home" className="bg-neutral-900 border-b-2 border-t-4 border-y-zinc-700 p-4">Home</a>
                    <a href="#Sobremim" className="bg-neutral-900 border-y-2 border-y-zinc-700 p-4">Sobre mim</a>
                    <a href="#Trabalhos" className="bg-neutral-900 border-y-2 border-y-zinc-700 p-4">Trabalhos</a>
                    <a href="#Contato" className="bg-neutral-900 border-y-2 border-b-4 border-y-zinc-700  p-4">Contato</a>
                </nav>
            </div>
        </header>
      </>
    )
}

