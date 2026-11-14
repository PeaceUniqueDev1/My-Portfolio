
import './App.css'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'GitHub',
]

const projects = [
  {
    number: '01',
    title: 'UNIQMART',
    description:
      'My graduation e-commerce project, inspired by modern online shopping platforms.',
    tech: 'React · JavaScript · CSS · API',
    link: 'https://my-temu-clone.vercel.app/',
  },
  {
    number: '02',
    title: 'React Notes App',
    description:
      'A note-taking application where users can create, edit, search and delete notes.',
    tech: 'React · JavaScript · CSS',
    link: "https://note-app-henna-ten.vercel.app/",
  },
  {
    number: '03',
    title: 'React Todo App',
    description:
      'A task management application designed to help users organise daily activities.',
    tech: 'React · JavaScript · CSS',
    link: 'https://react-todo-taupe-nine.vercel.app/',
  },
  {
    number: '04',
    title: 'Counter App',
    description:
      'An interactive counter with increase, decrease and reset functions.',
    tech: 'React · JavaScript · CSS',
    link: 'https://my-project-2-theta.vercel.app/',
  },
]

function App() {
  return (
    <div className="portfolio">

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Peace Unique.</span>
        </h1>

        <h2>Junior Web Developer</h2>

        <p className="intro">
          I am a passionate junior web developer who enjoys
          creating clean, responsive and user-friendly web
          applications. I am constantly learning, improving
          my skills and turning ideas into meaningful
          digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <p className="availability">
          <span className="status-dot"></span>
          Open to learning and new opportunities
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about" id="about">
        <p className="section-label">GET TO KNOW ME</p>

        <h2>
          About <span>Me</span>
        </h2>

        <p>
          My name is Peace Unique, and I am a junior web
          developer with an interest in building websites
          and web applications.

          <br /><br />

          I work with HTML, CSS, JavaScript and React to
          create interactive and responsive user
          experiences. I enjoy learning new things,
          solving problems and improving my development
          skills through practical projects.

          <br /><br />

          My goal is to continue growing as a developer
          and create digital solutions that are useful
          and easy to use.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="section skills" id="skills">
        <p className="section-label">WHAT I WORK WITH</p>

        <h2>
          My <span>Skills</span>
        </h2>

        <div className="skill-list">
          {skills.map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section projects" id="projects">
        <p className="section-label">MY RECENT WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          Here are some of the projects I have worked on
          while developing my skills in web development.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <span className="project-number">
                {project.number}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.tech}</small>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Live Project ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME SECTION */}
      <section className="section resume" id="resume">
        <p className="section-label">
          MY EXPERIENCE AND BACKGROUND
        </p>

        <h2>
          My <span>Resume</span>
        </h2>

        <p>
          Interested in learning more about my background
          and development journey? You can view or download
          my resume below.
        </p>

        <div className="resume-buttons">
          <a
            href="/files/PEACE UNIQU2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            View Resume ↗
          </a>

          <a
            href="/files/PEACE UNIQU2.pdf"
            download
            className="primary-btn"
          >
            Download Resume ↓
          </a>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="section certifications" id="certifications">
        <p className="section-label">MY ACHIEVEMENTS</p>

        <h2>
          My <span>Certifications</span>
        </h2>

        <div className="project-card certificate-card">
          <span className="project-number">
            CERTIFICATE 01
          </span>

          <h3>Responsive Web Design</h3>

          <p>
            Certification awarded by freeCodeCamp for
            completing its Responsive Web Design curriculum.
          </p>

          <small>freeCodeCamp</small>

          <a
            href="https://www.freecodecamp.org/certification/fcc-9f51a9c9-2c57-46b1-9312-08b182557d4a/responsive-web-design-v9"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Certificate ↗
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section contact" id="contact">
        <p className="section-label">LET'S CONNECT</p>

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          I would love to connect, learn, collaborate and
          explore opportunities in web development.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="primary-btn"
        >
          Send Me an Email
        </a>

        <a
          href="https://github.com/PeaceUniqueDev1"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Visit My GitHub ↗
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          Designed & Built by <span>Peace Unique</span>
        </p>

        <p>
          © {new Date().getFullYear()} Peace Unique.
          All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
