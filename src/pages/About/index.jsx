import authorImage from '../../assets/rv.JPEG';
import { calculateAge } from '../../utils/age';
import './style.css';

const About = () => {
    return (
        <div className="section">
            <div id="about">
                <div>
                    <img src={authorImage} alt="author" />
                </div>
                <p>
                    Hi there! My <span className="emphasis">name</span> is{' '}
                    <span className="emphasis">Rúnar Vestmann</span> and I'm a{' '}
                    <span className="emphasis">{calculateAge('06/26/1998')}</span>{' '}
                    <span className="emphasis">year old</span> student that's <span className="emphasis">studying</span>{' '}
                    <span className="emphasis">Computer Science</span> at Reykjavík University in{' '}
                    <span className="emphasis">Iceland. </span>
                    I've been messing around with computers for most of my life, from accidentally changing the color
                    scheme and desktop icon sizes on my dad's computer at a very early age to playing Super Mario on the
                    NES which later evolved into playing known Playstation classics by the likes of Spyro, Ratchet &
                    Clank and Crash Bandicoot. Since <span className="emphasis">video games and computers</span> were a
                    big part of my <span className="emphasis">childhood</span> it has influenced me into wanting to{' '}
                    <span className="emphasis">create</span> similar <span className="emphasis">experiences. </span>
                    That's one of the reasons why I'm studying Computer Science since that field of work has so many
                    possibilities in the world of <span className="emphasis">creation.</span>
                </p>
            </div>
        </div>
    );
};

export default About;
