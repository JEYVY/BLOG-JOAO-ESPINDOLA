import Project1Img from "./images/project_1.jpg";
import Project2Img from "./images/project_2.jpg";
import Project3Img from "./images/project_3.jpg";

const ProjectsItems = [
    {
        id: 1,
        projectImg: Project1Img,
        projectTitle: 'Listing System - Project 1',
        projectDescription: 'This project is a listing system that retrieves information about Star Wars characters by consuming the Star Wars API. The system is designed to provide an organized and user-friendly way to browse, search, and display detailed information about various characters from the Star Wars universe. It is developed in React.',
        projectLink: 'https://joaovfe.github.io/sistema_de_listagem/'
    },
    {
        id: 2,
        projectImg: Project2Img,
        projectTitle: 'Inclusion and exclusion system of users - Project 2',
        projectDescription: 'This project is a React Native application. For the best experience, I suggest accessing it on your mobile device using the Expo GO app. The system allows for the addition and deletion of users, and when the page is reloaded, the participants that were previously added remain',
        projectLink: 'https://joaovfe.github.io/sistema_de_inclusao_exclusao/'
    },
    {
        id: 3,
        projectImg: Project3Img,
        projectTitle: 'My website - Project 3',
        projectDescription: "This project is my website, serving as a portfolio. The idea was to incorporate my favorite color, which is blue, and also give greater recognition to my work as a developer. It's responsive and serves as an excellent personal portfolio.",
        projectLink: 'https://blog-joao-espindola-qxpp2olh3-joaovfes-projects.vercel.app/'
    },
]

export default ProjectsItems;
