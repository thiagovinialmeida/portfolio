import { RxHamburgerMenu } from "react-icons/rx";

export default function Topo(){
    return(
        <>
        <header className="">
            <div className="flex justify-between">
                <h1>Thvini</h1>
                <RxHamburgerMenu/>
            </div>
            <nav className="gap-5 hidden">
                <a href="#">Home</a>
                <a href="#">Sobre mim</a>
                <a href="#">Trabalhos</a>
                <a href="#">Contato</a>
            </nav>
        </header>
      </>
    )
}