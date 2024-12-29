export default function Projetos(){
    return(
        <>
            <section className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            <h3 id="Sobremim" className="mt-40 text-violet-400 col-span-2 sm:col-span-4 text-3xl pl-5"> == Habilidades</h3>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Linguagens</h4>
                    <p className="p-2">JavaScript</p>
                    <p className="p-2">C#</p>
                </div>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Ferramentas</h4>
                    <p className="p-2">VSCode</p>
                    <p className="p-2">Gimp</p>
                    <p className="p-2">Figma</p>
                </div>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Frameworks</h4>
                    <p className="p-2">React</p>
                </div>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Outros</h4>
                    <p className="p-2">HTML5</p>
                    <p className="p-2">CSS3</p>
                </div>
                <div className="shadow-lg shadow-[#956ac5a8] border-2 border-zinc-600 text-center m-5">
                    <h4 className="border-b-2 border-zinc-600 font-extrabold">Bibliotecas</h4>
                    <p className="p-2">TailWind</p>
                    <p className="p-2">Bootstrap</p>
                </div>
            </section>
            <section className="mt-40 grid grid-cols-2 gap-5 sm:grid-cols-4 mb-36">
                <h3 id="Trabalhos" className="mt-40 col-span-2 sm:col-span-4 text-violet-400 text-3xl pl-5">== Trabalhos</h3>
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