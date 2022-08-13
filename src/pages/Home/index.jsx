import {
  FaLinkedinIn,
  FaGithub,
  FaItchIo,
  FaTwitter,
  FaYoutube,
  // FaPatreon,
} from "react-icons/fa";
// import { BsMedium } from "react-icons/bs";

import "./style.css";

const Home = () => {
  return (
    <div className="section">
      <div id="home">
        <h1>
          Rúnar <span className="emphasis">Vestmann</span>
        </h1>
        <p>Software developer, Teacher & Creator</p>
        <div id="home-icons">
          <a
            href="https://is.linkedin.com/in/r%C3%BAnar-vestmann-a7229a19b"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
          <a
            href="https://github.com/runarvestmann"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://runarvestmann.itch.io"
            target="_blank"
            rel="noreferrer"
          >
            <FaItchIo className="icon" />
          </a>
          <a
            href="https://twitter.com/RunarVestmann"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCzozM3fmOkAQND1OK70zRqA"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="icon" />
          </a>
          {/* <a
            href="https://medium.com/@runarvestmann"
            target="_blank"
            rel="noreferrer"
          >
            <BsMedium className="icon" />
          </a> */}
          {/* <a
            href="https://www.patreon.com/runarvestmann"
            target="_blank"
            rel="noreferrer"
          >
            <FaPatreon className="icon" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
