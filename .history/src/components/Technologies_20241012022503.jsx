import { FaFigma } from "react-icons/fa";
import {TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import {motion} from "framer-motion";
const iconVariants =(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeatType:"reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div className="pb-24">
        < motion.h2
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            initial=>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div className="p-4">
            <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div className="p-4">
            <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div className="p-4">
                <FaHtml5 className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div className="p-4">
            <FaCss3Alt className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div className="p-4">
            <FaFigma className="text-7xl text-pink-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
