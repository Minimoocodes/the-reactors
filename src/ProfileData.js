import heidiproject1 from "./Assets/heidiproject1.png";
import heidiproject2 from "./Assets/heidiproject2.png";
import minproject1 from "./Assets/minproject1.png";
import minproject2 from "./Assets/minproject2.png";
import danielproject1 from "./Assets/danielproject1.png";
import danielproject2 from "./Assets/danielproject2.png";
import petraproject1 from "./Assets/petraproject1.png";
import petraproject2 from "./Assets/petraproject2.png";

const profilesData = [
  {
    name: "Heidi",
    fullName: "Heidi Espiritu",
    image: "./Assets/profile1.png",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "A passionate Front-End Developer with a keen eye for creating engaging and responsive user interfaces. I bring creativity and functionality together to craft seamless web experiences.",
    project1: { heidiproject1 },
    project2: { heidiproject2 },
  },
  {
    name: "Jaemin",
    fullName: "Jaemin Shim",
    image: "./Assets/profile2.png",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "A passionate Front-End Developer with a keen eye for creating engaging and responsive user interfaces. Proficient in HTML, CSS, and JavaScript, I bring creativity and functionality together to craft seamless web experiences.",
    project1: { minproject1 },
    project2: { minproject2 },
  },

  {
    name: "Daniel",
    fullName: "Daniel Pettersson",
    image: "./Assets/profile3.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "Music", "Hardware"],
    description:
      "A Multitalented Developer. Proficient in Webdevelpment and coding. Passionated about anything that has to do with music and electronic devices.",
    project1: { danielproject1 },
    project2: { danielproject2 },
  },

  {
    name: "Petra",
    fullName: "Petra Cuturdic",
    image: "./Assets/profile4.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "Typescript"],
    description:
      "A passionate Front-End Developer with a keen eye for creating engaging and responsive user interfaces. Proficient in HTML, CSS, and JavaScript, I bring creativity and functionality together to craft seamless web experiences.",
    project1: { petraproject1 },
    project2: { petraproject2 },
  },
];

export default profilesData;
