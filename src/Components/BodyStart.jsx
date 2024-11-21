import { FaReact } from "react-icons/fa";

export default function Bstart(){
    return(
        <>
            <main>
                <h2 className="font-bold text-xl">Eu sou Thiago Vinicius</h2>
                <h1 className="text-violet-400 font-bold text-2xl">Desenvolvedor Web Front-End</h1>
                <p className="text-zinc-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia quaerat nostrum aut quisquam in harum corrupti, nisi, at asperiores, ut provident! Ducimus saepe odio, pariatur mollitia veritatis eveniet id!</p>
                <div className="flex">
                    <div>img</div>
                    <FaReact className="text-violet-400"/> 
                    <p className="font-bold font">Sempre trabalhando em melhorar!</p>
                </div>
            </main>
        </>
    )
}