import './style.css';

const Project = ({ title, image, href }) => {
    return (
        <div className="project">
            <a href={href} target="_blank" rel="noreferrer">
                <img src={image.default} alt={title} />
                <p>{title}</p>
            </a>
        </div>
    );
};

export default Project;
