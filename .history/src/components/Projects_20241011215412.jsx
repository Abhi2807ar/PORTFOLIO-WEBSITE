import {PROJECTS} from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
            {PROJECTS.map((project,index))}
        </div>
    </div>
  )
}

export default Projects