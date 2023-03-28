import React from "react";

function About() {
  return (
    <div>
      <p className="content is-large">Full Stack Developer</p>
      <hr />
      <img className="profilePic" src={'/Calvins-REACT-portfolo/img/profile.jpg'} alt="Calvin Chern"/>
      <p className="content mt-6">
      Hi there, and welcome to my webpage! I'm Calvin, and I am currently enrolled in the Georgia Tech Coding Bootcamp. I have a Bachelor of Science in Biomedical Engineering and a Doctorate in Chiropractic. Currently, I am working as a Sports Chiropractor in Georgia. Recently, I have developed a deep interest in programming and web development and would like to dive into the Tech Industry as well. Food is another passion of mine, and I enjoy learning and discussing food culture (gastronomy). If you ever need a recommendation to a local restaurant, coffee shop, bakery, etc. around Atlanta, GA, I'd happily oblige!
      </p>
    </div>
  );
}

export default About;
