import "./index.css";
import { v4 } from "uuid";

const projectList = [
  {
    id: v4(),
    projectName: "Yoga",
    projectLink:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1704389303/pexels-elly-fairytale-3823207_1_hz3nx5.png",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
  },
  {
    id: v4(),
    projectName: "Books",
    projectLink:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1704389337/Rectangle_7_t0ch3x.png",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
  },
  {
    id: v4(),
    projectName: "Technology",
    projectLink:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1704389375/Rectangle_7_1_a7gptq.png",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
  },
];
console.log(projectList);

const TotalProjects = () => (
  <div>
    <h1 className="projects-heading">Projects</h1>
    {projectList.map((each) => (
      <div className="projects-container">
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
    ))}
  </div>
);

export default TotalProjects;
