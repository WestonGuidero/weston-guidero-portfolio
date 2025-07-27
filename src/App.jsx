import React from 'react';
import profileImage from './assets/images/photo_of_me.jpg';


// Main App component
function App() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Bootstrap CDN links - These MUST be placed in your project's root index.html file */}
      {/* For demonstration purposes, conceptually imagine these are linked in index.html:
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      */}

      {/* Header */}
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fs-4 fw-bold text-dark" href="#">Weston Guidero</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-secondary me-3" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary me-3" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary me-3" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="text-white py-5 py-md-5 text-center d-flex align-items-center justify-content-center flex-grow-1"
        style={{
          background: 'linear-gradient(45deg, #007bff, #6f42c1)', // Subtle gradient for pop
          minHeight: '70vh', // Make it a bit taller
          borderRadius: '0 0 50% 50% / 0 0 10% 10%', // Rounded bottom edge
          marginBottom: '5rem', // Add space below hero
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)' // Subtle shadow
        }}>
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
              {/* Profile image import and usage */}
              {/* Ensure you have profileImage imported at the top of this file:
                  import profileImage from './images/PXL_20230711_212455692 - Copy.jpg';
              */}
              <img
                src={'./src/assets/images/photo_of_me.jpg'} // Make sure this path is correct relative to your public/index.html
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
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Bootstrap & Tailwind CSS</li>
                    <li>jQuery</li>
                    <li>RESTful APIs</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Cloud & Infrastructure */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm rounded-3 hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Cloud & Infrastructure</h3>
                  <ul className="list-unstyled text-secondary fs-5">
                    <li>AWS (EC2, S3, Lambda)</li>
                    <li>Azure</li>
                    <li>Docker</li>
                    <li>Git</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Vercel</li>
                    <li>Netlify</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* CMS, Tools & Systems */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm rounded-3 hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">CMS, Tools & Systems</h3>
                  <ul className="list-unstyled text-secondary fs-5">
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
                    {/* Corrected badge classes for better visibility */}
                    <span className="badge bg-primary rounded-pill px-3 py-2 text-white">Next.js</span>
                    <span className="badge bg-success rounded-pill px-3 py-2 text-white">XAI API</span>
                    <span className="badge bg-info rounded-pill px-3 py-2 text-white">Supabase</span>
                  </div>
                  <a
                    href="https://ai-chatbot-westonguideros-projects.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2: Vehicle Services App */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-lg rounded-3 overflow-hidden hover-lift">
                <div className="card-body p-4">
                  <h3 className="card-title fs-3 fw-semibold text-dark mb-3">Vehicle Services App</h3>
                  <p className="card-text text-secondary mb-4">
                    An iOS platform for on-demand car logistics & relocation with GPS tracking, developed using Swift and SwiftUI.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {/* Corrected badge classes for better visibility */}
                    <span className="badge bg-danger rounded-pill px-3 py-2 text-white">Swift</span>
                    <span className="badge bg-purple rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#6f42c1'}}>SwiftUI</span> {/* Custom color for indigo-like */}
                    <span className="badge bg-warning rounded-pill px-3 py-2 text-white">Firebase</span> {/* Dark text for light warning background */}
                  </div>
                  <a
                    href="#" // Replace with actual project link if available
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    Learn More &rarr;
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
                    {/* Corrected badge classes for better visibility */}
                    <span className="badge bg-pink rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#e83e8c'}}>REST API</span> {/* Custom color for pink-like */}
                    <span className="badge bg-teal rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#20c997'}}>CRUD</span> {/* Custom color for teal-like */}
                    <span className="badge bg-secondary rounded-pill px-3 py-2 text-white">Bootstrap CSS</span>
                  </div>
                  <a
                    href="#" // Replace with actual project link if available
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    Learn More &rarr;
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
                    {/* Corrected badge classes for better visibility */}
                    <span className="badge bg-orange rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#fd7e14'}}>WordPress</span> {/* Custom color for orange-like */}
                    <span className="badge bg-indigo rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#6610f2'}}>HTML/CSS</span> {/* Custom color for indigo-like */}
                  </div>
                  <a
                    href="#" // Replace with actual project link if available
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    Learn More &rarr;
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
                    {/* Corrected badge classes for better visibility */}
                    <span className="badge bg-cyan rounded-pill px-3 py-2 text-white" style={{backgroundColor: '#17a2b8'}}>React</span> {/* Custom color for cyan-like */}
                    <span className="badge bg-primary rounded-pill px-3 py-2 text-white">Bootstrap CSS</span>
                  </div>
                  <a
                    href="#" // Replace with actual project link if available
                    className="btn btn-link text-decoration-none fw-semibold"
                  >
                    Learn More &rarr;
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
            <a
              href="mailto:wguidero@gmail.com"
              className="btn btn-primary btn-lg rounded-pill shadow-lg px-5 py-3 fw-bold text-white mb-3"
            >
              Email Me
            </a>
            <div className="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://github.com/WestonGuidero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                {/* GitHub Icon (replace with SVG or Font Awesome if available) */}
                <svg className="bi" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2.0 0 .45.09.55-.17.79-1.01 2.96-3.24 2.96-6.54 0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/weston-guidero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                {/* LinkedIn Icon (replace with SVG or Font Awesome if available) */}
                <svg className="bi" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169h-3V13.39L4.943 13.39zm-1.557-6.227c.801 0 1.45-.603 1.45-1.342S4.187 4.75 3.386 4.75c-.801 0-1.45.603-1.45 1.342s.649 1.342 1.45 1.342zm6.708 6.227H9.498V9.45c0-.984-.027-2.393-1.464-2.393-1.466 0-1.697 1.144-1.697 2.325v3.529H4.943V6.169h2.962v1.362h.043c.51-.875 1.472-1.875 3.016-1.875 3.22 0 3.81 2.189 3.81 5.07v4.61h-3V9.45z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Weston Guidero. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;