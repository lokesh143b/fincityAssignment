import { Component } from "react";
import { v4 } from "uuid";

import "./index.css";
import ConfigurationContext from "../../Context/ConfigurationContext";

const projects = [
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

class AddProjects extends Component {
  state = {
    projectName: "",
    projectLink: "",
    description: "",
    projectList: [...projects],
  };

  onSubmitProject = (event) => {
    event.preventDefault();
    const { projectName, projectLink, description } = this.state;

    const newProject = {
      id: v4(),
      projectName,
      projectLink,
      description,
    };

    this.setState((prevState) => ({
      projectList: [...prevState.projectList, newProject],
    }));
  };

  onChangeProjectName = (event) => {
    this.setState({ projectName: event.target.value });
  };

  onChangeProjectLink = (event) => {
    this.setState({ projectLink: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  renderDescription = () => {
    const { description } = this.state;

    return (
      <div className="input-container">
        <label className="label" htmlFor="projectDescription">
          project link
        </label>
        <textarea
          onChange={this.onChangeDescription}
          className="description"
          id="projectDescription"
          value={description}
        />
      </div>
    );
  };

  renderProjectLink = () => {
    const { projectLink } = this.state;

    return (
      <div className="input-container">
        <label className="label" htmlFor="projectLink">
          project link
        </label>
        <input
          onChange={this.onChangeProjectLink}
          className="input"
          id="projectLink"
          value={projectLink}
        />
      </div>
    );
  };

  renderProjectName = () => {
    const { projectName } = this.state;

    return (
      <div className="input-container">
        <label className="label" htmlFor="projectName">
          project name
        </label>
        <input
          onChange={this.onChangeProjectName}
          className="input"
          id="projectName"
          value={projectName}
        />
      </div>
    );
  };

  render() {
    const { projectList } = this.state;
    return (
      <ConfigurationContext.Provider
        value={{
          projectList,
          onSubmitProject: this.onSubmitProject,
        }}
      >
        <div className="add-projects-container">
          <h1 className="add-projects-heading">Add projects</h1>

          <form className="form-container" onSubmit={this.onSubmitProject}>
            {this.renderProjectName()}
            {this.renderProjectLink()}
            {this.renderDescription()}

            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </ConfigurationContext.Provider>
    );
  }
}

export default AddProjects;
