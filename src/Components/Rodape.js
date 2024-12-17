import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Qrcode from "../Assets/Qrcode.jpg"

export default function Rodape(){

    return(
        <>
            <footer className="bg-neutral-900 flex flex-wrap justify-between">
                <h3 className="text-center font-extrabold text-4xl w-full p-14 text-violet-400">/ Contato</h3>
                    <div className="w-[280px]">
                        <p className="text-center text-violet-400 text-2xl">Ajude um dev iniciante!</p>
                        <img src={Qrcode}/>
                    </div>
                <nav className="">
                    <div className="mb-5">
                        <a href="#" className="text-xl sm:text-5xl p-2 hover:text-orange-400"><FaGithubSquare className="inline"/>GitHub</a>
                    </div>
                    <div className="mb-5">
                        <a href="#" className="text-xl p-2   hover:text-sky-400 sm:text-5xl"><FaSquareXTwitter className="inline"/>Twitter</a>
                    </div>
                    <div className="mb-5">
                        <a href="#" className="text-xl sm:text-5xl p-2 hover:text-green-500"><FaWhatsappSquare className="inline"/>Whatsapp</a>
                    </div>
                    <div className="mb-5">
                        <a href="#" className="text-xl sm:text-5xl p-2 hover:text-red-300"><FaInstagramSquare className="inline"/>
                        Instagram</a>
                    </div>
                    <div className="mb-5">
                        <a href="#" className="text-xl sm:text-5xl p-2 hover:text-blue-600"><FaLinkedin className="inline"/>
                        LinkedIn</a>
                    </div>
                </nav>
            </footer>
        </>
    )
}