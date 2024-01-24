import "./index.css";

const Projects = (props) => {
  const { projectList } = props;

  console.log(projectList);
  const { projectName, projectLink, description } = projectList;

  return (
    <div className="projects-container">
      <div className="projects-card-container">
        <div className="project-data">
          <h1 className="project-name">{projectName}</h1>
          <p className="project-description">{description}</p>
          <button className="view-project" type="button">
            View Project
          </button>
        </div>

        {/* image */}
        <img src={projectLink} alt={projectName} />
      </div>
    </div>
  );
};

export default Projects;
