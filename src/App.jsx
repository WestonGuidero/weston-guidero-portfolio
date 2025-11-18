import React, { useState } from 'react';
import profileImage from './assets/images/photo_of_me.jpg';
import githubIcon from './assets/images/github.svg'; // Import the GitHub SVG
import linkedinIcon from './assets/images/linkedin.svg'; // Import the LinkedIn SVG


// Main App component
function App() {
  const [showModal, setShowModal] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setFormStatus('');
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Bootstrap CDN links - These MUST be placed in your project's root index.html file */}
      {/* For demonstration purposes, conceptually imagine these are linked in index.html:
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      */}

      {/* Hero Section - Now includes integrated navigation */}
      <section id="hero" className="text-white py-5 py-md-5 text-center d-flex align-items-center justify-content-center flex-grow-1 position-relative"
        style={{
          background: 'linear-gradient(45deg, #007bff, #6f42c1)', // Subtle gradient for pop
          minHeight: '70vh', // Make it a bit taller
          borderRadius: '0 0 50% 50% / 0 0 10% 10%', // Rounded bottom edge
          marginBottom: '5rem', // Add space below hero
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)', // Subtle shadow
          paddingTop: '80px' // Add padding to push content down from the transparent header
        }}>
        {/* Integrated Navigation Links */}
        <nav className="position-absolute top-0 start-0 end-0 py-3" style={{ zIndex: 1000 }}>
          <div className="container d-flex justify-content-end">
            <ul className="list-unstyled d-flex mb-0">
              <li className="nav-item me-4">
                <a className="text-white text-decoration-none fw-semibold" href="#about">About</a>
              </li>
              <li className="nav-item me-4">
                <a className="text-white text-decoration-none fw-semibold" href="#skills">Skills</a>
              </li>
              <li className="nav-item me-4">
                <a className="text-white text-decoration-none fw-semibold" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <button onClick={openModal} className="text-white text-decoration-none fw-semibold bg-transparent border-0" style={{ cursor: 'pointer' }}>Contact</button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container my-5">
          <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown"> {/* Add animation class if you include Animate.css */}
            Hi, I'm Weston Guidero
          </h1>
          <p className="fs-4 mb-5 animate__animated animate__fadeInUp"> {/* Add animation class */}
            Full-stack developer with 4+ years of experience building scalable web applications.
          </p>
          <a
            href="#projects"
            className="btn btn-light btn-lg rounded-pill shadow-lg px-5 py-3 fw-bold text-primary animate__animated animate__zoomIn" // Add animation class
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 py-md-5 bg-white">
        <div className="container my-5">
          <h2 className="display-4 fw-bold text-center text-dark mb-5">About Me</h2>
          <div className="row align-items-center">
            <div className="col-md-7 text-secondary fs-5">
              <p className="mb-4">
                As a full-stack developer with over 4 years of experience, I specialize in building scalable web applications and robust payment systems. My expertise spans both frontend design and complex backend architectures, with a strong foundation in React, Node.js, Python, and PHP.
              </p>
              <p className="mb-4">
                I have a proven track record of delivering critical fixes under pressure and creating custom solutions for diverse clients. My background also includes enterprise networking and AV systems integration, providing a unique blend of technical skills.
              </p>
              <p>
                I am currently pursuing a Master's Degree in Software Engineering, DevOps Engineering at Western Governors University.
              </p>
            </div>
            <div className="col-md-5 d-flex justify-content-center mt-4 mt-md-0">
              {/* Profile image usage - Corrected src to use the imported variable */}
              <img
                src={profileImage} // Using the imported profileImage variable directly
                alt="Weston Guidero Profile"
                className="img-fluid rounded-circle shadow-lg" // Bootstrap classes for responsive, rounded image with shadow
                style={{ width: '250px', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 py-md-5 bg-light">
        <div className="container my-5">
          <h2 className="display-4 fw-bold text-center text-dark mb-5">Skills</h2>
          <div className="row g-4">
            {/* Programming Languages */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm rounded-3 hover-lift"> {/* Added hover-lift class */}
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Programming Languages</h3>
                  <ul className="list-unstyled text-secondary fs-5">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>PHP</li>
                    <li>Java</li>
                    <li>HTML/CSS</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Frontend & Frameworks */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm rounded-3 hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Frontend & Frameworks</h3>
                  <ul className="list-unstyled text-secondary fs-5">
                    <li>React</li>
                    <li>Bootstrap CSS</li>
                    <li>jQuery</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Backend & Runtimes */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm rounded-3 hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Backend & Runtimes</h3>
                  <ul className="list-unstyled text-secondary fs-5">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Cloud, Databases & Tools */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm rounded-3 hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Cloud, Databases & Tools</h3>
                  <ul className="list-unstyled text-secondary fs-5">
                    <li>AWS (EC2, S3, Lambda)</li>
                    <li>Azure</li>
                    <li>Docker</li>
                    <li>Git</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Postgres</li>
                    <li>Supabase</li>
                    <li>Vercel</li>
                    <li>Netlify</li>
                    <li>WordPress</li>
                    <li>Webpack</li>
                    <li>Linux</li>
                    <li>Audio/AV Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 py-md-5 bg-white">
        <div className="container my-5">
          <h2 className="display-4 fw-bold text-center text-dark mb-5">My Projects</h2>
          <div className="row g-4">
            {/* Project Card 1: AI Chatbot */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-lg rounded-3 overflow-hidden hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">AI Chatbot</h3>
                  <p className="card-text text-secondary mb-4">
                    An AI Chatbot built with Next.js, XAI API, and Supabase (Postgres) for real-time communication.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary rounded-pill px-3 py-2 text-white">Next.js</span>
                    <span className="badge bg-success rounded-pill px-3 py-2 text-white">XAI API</span>
                    <span className="badge bg-info rounded-pill px-3 py-2 text-white">Supabase</span>
                  </div>
                  <a
                    href="https://ai-chatbot-alpha-orcin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Example: Architecture Firm Website (React) */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-lg rounded-3 overflow-hidden hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Architecture Firm Website</h3>
                  <p className="card-text text-secondary mb-4">
                    Designed and created an architecture firm website from scratch using React, JSX, JavaScript, and Bootstrap CSS.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-cyan rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#17a2b8'}}>React</span> {/* Custom color for cyan-like */}
                    <span className="badge bg-primary rounded-pill px-3 py-2 text-white">Bootstrap CSS</span>
                  </div>
                  <a
                    href="https://guiderodesign.com" // Replace with actual project link if available
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>


            {/* Project Card 3: IMDB Movie Database App */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-lg rounded-3 overflow-hidden hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">IMDB Movie Database App</h3>
                  <p className="card-text text-secondary mb-4">
                    An IMDB movie database application with REST API integration, CRUD operations, and Bootstrap CSS styling.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-pink rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#e83e8c'}}>REST API</span> {/* Custom color for pink-like */}
                    <span className="badge bg-teal rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#20c997'}}>CRUD</span> {/* Custom color for teal-like */}
                    <span className="badge bg-secondary rounded-pill px-3 py-2 text-white">Bootstrap CSS</span>
                  </div>
                  <a
                    href="https://github.com/WestonGuidero/IMDB-Movie-Database-API-App" // Replace with actual project link if available
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Add more project cards here based on your GitHub and resume */}
            {/* Example: WordPress/HTML/CSS Portfolio Websites */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-lg rounded-3 overflow-hidden hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Client Portfolio Websites</h3>
                  <p className="card-text text-secondary mb-4">
                    Developed responsive portfolio websites for 5+ architectural and retail clients using WordPress, HTML, and CSS.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-orange rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#fd7e14'}}>WordPress</span> {/* Custom color for orange-like */}
                    <span className="badge bg-indigo rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#6610f2'}}>HTML/CSS</span> {/* Custom color for indigo-like */}
                  </div>
                  <a
                    href="#" // Replace with actual project link if available
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>



                        {/* Project Card 5: Vehicle Services App */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-lg rounded-3 overflow-hidden hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Vehicle Services App</h3>
                  <p className="card-text text-secondary mb-4">
                    An iOS platform for on-demand car logistics & relocation with GPS tracking, developed using Swift and SwiftUI.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-danger rounded-pill px-3 py-2 text-white">Swift</span>
                    <span className="badge bg-purple rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#6f42c1'}}>SwiftUI</span> {/* Custom color for indigo-like */}
                    <span className="badge bg-warning rounded-pill px-3 py-2 text-white">Firebase</span> {/* Changed text-dark to text-white */}
                  </div>
                  <a
                    href="#" // Replace with actual project link if available
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 py-md-5 bg-light">
        <div className="container my-5 text-center">
          <h2 className="display-4 fw-bold text-dark mb-4">Get In Touch</h2>
          <p className="fs-5 text-secondary mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="d-flex flex-column align-items-center mb-4">
            <button
              onClick={openModal}
              className="btn btn-primary btn-lg rounded-pill shadow-lg px-5 py-3 fw-bold text-white mb-3"
            >
              Email Me
            </button>
            <div className="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://github.com/WestonGuidero"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light rounded-circle shadow-sm p-3 d-flex align-items-center justify-content-center" /* Added Bootstrap classes for button-like appearance */
                style={{ color: '#333', width: '56px', height: '56px' }} /* Set specific color and fixed size */
              >
                {/* GitHub Icon - Using imported SVG as an <img> tag */}
                <img src={githubIcon} alt="GitHub" style={{ width: '32px', height: '32px' }} />
              </a>
              <a
                href="https://linkedin.com/in/weston-guidero"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light rounded-circle shadow-sm p-3 d-flex align-items-center justify-content-center" /* Added Bootstrap classes for button-like appearance */
                style={{ color: '#0A66C2', width: '56px', height: '56px' }} /* Set specific color and fixed size */
              >
                {/* LinkedIn Icon - Using imported SVG as an <img> tag */}
                <img src={linkedinIcon} alt="LinkedIn" style={{ width: '32px', height: '32px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <>
          {/* Backdrop with blur effect */}
          <div
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(8px)',
              zIndex: 1040,
            }}
          />

          {/* Modal */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1050,
              width: '90%',
              maxWidth: '600px',
            }}
          >
            <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-dark mb-0">Get In Touch</h2>
                <button
                  onClick={closeModal}
                  className="btn-close"
                  aria-label="Close"
                />
              </div>

              <form
                action="https://formspree.io/f/manvyede"
                method="POST"
                onSubmit={() => setFormStatus('sending')}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Your message here..."
                  />
                </div>

                {formStatus === 'sending' && (
                  <div className="alert alert-info mb-3">
                    Sending your message...
                  </div>
                )}

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg fw-bold"
                    disabled={formStatus === 'sending'}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Weston Guidero. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;