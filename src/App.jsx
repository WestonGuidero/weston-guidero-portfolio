import React, { useState } from 'react';
import profileImage from './assets/images/photo_of_me.jpg';
import githubIcon from './assets/images/github.svg';
import linkedinIcon from './assets/images/linkedin.svg';
import westAudioPreview from './assets/images/previews/west-audio.jpg';
import techwesPreview from './assets/images/previews/techwes-store.jpg';
import westCoastPreview from './assets/images/previews/westcoastsystems.jpg';
import guideroDesignPreview from './assets/images/previews/guiderodesign.jpg';
import nafsPreview from './assets/images/previews/nationalfamilyservices.jpg';
import './App.css';

const skillGroups = [
  {
    title: 'IT & Networking',
    skills: [
      'Enterprise Networking', 'Network Infrastructure', 'AV/IT Systems Integration',
      'Linux Administration', 'Windows Administration',
      'Mail Server Administration', 'Zoho CRM', 'Cybersecurity (WGU, in progress)',
    ],
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'HTML/CSS', 'SQL'],
  },
  {
    title: 'Frontend & Frameworks',
    skills: ['React', 'Bootstrap CSS', 'jQuery', 'Figma'],
  },
  {
    title: 'Backend & Runtimes',
    skills: ['Node.js', 'Express.js', 'RESTful APIs'],
  },
  {
    title: 'Cloud, Databases & Tools',
    skills: [
      'AWS (EC2, S3, Lambda)', 'Azure', 'Docker', 'Git', 'Firebase', 'MongoDB',
      'MySQL', 'Postgres', 'Supabase', 'Vercel', 'Netlify', 'WordPress', 'Webpack',
    ],
  },
];

const experience = [
  {
    role: 'Active Directory / Systems Administrator (Contract)',
    company: 'CHOC (Children\'s Hospital of Orange County)',
    location: 'Orange, CA',
    dates: 'Jul 2026 – Present',
    bullets: [
      'Manage Active Directory user and group accounts — provisioning, deprovisioning, and password resets for hospital staff.',
      'Administer organizational unit structure and Group Policy Objects (GPOs) to enforce security and configuration standards across the domain.',
      'Image and deploy workstations, joining devices to the domain and configuring endpoint settings per hospital IT policy.',
      'Provide Tier 1/2 helpdesk support for hospital staff, resolving access, permissions, and account-related tickets tied to Active Directory.',
    ],
  },
  {
    role: 'IT Consultant & Network Administrator',
    company: 'West Coast Systems LLC',
    location: 'Redondo Beach, CA',
    dates: 'Jan 2026 – Jun 2026',
    bullets: [
      'Served as on-site IT consultant for small-business clients, administering Windows Server environments, Active Directory user/group policies, and network shares alongside Microsoft 365 account provisioning.',
      'Designed, deployed, and administered enterprise-grade network infrastructure (Ubiquiti UniFi switching, access points, VLAN segmentation) supporting client business operations.',
      'Managed server rack builds and structured cabling for client sites, including hardware replacement, patch panel terminations, and troubleshooting of network connectivity issues.',
      'Produced as-built documentation, network diagrams, and system runbooks to support ongoing client IT operations.',
    ],
  },
  {
    role: 'IT/AV & Smart Home Integration Technician',
    company: 'Namu Low Voltage / Signals Audio Video / RHI Integration',
    location: 'Southern California',
    dates: 'Jan 2024 – Jul 2026',
    bullets: [
      'Installed and commissioned AV and smart-home systems across 50+ residential properties.',
      'Ran and terminated Cat5e/Cat6 in new construction and retrofits (attic, crawl space, finished walls) with clean dress and labeling.',
      'Mounted and cabled Ubiquiti access points, IP/PoE cameras, and NVR systems; configured SonicWall routers and client networks.',
      'Troubleshot wiring with cable testers and tone generators.',
    ],
  },
  {
    role: 'IT & AV Technical Support Specialist',
    company: 'AVS Solutions / Encore Global',
    location: 'Southern California',
    dates: 'Mar 2022 – Dec 2024',
    bullets: [
      'Managed network and A/V infrastructure across 10+ concurrent conference rooms, maintaining 99.9% uptime for C-level and keynote presentations.',
      'Provided Tier 1/2 support for 100+ users per event across Windows and macOS, with 95%+ first-contact resolution.',
      'Triaged time-critical failures and built an internal knowledge base of recurring issues to cut mean time to resolution.',
      'Hardened Windows/macOS endpoints and enforced least-privilege access to presentation systems and executive content.',
    ],
  },
];

const certifications = [
  {
    icon: '🔒',
    name: 'CompTIA Security+ CE',
    meta: 'DoD 8570 IAT Level II',
    dates: 'Issued Mar 2026 · Exp. Mar 2029',
  },
  {
    icon: '☁️',
    name: 'AWS Certified Cloud Practitioner',
    meta: 'CLF-C02',
    dates: 'Issued Mar 2025 · Exp. Mar 2028',
  },
  {
    icon: '🎓',
    name: 'Technical Support Fundamentals',
    meta: 'Google / Coursera',
    dates: 'Issued May 2023',
  },
];

const infrastructureProjects = [
  {
    title: 'Virtualization & Container Orchestration',
    description:
      'Run a self-hosted infrastructure stack across Proxmox VE and Unraid — VM provisioning, Docker (10+ isolated containers with dedicated bridge networks and persistent volumes), and Kubernetes container orchestration across a multi-node cluster on Red Hat-based nodes.',
    tags: ['Proxmox', 'Docker', 'Kubernetes', 'RHEL', 'Unraid'],
  },
  {
    title: 'Networking & Segmentation',
    description:
      'Designed a segmented network on 10G backbone hardware (Mellanox ConnectX-3 SFP+, Ubiquiti UniFi switching) with VLANs isolating IoT, trusted, and management traffic, static IP allocation, and firewall access restrictions between segments.',
    tags: ['VLAN Segmentation', '10G Networking', 'Ubiquiti UniFi', 'Firewall Rules'],
  },
  {
    title: 'Remote Access, VPN & Reverse Proxy',
    description:
      'Built zero-trust remote access with a self-hosted WireGuard/Tailscale mesh VPN and a self-hosted RustDesk relay with no third-party cloud dependency, fronted by reverse proxies for routing self-hosted services securely.',
    tags: ['WireGuard', 'Tailscale', 'Reverse Proxy', 'Zero Trust'],
  },
  {
    title: 'Storage, Hosting & Monitoring',
    description:
      'Manage TrueNAS and Unraid storage nodes, a branded self-hosted mail server, and web hosting for client and personal sites, backed by a Wazuh SIEM stack with fail2ban/SSH hardening for centralized log aggregation and intrusion alerting. Infrastructure changes are version-controlled and repeatable via Terraform.',
    tags: ['TrueNAS', 'Mail Server', 'Wazuh SIEM', 'Terraform'],
  },
];

const projects = [
  {
    title: 'National Family Services & Client Websites',
    preview: { type: 'image', src: nafsPreview, alt: 'National Family Services homepage preview' },
    description:
      'Rebuilt a payment processing system on custom PHP/WordPress, restoring functionality in 72 hours and preventing $50K+ in monthly revenue loss. Built responsive portfolio sites for 5+ clients, lifting lead conversion by 40%, with staged, automated deployment workflows.',
    tags: ['WordPress', 'PHP', 'HTML/CSS'],
    links: [
      { href: 'https://www.nafsbenefits.com/', label: 'NAFS Benefits' },
      { href: 'https://nationalfamilyservices.com/', label: 'National Family Services' },
    ],
  },
  {
    title: 'Architecture Firm Website',
    preview: { type: 'image', src: guideroDesignPreview, alt: 'Guidero Design homepage preview' },
    description:
      'Designed and built an architecture firm website from scratch using React, JSX, and Bootstrap CSS.',
    tags: ['React', 'Bootstrap CSS'],
    link: { href: 'https://guiderodesign.com', label: 'View Project' },
  },
  {
    title: 'West-Audio.com',
    spotlight: true,
    preview: { type: 'image', src: westAudioPreview, alt: 'West-Audio.com homepage preview' },
    description:
      "West Audio is an independent software and audio plugin company building tools for music producers, engineers, composers, and hobbyists. Its flagship product, AudioFork, is a fully released version-control platform for DAW projects — the GitHub/Git of the audio world — available as a one-time purchase with an optional SaaS subscription for cloud backup. I designed and built the site, manage the product's release and licensing, and am currently developing a line of audio plugins for the West Audio product lineup.",
    tags: ['AudioFork', 'SaaS', 'One-Time Purchase', 'Audio Plugins (In Development)'],
    link: { href: 'https://west-audio.com', label: 'View Project' },
  },
  {
    title: 'Electronics Modding & Repair E-Commerce',
    spotlight: true,
    preview: { type: 'image', src: techwesPreview, alt: 'TechWes Store homepage preview' },
    description:
      "TechWes Store offers professional console modding and repair services — micro-soldering, firmware flashing, LCD replacements — building on repair work I started doing at age 15. I built the full-stack e-commerce site on Next.js and deployed it through Vercel's GitHub-connected CI/CD pipeline, integrating Stripe's token-authenticated payment API for checkout and subscriptions, Supabase for the backend database, and the Resend API for automated order and marketing emails.",
    tags: ['Next.js', 'Stripe', 'Supabase', 'Resend'],
    link: { href: 'https://techwes.store/', label: 'View Project' },
  },
  {
    title: 'West Coast Systems',
    spotlight: true,
    preview: { type: 'image', src: westCoastPreview, alt: 'West Coast Systems homepage preview' },
    description:
      'West Coast Systems provides low-voltage, IT, and AV services — structured cabling, network infrastructure, AV installs, and smart-home systems. I built the business website from the ground up and backed it with a branded mail server and a Zoho CRM integration for lead and pipeline management.',
    tags: ['Low Voltage / AV', 'Mail Server', 'Zoho CRM', 'IT Services'],
    link: { href: 'https://westcoastsystems.tech', label: 'View Project' },
  },
  {
    title: 'AI Chatbot',
    preview: { type: 'emoji', emoji: '🤖', gradient: 'linear-gradient(135deg, #1a1a1a, #343a40)' },
    description:
      'A self-hosted AI chatbot powered by Ollama for local, private large language model inference, with a custom web front end for real-time conversation.',
    tags: ['Ollama', 'Self-Hosted', 'LLM'],
    link: { href: 'https://wesollama.duckdns.org/', label: 'View Project' },
  },
];

function ProjectPreview({ project }) {
  const href = project.link ? project.link.href : project.links[0].href;
  if (project.preview.type === 'image') {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="project-preview">
        <img src={project.preview.src} alt={project.preview.alt} />
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-preview project-preview-emoji"
      style={{ background: project.preview.gradient }}
    >
      {project.preview.emoji}
    </a>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setFormStatus('');
  };

  return (
    <div className="page">
      {/* Nav */}
      <header className="navbar-glass">
        <div className="container nav-inner">
          <a href="#hero" className="brand">
            Weston <span>Guidero</span>
          </a>
          <ul className="nav-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#infrastructure">Infrastructure</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
            <li><button onClick={openModal}>Contact</button></li>
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <span className="eyebrow">Software Developer &middot; IT &amp; Network Systems</span>
                <h1 className="hero-title">
                  Hi, I'm <span className="accent-text">Weston Guidero</span>
                </h1>
                <p className="hero-subtitle">
                  I'm an IT, systems administration, and cybersecurity
                  professional with a software engineering background — 4+ years
                  running and securing enterprise networks, now pursuing a
                  Master's in Cybersecurity at Western
                  Governors University. I've also built scalable systems and
                  web applications, leaning increasingly into DevOps: CI/CD
                  pipelines, cloud infrastructure, and automated deployments.
                  That technical drive traces back to a B.A. in Music Production
                  and Contemporary Writing from Berklee College of Music, and a
                  lifelong passion for guitar and audio engineering that still
                  shapes how I approach building and securing systems.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn-gradient">View My Work</a>
                  <button onClick={openModal} className="btn-outline">Get In Touch</button>
                </div>
                <div className="hero-stack">
                  {['React', 'Node.js', 'Networking', 'Linux', 'Cybersecurity'].map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <img src={profileImage} alt="Weston Guidero" className="hero-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section section-tight">
        <div className="container">
          <span className="eyebrow">Experience</span>
          <h2 className="section-heading">Where I've Worked</h2>
          <div className="row g-4">
            {experience.map((job) => (
              <div className="col-12" key={job.role + job.company}>
                <div className="surface-card experience-card">
                  <div className="experience-head">
                    <span className="experience-role">{job.role}</span>
                    <span className="experience-dates">{job.dates}</span>
                  </div>
                  <div className="experience-company">{job.company} &middot; {job.location}</div>
                  <ul className="experience-list">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — front and center */}
      <section id="projects" className="section">
        <div className="container">
          <span className="eyebrow">Projects</span>
          <h2 className="section-heading">Things I've Built</h2>
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <div className={`surface-card project-card${project.spotlight ? ' spotlight' : ''}`}>
                  <ProjectPreview project={project} />
                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                    {project.links ? (
                      <div className="project-link-row">
                        {project.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label} &rarr;
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="project-link">
                        {project.link.label} &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Projects */}
      <section id="infrastructure" className="section section-tight">
        <div className="container">
          <span className="eyebrow">Systems &amp; Infrastructure</span>
          <h2 className="section-heading">Infrastructure Projects</h2>
          <div className="row g-4">
            {infrastructureProjects.map((item) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div className="surface-card infra-card">
                  <h3>{item.title}</h3>
                  <p className="infra-desc">{item.description}</p>
                  <div className="project-tags">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section section-tight">
        <div className="container">
          <span className="eyebrow">About</span>
          <h2 className="section-heading">A Bit About Me</h2>
          <div className="row align-items-center g-4">
            <div className="col-md-8 about-text">
              <p>
                My background spans both sides of the stack most people keep separate: I run my own IT services company focused on enterprise networking and systems administration, and I build full-stack web applications and payment systems on top of React, Node.js, Python, and PHP.
              </p>
              <p>
                I have a proven track record of delivering critical fixes under pressure and creating custom solutions for diverse clients, and I'm currently pursuing a Master's in Cybersecurity at Western Governors University to formalize that hands-on IT and networking experience.
              </p>
              <p>
                I also hold a B.A. in Music Production and Contemporary Writing from Berklee College of Music, and I'm still an active guitarist and audio engineer outside of work — a background that brings a different kind of creative problem-solving to how I build and secure systems.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src={profileImage} alt="Weston Guidero" className="about-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section section-tight">
        <div className="container">
          <span className="eyebrow">Certifications</span>
          <h2 className="section-heading">Credentials</h2>
          <div className="row g-3 mb-4">
            {certifications.map((cert) => (
              <div className="col-md-4" key={cert.name}>
                <div className="surface-card cert-card">
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-meta">{cert.meta}</div>
                  <div className="cert-dates">{cert.dates}</div>
                </div>
              </div>
            ))}
          </div>
          <span className="eyebrow">Skills</span>
          <h2 className="section-heading">Toolbox</h2>
          <div className="row g-3">
            {skillGroups.map((group) => (
              <div className="col-md-6 col-lg-4" key={group.title}>
                <div className="surface-card skill-card">
                  <h3>{group.title}</h3>
                  <div className="skill-chips">
                    {group.skills.map((skill) => (
                      <span className="chip" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-tight contact-section">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading">Let's Work Together</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 2rem' }}>
            I'm always open to new opportunities and collaborations. Feel free to reach out.
          </p>
          <button onClick={openModal} className="btn-gradient" style={{ marginBottom: '2rem' }}>
            Email Me
          </button>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/WestonGuidero" target="_blank" rel="noopener noreferrer" className="social-btn">
              <img src={githubIcon} alt="GitHub" className="icon-mono" />
            </a>
            <a href="https://linkedin.com/in/weston-guidero" target="_blank" rel="noopener noreferrer" className="social-btn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <>
          <div onClick={closeModal} className="modal-backdrop-custom" />
          <div className="modal-panel">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold mb-0" style={{ color: 'var(--text)' }}>Get In Touch</h2>
              <button onClick={closeModal} className="btn-close" aria-label="Close" />
            </div>

            <form
              action="https://formspree.io/f/manvyede"
              method="POST"
              onSubmit={() => setFormStatus('sending')}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control form-control-lg" id="name" name="name" required placeholder="Your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control form-control-lg" id="email" name="email" required placeholder="your.email@example.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label fw-semibold">Subject</label>
                <input type="text" className="form-control form-control-lg" id="subject" name="subject" required placeholder="What's this about?" />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea className="form-control form-control-lg" id="message" name="message" rows="5" required placeholder="Your message here..." />
              </div>

              {formStatus === 'sending' && (
                <div className="alert alert-info mb-3">Sending your message...</div>
              )}

              <div className="d-grid gap-2">
                <button type="submit" className="btn-gradient" disabled={formStatus === 'sending'} style={{ justifyContent: 'center' }}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Weston Guidero. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
