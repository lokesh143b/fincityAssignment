import "./index.css";
import ConfigurationContext from "../../Context/ConfigurationContext";

const Projects = () => (
  <ConfigurationContext.Consumer>
    {(value) => {
      const { projectList } = value;
      console.log(projectList);
      return projectList.map((each) => (
        <div className="projects-container">
          <h1 className="projects-heading">Projects</h1>
          <div className="projects-card-container">
            <div className="project-data">
              <h1 className="project-name">{each.projectName}</h1>
              <p className="project-description">{each.description}</p>
              <button className="view-project" type="button">
                View Project
              </button>
            </div>

            {/* image */}
            <img src={each.projectLink} alt={each.projectName} />
          </div>
        </div>
      ));
    }}
  </ConfigurationContext.Consumer>
);

export default Projects;
