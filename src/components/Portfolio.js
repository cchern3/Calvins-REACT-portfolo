import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Brewery Finder",
    image: "/img/project1.png",
    repo: "https://github.com/cchern3/Grab-n-Drink",
    live: "https://cchern3.github.io/Grab-n-Drink/",
  },
  {
    id: 1,
    title: "Text-Editor",
    image: "/img/texteditor.png",
    repo: "https://github.com/cchern3/Calvins-Texteditor",
    live: "https://calvins-text-editor.herokuapp.com/",
  },
  {
    id: 2,
    title: "TECH-BLOG",
    image: "/img/techblog.png",
    live: "https://calvins-tech-blog.herokuapp.com/",
    repo: "https://github.com/cchern3/CALVINS-TECH-BLOG",
  },
  {
    id: 3,
    title: "Note-Taker",
    image: "/img/notetaker.png",
    repo: "https://github.com/cchern3/Calvins-Note-Taker",
    live: "https://calvin-note-taker.herokuapp.com/",
  },
  {
    id: 4,
    title: "Chat Application",
    image: "/img/friendly_chatapp.png",
    repo: "https://github.com/ltrapaga/friendly-chat-app",
    live: "https://friendly-chatapp.herokuapp.com/login",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    image: "/img/weather.png",
    repo: "https://github.com/cchern3/Challenge6Weather",
    live: "https://cchern3.github.io/Challenge6Weather/",
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
