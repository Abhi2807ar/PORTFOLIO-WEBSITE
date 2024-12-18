import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Experience</h2>
        <div>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-stone-400">
                        {experience.year}
                    </p>
                    </div><div className="w-full max-w-xl lg:"
            ))}
    </div>
  )
}

export default Experience