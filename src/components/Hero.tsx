import Image from "next/image";
import { personalInfo } from "./data";
import { useEffect, useState, useMemo } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = useMemo(() => ["Backend Technical Lead", "Software Engineer", "Full Stack Developer"], []);
  
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setDisplayText("");
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typeWriter);
  }, [currentIndex, titles]);

  return (
    <div className="hero-container fade-in">
      <Image
        src="/static/images/profile_1.png"
        className="profile-img scale-hover"
        width={300}
        height={300}
        alt="Muhammad Hamza Ashraf - Backend Technical Lead"
        priority
      />
      <div className="hero-text slide-up">
        <h1>Hey, I&apos;m {personalInfo.shortName} 👋</h1>
        <h2 className="typing-animation">
          {displayText}
          <span className="cursor">|</span>
        </h2>
        <p>
          {personalInfo.summary} I specialize in backend development, 
          system architecture, and leading technical teams to build scalable, 
          high-performance applications.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          {/* <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Companies</span>
          </div> */}
        </div>
        <div className="social-icons">
          <a
            href={personalInfo.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="scale-hover"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href={personalInfo.github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="scale-hover"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="scale-hover"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            aria-label="Phone"
            className="scale-hover"
          >
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
        <div className="cta-buttons">
          <a href="#contact" className="cta-btn primary">
            Get In Touch
          </a>
          <a href="#projects" className="cta-btn secondary">
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
