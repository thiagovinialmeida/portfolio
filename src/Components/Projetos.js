export default function Projetos(){
    return(
        <>
            <section className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            <h3 className="mt-40 text-violet-400 col-span-2 sm:col-span-4 text-3xl pl-5"> == Habilidades</h3>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Linguagens</h4>
                    <p>JavaScript</p>
                    <p>C#</p>
                </div>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Ferramentas</h4>
                    <p>VSCode</p>
                    <p>Gimp</p>
                    <p>Figma</p>
                </div>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Frameworks</h4>
                    <p>React</p>
                </div>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Outros</h4>
                    <p>HTML5</p>
                    <p>CSS3</p>
                </div>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Bibliotecas</h4>
                    <p>TailWind</p>
                    <p>Bootstrap</p>
                </div>
            </section>
            <section className="mt-40 grid grid-cols-2 gap-5 sm:grid-cols-4 mb-36">
                <h3 className="mt-40 col-span-2 sm:col-span-4 text-violet-400 text-3xl pl-5">== Trabalhos</h3>
                <Trabalhos/>
                <Trabalhos/>
                <Trabalhos/>
                <Trabalhos/>
                <Trabalhos/>
                <Trabalhos/>
            </section>
        </>
    )
}

function Trabalhos(){
    return (
        <>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">XXXXX</h4>
                    <p className="text-purple-500">Em breve</p> 
                </div>
        </>
    )
}