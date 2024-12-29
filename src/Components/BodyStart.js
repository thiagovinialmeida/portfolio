import { FaReact } from "react-icons/fa";
import Foto from "../Assets/file2.png";

export default function Bstart(){
    return(
        <>
            <main>
                <div id="Home" className=" mt-56 sm:ml-36">    
                    <h2 className="font-bold lg:text-4xl sm:text-3xl text-xl ml-4">Eu sou Thiago Vinicius</h2>
                    <h1 className="text-violet-400 font-bold lg:text-5xl sm:text-4xl text-2xl mx-4">Desenvolvedor Web Front-End</h1>
                    <p className=" text-zinc-400 w-10/12  text-right p-5 my-36 sm:text-2xl">Com tecnologia e harmonia, dando vida á sites que são a cara do futuro.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Foto} className="w-[255px] sm:w-[384px]"/>
                    <div className="flex border-2 border-zinc-500 sm:w-3/5 w-4/5 pl-2">
                        <FaReact className="text-violet-400 text-4xl self-center"/>
                        <p className="font-bold text-lg p-5">Sempre há como melhorar!</p>
                    </div>
                </div>
            </main>
        </>
    )
}