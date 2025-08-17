import { technicalSkills, softSkills } from "./data";
import NextJsIcon from "./NextJsIcon";

const Skills = () => {
  const skillIcons: { [key: string]: string } = {
    // Languages
    "JavaScript": "fa-brands fa-js-square",
    "TypeScript": "fa-solid fa-code",
    "Python": "fa-brands fa-python",
    "PHP": "fa-brands fa-php",
    "Go": "fa-solid fa-code",
    
    // Frameworks
    "NodeJS": "fa-brands fa-node-js",
    "ExpressJS": "fa-solid fa-server",
    "NestJS": "fa-solid fa-cube",
    "ReactJS": "fa-brands fa-react",
    "NextJS": "fa-solid fa-triangle",
    "Flask": "fa-solid fa-flask",
    "Laravel": "fa-brands fa-laravel",
    
    // Databases
    "PostgreSQL": "fa-solid fa-database",
    "MongoDB": "fa-solid fa-leaf",
    "AstraDB": "fa-solid fa-database",
    
    // ORM
    "TypeORM": "fa-solid fa-layer-group",
    "Prisma": "fa-solid fa-layer-group",
    "SQLAlchemy": "fa-solid fa-layer-group",
    
    // APIs
    "REST": "fa-solid fa-exchange-alt",
    "GraphQL": "fa-solid fa-project-diagram",
    "gRPC": "fa-solid fa-network-wired",
    
    // Blockchain
    "Hyperledger Fabric": "fa-solid fa-link",
    "Smart Contracts": "fa-solid fa-file-contract",
    
    // Cloud
    "AWS": "fa-brands fa-aws",
    "Microsoft Azure": "fa-brands fa-microsoft",
    "Docker": "fa-brands fa-docker"
  };

  const getSkillIcon = (skill: string): string => {
    return skillIcons[skill] || "fa-solid fa-code";
  };

  const skillCategories = [
    { title: "Programming Languages", skills: technicalSkills.languages, color: "#3b82f6" },
    { title: "Frameworks & Libraries", skills: technicalSkills.frameworks, color: "#10b981" },
    { title: "Databases", skills: technicalSkills.databases, color: "#f59e0b" },
    { title: "ORM & Data Access", skills: technicalSkills.orm, color: "#8b5cf6" },
    { title: "API Technologies", skills: technicalSkills.apis, color: "#ef4444" },
    { title: "Blockchain", skills: technicalSkills.blockchain, color: "#06b6d4" },
    { title: "Cloud & DevOps", skills: technicalSkills.cloud, color: "#f97316" }
  ];

  return (
    <div className="skills-container">
      <h2>Technical Skills & Expertise</h2>
      <p className="skills-subtitle">
        A comprehensive overview of my technical proficiency across various technologies and platforms
      </p>
      
      <div className="skills-categories">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 style={{ color: category.color }}>{category.title}</h3>
            <div className="grid-skills">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card fade-in">
                  {skill === "NextJS" ? (
                    <NextJsIcon style={{ color: category.color }} size={32} />
                  ) : (
                    <i className={getSkillIcon(skill)} style={{ color: category.color }}></i>
                  )}
                  <span>{skill}</span>
                  <div className="skill-level">
                    <div 
                      className="skill-level-fill" 
                      style={{ 
                        '--skill-width': '85%',
                        background: `linear-gradient(135deg, ${category.color}, ${category.color}aa)`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="skill-category">
          <h3 style={{ color: '#ec4899' }}>Soft Skills & Leadership</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <i className="fa-solid fa-check-circle" style={{ color: '#ec4899' }}></i>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
