import NavBar from "../components/shared/NavBar";
import AboutItem from "../components/about/AboutItem";
import ProjectItem from "../components/projects/ProjectItem";
import HobbiesItem from "../components/hobbies/HobbiesItem";
import SkillsItem from "../components/skills/SkillsItem";

const HomePage = () => {
    return(
        <>
        <NavBar/>
        <div className="grid grid-cols-12 gap-6">
            
            <AboutItem/>
            <ProjectItem/>
            <HobbiesItem/>
            <SkillsItem/>
        </div>

        </>
    );
}

export default HomePage;