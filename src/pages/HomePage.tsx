import NavBar from "../components/shared/NavBar";
import AboutItem from "../components/about/AboutItem";
import ProjectList from "../components/projects/ProjectList";
import HobbiesItem from "../components/hobbies/HobbiesItem";
import SkillsItem from "../components/skills/SkillsItem";

const HomePage = () => {
    return(
        <>
        <NavBar/>
        <div className="grid grid-cols-12 gap-6">
            
            <AboutItem/>
            <ProjectList/>
            <HobbiesItem/>
            <SkillsItem/>
        </div>

        </>
    );
}

export default HomePage;