import { RxHamburgerMenu } from "react-icons/rx";

export default function Topo(){
    return(
        <>
        <header className="">
            <div className="flex justify-between">
                <h1>THDev</h1>
                <RxHamburgerMenu id="burger-menu" className="text-4xl botao sm:hidden" onClick={()=>{
                    
                    console.log('Botão apertado')
                }}/>
            </div>
            <nav className="gap-5 max-sm:hidden">
                <a href="#">Home</a>
                <a href="#">Sobre mim</a>
                <a href="#">Trabalhos</a>
                <a href="#">Contato</a>
            </nav>
            <nav className=" hidden flex-col grow-0  content-stretch text-center w-full h-screen sm:hidden">
                <a href="#" className="border-b-4 border-t-8 border-y-zinc-700 p-4">Home</a>
                <a href="#" className="border-y-4 border-y-zinc-700 p-4">Sobre mim</a>
                <a href="#" className="border-y-4 border-y-zinc-700 p-4">Trabalhos</a>
                <a href="#" className="border-y-4 border-b-8 border-y-zinc-700  p-4">Contato</a>
            </nav>
        </header>
      </>
    )
}

