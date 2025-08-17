import Link from "next/link";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Muhammad Hamza Ashraf
        </Link>
      </div>
      <nav className="nav-links">
        <button onClick={() => scrollToSection('about')} className="nav-link">
          About
        </button>
        <button onClick={() => scrollToSection('skills')} className="nav-link">
          Skills
        </button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="nav-link">
          Contact
        </button>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn">
          Resume
        </a>
      </nav>
    </div>
  )
}

export default Navbar;