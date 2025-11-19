import NavBar from "../components/shared/NavBar";
import AboutItem from "../components/about/AboutItem";
import ProjectItem from "../components/projects/ProjectItem";
import HobbiesItem from "../components/hobbies/HobbiesItem";
import SkillsItem from "../components/skills/SkillsItem";

const HomePage = () => {
    return(
        <>
            <NavBar/>
            <AboutItem/>
            <ProjectItem/>
            <HobbiesItem/>
            <SkillsItem/>
        </>
    );
}

export default HomePage;