import React from "react";
import { v4 } from "uuid";
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

const ConfigurationContext = React.createContext({
  projectList: [...projects],
  onSubmitProject: () => {},
});

export default ConfigurationContext;
