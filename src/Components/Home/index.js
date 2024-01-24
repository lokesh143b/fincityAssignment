import { Component } from "react";

import { v4 } from "uuid";

import "./index.css";
import "./index.css";
import Header from "../Header";
import Projects from "../Projects";

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";

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

class Home extends Component {
  state = {
    projectName: "",
    projectLink: "",
    description: "",
    projectList: [...projects],
    addBtnClick: false,
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
      addBtnClick: true,
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
    const { projectList, addBtnClick } = this.state;

    return (
      <div className="home-container">
        <Header />
        <div className="home-top-container">
          <div className="home-details-container">
            <h1 className="home-heading1">UI/UX Designer</h1>
            <h1 className="home-heading2">Hello, my name is Madelyn Torff</h1>
            <p className="home-description">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>
            <div className="home-btns-container">
              <button className="projects-btn" type="button">
                Projects
              </button>
              <button className="linkedin-btn" type="button">
                Linkedin
              </button>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dssfuaou4/image/upload/v1704389148/pexels-artem-beliaikin-1832323-removebg-preview_osbjkj.png"
              alt="home"
            />
          </div>
        </div>
        {/* add projects */}
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
        {/* projects */}
        {addBtnClick ? (
          <ul>
            <h1 className="projects-heading">Projects</h1>
            {projectList.map((each) => (
              <Projects projectList={each} />
            ))}
          </ul>
        ) : (
          ""
        )}
        {/* footer */}
        <div className="footer-container">
          <FaInstagramSquare className="icon-size" />
          <FaLinkedin className="icon-size" />
          <MdLocalPostOffice className="icon-size" />
        </div>
        <p className="footer-description">
          Copyright © 2024. All rights reserved
        </p>
      </div>
    );
  }
}

export default Home;
