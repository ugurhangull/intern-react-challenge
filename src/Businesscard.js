import React, { useState } from "react";
import "./Businesscard.css";
import DisplayPic from "./images/profilepic.jpg";
import DisplayPic1 from "./images/./handwriting_recognition.jpg";
import DisplayPic2 from "./images/./CompanionEyes.png";
import DisplayPic3 from "./images/./Smart-Home-System.png";
import DisplayPic4 from "./images/./machine-learning.png";
import DisplayPic5 from "./images/./Hand-Gesture-Virual-Mouse.jpg";
import { useTheme } from "./ThemeContext";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const images = [
  {
    url: DisplayPic1,
    link: "https://github.com/ugurhangull/handwriting_recognition",
    desc: "Handwriting Recognition Project",
  },
  {
    url: DisplayPic2,
    link: "https://github.com/uemirhanselim/CompanionEyes",
    desc: "CompanionEyes App",
  },
  {
    url: DisplayPic3,
    link: "https://github.com/ugurhangull/Smart-Home-System-for-Hearing-Impaired",
    desc: "Smart Home System for Hearing Impaired",
  },
  {
    url: DisplayPic4,
    link: "https://github.com/ugurhangull/machine_learning_heart_failure",
    desc: "Machine Learning Project",
  },
  {
    url: DisplayPic5,
    link: "https://github.com/ugurhangull/GitHub/tree/main/Hand-Gesture-Virual-Mouse",
    desc: "Hand Gesture Virual Mouse",
  },
];

const Businesscard = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`card ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? (
          <FaMoon className="icon" />
        ) : (
          <FaSun className="icon" />
        )}
      </button>
      <img src={DisplayPic} alt="Ugurhan Gul" className="profile-pic" />
      <h2 className="name">Ugurhan Gul</h2>
      <p className="title">Frontend Developer | JavaScript | React</p>

      <div className="links">
        <a
          href="mailto:ugurhn.gul@gmail.com"
          target="_blank"
          className="link-button-mail"
        >
          <FaEnvelope className="icon" />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ugurhan-gul/"
          target="_blank"
          className="link-button-linkedin"
        >
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>
      </div>

      <div>
        <h3 className="main--title">About</h3>
        <p className="about">
          Driven Frontend Developer with a passion for building responsive and
          user-friendly web applications. Good knowlege in JavaScript, with
          hands-on experience in modern frameworks such as Vue.js and Angular.
          Experienced in agile development methodologies, collaborating closely
          with cross-functional teams, and leveraging version control systems
          for efficient code management.
        </p>
      </div>

      <div className="links">
        <a
          href="https://github.com/ugurhangull"
          target="_blank"
          className="link-button-github"
        >
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>
      </div>

      <div className="carousel">
        <button onClick={prevSlide} className="carousel-button">
          <FaArrowLeft />
        </button>
        <div className="carousel-images">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <a
              href={image.link}
              target="_blank"
              key={index}
              className="carousel-image-container"
            >
              <img
                src={image.url}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
              <div className="carousel-overlay">
                <span className="carousel-description">{image.desc}</span>
              </div>
            </a>
          ))}
        </div>
        <button onClick={nextSlide} className="carousel-button">
          <FaArrowRight />
        </button>
      </div>
      <p className="projects">Projects</p>
    </div>
  );
};

export default Businesscard;
