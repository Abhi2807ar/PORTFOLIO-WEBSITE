import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Experience</h2>
        <div>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className="w-full lg:w-1/4"
            ))}
    </div>
  )
}

export default Experience