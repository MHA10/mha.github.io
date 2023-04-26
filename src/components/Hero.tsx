import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/static/images/profile_1.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Hamza's personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Muhammad Hamza Ashraf 👋</h1>
        <p>
          I'm a Software Developer | Web Developer based in Lahore, Pakistan. I
          specialize in building (and occasionally designing) exceptional
          websites, applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            // href="https://twitter.com/"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/MHA10"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hamza-ashraf/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
