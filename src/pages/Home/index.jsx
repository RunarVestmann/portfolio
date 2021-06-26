import { FaLinkedinIn, FaGithub, FaItchIo } from 'react-icons/fa';
import './style.css';

const Home = () => {
    return (
        <div className="section">
            <div id="home">
                <h1>
                    Rúnar <span className="emphasis">Vestmann</span>
                </h1>
                <p>Software developer, CS student & Creator</p>
                <div id="home-icons">
                    <a href="https://is.linkedin.com/in/r%C3%BAnar-vestmann-a7229a19b" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="icon" />
                    </a>
                    <a href="https://github.com/runarvestmann" target="_blank" rel="noreferrer">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://runarvestmann.itch.io" target="_blank" rel="noreferrer">
                        <FaItchIo className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
