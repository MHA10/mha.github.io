import { personalInfo } from './data';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">
        I&apos;m always interested in new opportunities and collaborations. 
        Whether you have a project in mind, want to discuss technology, 
        or just want to say hello, feel free to reach out!
      </p>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <span className="contact-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-value">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <span className="contact-label">Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="contact-value">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <h4>Connect With Me</h4>
            <div className="social-grid">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-link">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h3>Send a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            
            <button type="submit" className="cta-btn">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
