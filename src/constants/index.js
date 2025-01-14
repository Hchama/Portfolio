import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    vscode,
    tableau,
    r,
    python,
    powerbi,
    java,
    flutter,
    docker,
    csharp,
    cplus,
    dart,
    corigin,
    firebase,
    unilab,
    thesis,
    bike,
    nature,
    note,
    receipt,
    qr,
    book

} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming language",
    },
    {
        imageUrl: corigin,
        name: "C",
        type: "Programming language",
    },
    {
        imageUrl: cplus,
        name: "C++",
        type: "Programming language",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Programming language",
    },
    {
        imageUrl: dart,
        name: "Dart",
        type: "Programming language",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Programming language",
    },    
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Framework",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Container",
    },
    {
        imageUrl: powerbi,
        name: "PowerBi",
        type: "Data Visualization",
    },
    {
        imageUrl: vscode,
        name: "VsCode",
        type: "IDE",
    },
    {
        imageUrl: tableau,
        name: "Tableau",
        type: "Data Visualization",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    },
];

export const experiences = [
    {
        title: "Data Science Intern",
        company_name: "Unilab",
        icon: unilab,
        iconBg: "#a2d2ff",
        date: "Aug 2023 - Oct 2023",
        points: [
                "Developing software applications using python and other related technologies.",
                "Collaborating with cross-functional teams including product managers, and other developers to create and ensure high-quality products.",
                "Installing and testing mobile applications to ensure optimal performance and reliability before distribution to stakeholders and clients.",
                "Providing insights to enhance applications and optimize data cleaning methods.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Hchama',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hl-perez',
    }
];

export const projects = [

    {
        iconUrl: thesis,
        theme: 'btn-back-black',
        name: 'Art Authentication: A Comparative Analysis of Convolutional Neural Network (CNN) Architectures for Detecting AI-Generated and Human-made Digital Artworks',
        description: 'A comprehensive study on a machine learning models that can detect whether an digital artwork was made by Artificial Intelligence or Humans. ',
        link: 'https://github.com/Hchama/Final_Thesis',
    },
    {
        iconUrl: qr,
        theme: 'btn-back-blue',
        name: 'QR generation program',
        description: 'Designed and built a QR generation program that outputs 6000 qrs per hour, built to help the Software Engineers in Unilab on their current main project',
        link: 'https://github.com/Hchama/QR-generator',
    },
    {
        iconUrl: book,
        theme: 'btn-back-pink',
        name: 'Readery',
        description: 'Built a novel reading program for android using Flutter framework, allowing users to read novels.',
        link: 'https://github.com/Hchama/Readery',
    },
    {
        iconUrl: bike,
        theme: 'btn-back-yellow',
        name: 'Rider helmet detection using yolov7 and deepsort',
        description: 'This project uses a CCTV recording to recognize rider helmets using the object detection model YOLOv7 and the object tracking model DeepSORT. Each group was given the task of manually labeling images from the collection of video frames using Roboflow while training a variety of hyperparameter settings and video time ranges.',
        link: 'https://github.com/Hchama/YOLO-DEEPSORT',
    },

    {
        iconUrl: note,
        theme: 'btn-back-red',
        name: 'Note-tify',
        description: 'Developed a web task manager that allows users to create, edit and delete tasks, create tags and assign them, also shows the completion progress!',
        link: 'https://github.com/Hchama/Note-tify',
    }
];