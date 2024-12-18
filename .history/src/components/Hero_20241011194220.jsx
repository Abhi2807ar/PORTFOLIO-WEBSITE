import { HERO_CONTENT } from "../constants"

const Hero = () => {
  return (
    <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Abhijeet Aryan</h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight
             text-transparent">Full Stack Developer</span>
             <p className="my-2 max-w-lg py-6 text-xl leading-relaxed
             tracking-together">
                {HERO_CONTENT}
        
             </p>
             <a href="/resume.pdf"
             target="blank"
             
        </div>
    </div>
  )
}

export default Hero