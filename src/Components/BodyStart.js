import { FaReact } from "react-icons/fa";

export default function Bstart(){
    return(
        <>
            <main>
                <div className="mt-36">    
                    <h2 className="font-bold text-xl ml-10">Eu sou Thiago Vinicius</h2>
                    <h1 className="text-violet-400 font-bold text-2xl mx-10">Desenvolvedor Web Front-End</h1>
                    <p className="text-zinc-400 w-10/12 m-auto text-right p-5 mt-5">Com tecnologia e harmonia, dando vida á sites que são a cara do futuro.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                    fotohomemcapuz
                    </div>
                    <div className="flex border-2 border-zinc-500 w-4/5 pl-2">
                        <FaReact className="text-violet-400 text-4xl self-center"/>
                        <p className="font-bold text-lg p-5">Sempre há como melhorar!</p>
                    </div>
                </div>
            </main>
        </>
    )
}