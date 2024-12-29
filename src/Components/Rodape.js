import { FaGithubSquare, FaWhatsappSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Qrcode from "../Assets/Qrcode.jpg"

export default function Rodape(){

    return(
        <>
            <footer id="Contato" className="bg-neutral-900 flex flex-wrap">
                <h3 className="text-center font-extrabold text-4xl w-full p-14 text-violet-400">/ Contato</h3>
                <nav className="w-full mb-16">
                        <div className="w-full py-3 border-b-4 border-y-zinc-700">
                            <a href="#" className="text-xl sm:text-4xl p-2 hover:text-orange-400 pl-7"><FaGithubSquare className="inline"/> GitHub</a>
                        </div>
                        <div className="w-full py-3 border-b-4 border-y-zinc-700">
                            <a href="#" className="text-xl p-2 hover:text-sky-400 sm:text-4xl pl-7"><FaSquareXTwitter className="inline"/> Twitter</a>
                        </div>
                        <div className="w-full py-3 border-b-4 border-y-zinc-700">
                            <a href="#" className="text-xl sm:text-4xl p-2 hover:text-green-500 pl-7"><FaWhatsappSquare className="inline"/> Whatsapp</a>
                        </div>
                        <div className="w-full py-3 border-b-4 border-y-zinc-700">
                            <a href="#" className="text-xl sm:text-4xl p-2 hover:text-red-300 pl-7"><FaInstagramSquare className="inline"/> Instagram</a>
                        </div>
                        <div className="w-full py-3">
                            <a href="#" className="text-xl sm:text-4xl p-2 hover:text-blue-600 pl-7"><FaLinkedin className="inline"/> LinkedIn</a>
                        </div>
                </nav>
                <div className="w-full">
                        <h4 className="text-center text-violet-400 text-3xl">$ Área Pix</h4>
                        <img src={Qrcode} className="w-[255px] sm:w-[384px] m-auto pt-5"/>
                </div>
            </footer>
        </>
    )
}