import { FaFigma } from "react-icons/fa";
import {TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4">
            <TbBrandNextjs className="text-7xl" />
            </div>
            <div className="p-4">
            <SiMongodb className="text-7xl text-cyan-500"/>
            </div>
            <div className="p-4">
                <FaHtml5 class name {
                    constructor(parameters) {
                        
                    }
                }
            </div>
        </div>
    </div>
  )
}

export default Technologies
