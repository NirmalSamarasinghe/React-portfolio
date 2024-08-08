import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable 
web applications. I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage 
my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and 
user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, HTML, CSS, and 
JavaScript. My journey in web development began with a deep curiosity for how things work, and it has evolved 
into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments 
and enjoy solving complex problems to deliver high-quality solutions. 
Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2022 - 2024",
    Institute: "Institute of Software Engineering-Panadura",
    description: `I am currently pursuing a Bachelor of Computer Science through the GDSE (Graduate Diploma in Software 
    Engineering) program at the University of Bolton, Institute of Software Engineering, Panadura. This specialized 
    program has provided me with a comprehensive education in both theoretical and practical aspects of computer 
    science, focusing on the intricacies of software engineering.`,
    technologies: ["Java", "MySQL", "React", "ReactNative","Angular"]
  },
  {
    year: "January-2019",
    Institute: "British way English Academy, Kalutara",
    description: `Diploma in English Language: Successfully completed with a Completed Pass, enhancing my communication 
    skills and ability to work with diverse teams.`,
  },
  {
    year: "January-2020",
    Institute: "Aquinas College of Higher Studies, Borella",
    description: `Diploma in English Language and Literature (First Level): Completed the First Level at Aquinas College of Higher Studies, Borella. This qualification deepened 
    my understanding of English language and literature, enriching my ability to engage in nuanced communication and 
    analysis.`,

  },
  {
    year: "2018 - Present",
    Institute: "GCE ORDINARY LEVEL - Kaluatara Vidayalaya National School",
    description: `Completed major barriers in mylife G.C.E Ordinary Level Examination in Kalutara Vidyalaya National
     School in 2018.I was also very interested in my studies`,
  },
];

export const PROJECTS = [
  {
    title: "The Coffee House clone app",
    image: project1,
    description:
      "The Coffee House clone is a React Native app that replicates a coffee shop's mobile interface. It features a sleek design for browsing the menu, checking promotions, and navigating effortlessly on both iOS and Android devices.",
    technologies: ["Typescript", "JavaScript"],
  },
  {
    title: "The Connect-4 Game",
    image: project2,
    description:
      "Using OOP Concepts, I created a Connect 4 Game with Min Max Ai.with Monto Carlo Tree Search Algorithm.",
    technologies: ["Java","JAVAFX","MySQL","OOP concepts"],
  },
  {
    title: "Londone coffee House",
    image: project3,
    description:
      "A standalone application for a London coffee house, built with Java, MySQL, and JavaFX. It offers a user-friendly interface for managing orders and inventory, ensuring seamless data handling and an intuitive experience.",
    technologies: ["JAVA", "MySQL", "JAVAFX"],
  },
  {
    title: "E-cafe Back-End",
    image: project4,
    description:
      "This Postman collection contains a set of API endpoints for interacting with a Java Point of Sale (POS) System. It includes functionality related to customers, items, and orders.",
    technologies: ["JAVA", "Postman","mySQL"],
  },
];

export const CONTACT = {
  address: "125 Sri Sandarshanarama Road Nagoda Kalutara",
  phoneNo: "+94 165 8984 ",
  email: "nipunnirmal67@gmil.com",
};