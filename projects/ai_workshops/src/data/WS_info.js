import workshop1Img from "../assets/ws_img/vs_jupyter.png";
import workshop2Img from "../assets/ws_img/MNIST.png";
import workshop3Img from "../assets/ws_img/AIAgent.png";
import workshop4Img from "../assets/ws_img/git.png";
import workshop5Img from "../assets/ws_img/flask.png";
import workshop6Img from "../assets/ws_img/clock.png";

const workshops = [
    {
        id: "workshop1",
        title: "VS Code + Jupyter Integration",
        description: "Learn how to integrate Jupyter Notebook with VS Code for seamless coding.",
        image: workshop1Img,
        status: "done"
    },
    {
        id: "workshop2",
        title: "MNIST-100 Visualization",
        description: "Learn how to visualize the MNIST-100 dataset.",
        image: workshop2Img,
        status: "upcoming"
    },
    {
        id: "workshop3",
        title: "AI Agent Chatbot",
        description: "Learn how to build an AI Agent personalized to your needs.",
        image: workshop3Img,
        status: "done"
    },
    {
        id: "workshop4",
        title: "Git Basics",
        description: "Coming soon...",
        image: workshop4Img,
        status: "upcoming"
    },
    {
        id: "workshop5",
        title: "Flask API Guide",
        description: "Coming soon...",
        image: workshop5Img,
        status: "upcoming"
    },
    {
        id: "workshop6",
        title: "Upcoming Workshop",
        description: "Coming soon...",
        image: workshop6Img,
        status: "upcoming"
    }
];

export default workshops;
