import projects from '../../assets/projects';
import Project from '../../components/Project';
import './style.css';

const Projects = () => {
    return (
        <div className="section">
            <div id="projects">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
