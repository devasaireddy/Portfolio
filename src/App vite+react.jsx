import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample projects data based on your resume
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website to showcase skills and projects",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["HTML", "CSS", "React.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Online Cricket Score Predictor",
      description: "Built a machine learning model to predict cricket match scores using historical data",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Python", "TensorFlow", "Keras", "Pandas"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Image Cartoon Generator",
      description: "Developed an AI-based tool to convert real images into cartoon-style outputs",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Python", "OpenCV", "TensorFlow", "Keras"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  // Certifications data
  const certifications = [
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      description: "Covered Python basics, data structures, web scraping, and databases."
    },
    {
      title: "C Programming Certification",
      issuer: "Cisco Networking Academy",
      description: "Completed course on fundamentals of C programming, problem-solving, and algorithmic thinking."
    },
    {
      title: "Python Programming Certification",
      issuer: "Cisco Networking Academy",
      description: "Gained knowledge in Python basics, control structures, functions, and practical applications."
    }
  ];

  // Skills data based on your resume
  const skills = {
    languages: ["Python", "C", "DBMS"],
    frontend: ["React.js", "JavaScript", "HTML5", "CSS"],
    aiml: ["Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "NLP"],
    tools: ["Microsoft PowerPoint", "Microsoft Word"]
  };

  // Function to handle resume download
  const handleDownloadResume = () => {
    // In a real app, this would point to your actual resume file
    const link = document.createElement('a');
    link.href = '/MY RESUME(3).pdf';
    link.download = 'MY RESUME(3).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to open LinkedIn profile
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/deva-sai-reddy-366a99307', '_blank');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="logo">
            <span>Deva's Portfolio</span>
          </div>
        </div>
        
        <div className="header-center">
          <div className="search-bar">
            <input type="text" placeholder="Search projects..." />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        
        <div className="header-right">
          <button className="resume-btn" onClick={handleDownloadResume}>
            <i className="fas fa-download"></i>
            <span>Resume</span>
          </button>
          <button className="sign-in-btn" onClick={() => setActiveTab('contact')}>
            <i className="fas fa-user-circle"></i>
            <span>Contact</span>
          </button>
        </div>
      </header>

      <div className="main-container">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="sidebar">
            <div className="sidebar-section">
              <div className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </div>
              <div className={`sidebar-item ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
                <i className="fas fa-user"></i>
                <span>About</span>
              </div>
              <div className={`sidebar-item ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
                <i className="fas fa-code"></i>
                <span>Projects</span>
              </div>
              <div className={`sidebar-item ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
                <i className="fas fa-cog"></i>
                <span>Skills</span>
              </div>
              <div className={`sidebar-item ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
                <i className="fas fa-graduation-cap"></i>
                <span>Education</span>
              </div>
            </div>
            
            <div className="sidebar-section">
              <div className="sidebar-header">MY CHANNEL</div>
              <div className={`sidebar-item ${activeTab === 'certifications' ? 'active' : ''}`} onClick={() => setActiveTab('certifications')}>
                <i className="fas fa-certificate"></i>
                <span>Certifications</span>
              </div>
              <div className={`sidebar-item ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>
                <i className="fas fa-trophy"></i>
                <span>Achievements</span>
              </div>
            </div>
            
            <div className="sidebar-section">
              <div className="sidebar-header">CONTACT</div>
              <div className="sidebar-item" onClick={() => setActiveTab('contact')}>
                <i className="fas fa-envelope"></i>
                <span>kdeva@karunya.edu.in</span>
              </div>
              <div className="sidebar-item" onClick={openLinkedIn}>
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </div>

            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="content">
          {activeTab === 'home' && (
            <div className="tab-content">
              <div className="hero-section">
                <div className="hero-content">
                  <h1>KATHA DEVA SAI REDDY</h1>
                  <p>Passionate Developer specializing in Python, AI/ML, and Frontend Development</p>
                  <div className="hero-buttons">
                    <button className="primary-btn" onClick={() => setActiveTab('projects')}>
                      View Projects
                    </button>
                    <button className="secondary-btn" onClick={handleDownloadResume}>
                      Download Resume
                    </button>
                  </div>
                </div>
                <div className="hero-image">
                  <div className="profile-circle">

                    <img src="my linkdin photo.jpeg" alt="Deva Sai Reddy" />
                  </div>
                </div>
              </div>

              <div className="section">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                  {projects.slice(0, 2).map(project => (
                    <div key={project.id} className="project-card">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-details">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                          {project.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="tab-content">
                <h1></h1>
              <h1>About Me</h1>
              <div className="about-section">
                <div className="about-content">
                  <div className="about-text">
                    <h2>Hello, I'm Deva Sai Reddy</h2>
                    <p>
                      Passionate about mastering cutting-edge technologies and building
                      innovative software solutions. Seeking a challenging role where I can
                      leverage and enhance my coding expertise to develop scalable,
                      high-performance applications.
                    </p>
                    <p>
                      Committed to continuous learning, problem-solving, and contributing to 
                      both short-term deliverables and long-term organizational goals through 
                      strong technical skills, creativity, and collaborative teamwork.
                    </p>
                    <div className="about-stats">
                      <div className="stat">
                        <h3>3+</h3>
                        <p>Projects Completed</p>
                      </div>
                      <div className="stat">
                        <h3>5+</h3>
                        <p>Technologies</p>
                      </div>
                      <div className="stat">
                        <h3>3</h3>
                        <p>Certifications</p>
                      </div>
                    </div>
                  </div>
                  <div className="about-image">
                    <div className="profile-circle">
                      {/* Add your jpeg here as well */}
                      <img src="my linkdin photo.jpeg" alt="Profile" />
                    </div>
                  </div>
                </div>

                <div className="personal-details">
                  <h3>Personal Details</h3>
                  <div className="details-grid">
                    <div className="detail-item">
                      <strong>Father's Name:</strong> KATHA VENKATESWARA REDDY
                    </div>
                    <div className="detail-item">
                      <strong>Date of Birth:</strong> 10 DECEMBER 2005
                    </div>
                    <div className="detail-item">
                      <strong>Languages:</strong> Telugu, English, Hindi, Tamil
                    </div>
                    <div className="detail-item">
                      <strong>Address:</strong> Velpanur, Velgodu (M), Nandyal(d) Andhra Pradesh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="tab-content">
              <h1>    </h1>
              <h1>My Projects</h1>
              <div className="projects-grid">
                {projects.map(project => (
                  <div key={project.id} className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-details">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                      <div className="project-actions">
                        <button className="project-btn">
                          <i className="fas fa-eye"></i> View Demo
                        </button>
                        <button className="project-btn">
                          <i className="fab fa-github"></i> Code
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="tab-content">
              <h1>    </h1>
              <h1>My Skills</h1>
              <div className="skills-section">
                <div className="skills-category">
                  <h2>Programming Languages</h2>
                  <div className="skills-list">
                    {skills.languages.map((skill, index) => (
                      <div key={index} className="skill">
                        <span>{skill}</span>
                        <div className="skill-bar">
                          <div className="skill-level" style={{width: `${80 + index * 5}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skills-category">
                  <h2>Frontend Development</h2>
                  <div className="skills-list">
                    {skills.frontend.map((skill, index) => (
                      <div key={index} className="skill">
                        <span>{skill}</span>
                        <div className="skill-bar">
                          <div className="skill-level" style={{width: `${70 + index * 10}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skills-category">
                  <h2>AI/ML Technologies</h2>
                  <div className="skills-list">
                    {skills.aiml.map((skill, index) => (
                      <div key={index} className="skill">
                        <span>{skill}</span>
                        <div className="skill-bar">
                          <div className="skill-level" style={{width: `${65 + index * 8}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skills-category">
                  <h2>Tools & Software</h2>
                  <div className="skills-list">
                    {skills.tools.map((skill, index) => (
                      <div key={index} className="skill">
                        <span>{skill}</span>
                        <div className="skill-bar">
                          <div className="skill-level" style={{width: `${85 + index * 5}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="tab-content">
              <h1> </h1>
              <h1>Education</h1>
              <div className="education-section">
                <div className="education-card">
                  <div className="edu-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="edu-details">
                    <h3>B.Tech, Computer Science and Engineering</h3>
                    <p className="institute">Karunya Institute of Technology and Sciences, Coimbatore</p>
                    <p className="year">2023 - 2027 | CGPA: 6.9/10</p>
                  </div>
                </div>

                <div className="education-card">
                  <div className="edu-icon">
                    <i className="fas fa-school"></i>
                  </div>
                  <div className="edu-details">
                    <h3>Intermediate Education</h3>
                    <p className="institute">SDR's Akanksha Junior College, Nandyal</p>
                    <p className="year">2021 - 2023 | Score: 630/1000</p>
                  </div>
                </div>

                <div className="education-card">
                  <div className="edu-icon">
                    <i className="fas fa-school"></i>
                  </div>
                  <div className="edu-details">
                    <h3>Secondary School Education</h3>
                    <p className="institute">Good Shepherd EM School, Nandyal</p>
                    <p className="year">2020 - 2021 | CGPA: 6.5/10</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="tab-content">
              <h1>  </h1>
              <h1>Certifications</h1>
              <div className="certifications-section">
                <div className="certs-grid">
                  {certifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                      <i className="fas fa-certificate"></i>
                      <h3>{cert.title}</h3>
                      <p className="issuer">{cert.issuer}</p>
                      <p className="description">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="tab-content">
              <h1>   </h1>
              <h1>Achievements</h1>
              <div className="achievements-section">
                <div className="achievement-card">
                  <i className="fas fa-trophy"></i>
                  <div className="achievement-details">
                    <h3>2nd Rank in Python Based Mind Kraft Event</h3>
                    <p>Karunya University</p>
                    <p>Topped the college with 2nd rank in Python Based Mind Kraft Event</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="tab-content">
              <h1></h1>
              <h1>Contact Me</h1>
              <div className="contact-section">
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h3>Email</h3>
                      <p>kdeva@karunya.edu.in</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h3>Phone</h3>
                      <p>8919846151</p>
                    </div>
                  </div>
                  <div className="contact-item" onClick={openLinkedIn}>
                    <i className="fab fa-linkedin"></i>
                    <div>
                      <h3>LinkedIn</h3>
                      <p>www.linkedin.com/in/deva-sai-reddy-366a99307</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h3>Address</h3>
                      <p>Velpanur, Velgodu (M), Nandyal(d) Andhra Pradesh</p>
                    </div>
                  </div>
                </div>
                <div className="contact-form">
                  <h2>Send me a message</h2>
                  <form>
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Your Message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="primary-btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;