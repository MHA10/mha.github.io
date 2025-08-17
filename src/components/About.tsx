import Image from "next/image";
import { personalInfo, workExperience, technicalSkills } from "./data";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p className="intro-text">
            {personalInfo.summary} With over 5 years of experience in software development, 
            I specialize in backend architecture, system design, and leading technical teams 
            to deliver scalable, high-performance applications.
          </p>
          <p>
            Currently serving as a <span className="highlight">Backend Technical Team Lead</span> at Coding Crafts, 
            I focus on developing web applications, automations, and 3rd party integrations while 
            mentoring junior developers and designing comprehensive training programs.
          </p>
          <p>
            My expertise spans across modern technologies including <span className="highlight">TypeScript</span>, 
            <span className="highlight"> NestJS</span>, <span className="highlight">PostgreSQL</span>, 
            <span className="highlight">MongoDB</span>, and cloud platforms like 
            <span className="highlight">AWS</span> and <span className="highlight">Microsoft Azure</span>.
          </p>
        </div>
        <div className="about-img">
          <Image
            alt="Muhammad Hamza Ashraf - Professional Photo"
            src="/static/images/profile_1.jpg"
            className="profile-img scale-hover"
            width={300}
            height={400}
          />
        </div>
      </div>
      
      <div className="experience-section">
        <h3>Professional Experience</h3>
        <div className="experience-grid">
          {workExperience.map((job) => (
            <div key={job.id} className="experience-card fade-in">
              <div className="experience-header">
                <h4>{job.position}</h4>
                <span className="company">{job.company}</span>
                <span className="duration">{job.duration}</span>
                <span className="location">{job.location}</span>
              </div>
              <ul className="responsibilities">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="skills-preview">
        <h3>Core Technologies</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <div className="skill-tags">
              {technicalSkills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Frameworks</h4>
            <div className="skill-tags">
              {technicalSkills.frameworks.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Databases</h4>
            <div className="skill-tags">
              {technicalSkills.databases.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Cloud & DevOps</h4>
            <div className="skill-tags">
              {technicalSkills.cloud.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
