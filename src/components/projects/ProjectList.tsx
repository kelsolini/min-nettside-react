import Project from "../../data/Projects";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {

    const getProjectsJSX = () => {
        const projectJSX = Project.map((project, index)=>{
            return(
                <ProjectItem
                    key={index}
                    project={project}
                />
            )
        });
        return projectJSX;
    }

    return(
        <section className="col-span-6">
            {getProjectsJSX()}
        </section>
    );
}

export default ProjectList;