import "./index.css";
import Header from "../Header";
import AddProjects from "../AddProjects";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";

const Home = () => (
  <div className="home-container">
    <Header />

    <div className="home-top-container">
      <div className="home-details-container">
        <h1 className="home-heading1">UI/UX Designer</h1>
        <h1 className="home-heading2">Hello, my name is Madelyn Torff</h1>
        <p className="home-description">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
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

    <AddProjects />

    {/* footer */}

    <div className="footer-container">
      <FaInstagramSquare className="icon-size" />
      <FaLinkedin className="icon-size" />
      <MdLocalPostOffice className="icon-size" />
    </div>
    <p className="footer-description">Copyright © 2024. All rights reserved</p>
  </div>
);

export default Home;
