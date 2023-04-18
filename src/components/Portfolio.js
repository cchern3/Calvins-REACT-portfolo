import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Brewery Finder",
    image: "/Calvins-REACT-portfolo/img/project1.png",
    repo: "https://github.com/cchern3/Grab-n-Drink",
    live: "https://cchern3.github.io/Grab-n-Drink/",
  },
  {
    id: 1,
    title: "Text-Editor",
    image: "/Calvins-REACT-portfolo/img/texteditor.png",
    repo: "https://github.com/cchern3/Calvins-Texteditor",
    live: "https://calvins-text-editor.herokuapp.com/",
  },
  {
    id: 2,
    title: "TECH-BLOG",
    image: "/Calvins-REACT-portfolo/img/techblog.png",
    live: "https://calvins-tech-blog.herokuapp.com/",
    repo: "https://github.com/cchern3/CALVINS-TECH-BLOG",
  },
  {
    id: 3,
    title: "Note-Taker",
    image: "/Calvins-REACT-portfolo/img/notetaker.png",
    repo: "https://github.com/cchern3/Calvins-Note-Taker",
    live: "https://calvin-note-taker.herokuapp.com/",
  },
  {
    id: 4,
    title: "Chat Application",
    image: "/Calvins-REACT-portfolo/img/friendly_chatapp.png",
    repo: "https://github.com/ltrapaga/friendly-chat-app",
    live: "https://friendly-chatapp.herokuapp.com/login",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    image: "/Calvins-REACT-portfolo/img/weather.png",
    repo: "https://github.com/cchern3/Challenge6Weather",
    live: "https://cchern3.github.io/Challenge6Weather/",
  },
  {
    id: 6,
    title: "ButtSniffer Social Media App",
    image: "/Calvins-REACT-portfolo/img/buttsniffer.png",
    repo: "https://github.com/ltrapaga/ButtSniffer-dog-socialmedia-app",
    live: "https://buttsniffer-dog-social-media.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
