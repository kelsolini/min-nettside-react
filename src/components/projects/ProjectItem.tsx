import type { IProject } from "../../interfacecs/IProject";

const ProjectItem = ({project} : {project: IProject}) => {
    return(
        <article>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name + "Foto."} />
        </article>
    );
}

export default ProjectItem;