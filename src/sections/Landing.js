import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import './Landing.css';
import './Modal.css';
import { motion} from 'framer-motion';
import HamburgerMenu from '../components/HamburgerMenu';


import amazonImage from './aws.jpeg';
import playbookImage from './playbook.jpg';
import maxedsImage from './maxeds.jpeg';
import ourcampusImage from './ourcampus.jpg';
import linkedImage from './linked.jpg';
import privateImage from './private.jpg';
import ec2Image from './ec2.png';
import playImage1 from './playbook1.png';
import playImage2 from './playbook2.png';
import playImage3 from './playbook3.png';
import campusImage1 from './campus1.jpg';
import campusImage2 from './campus2.jpg';
import campusImage3 from './campus3.jpg';
import campusImage5 from './campus5.jpg';
import linkedImage1 from './linked1.png';

const projects = [
  {
    id: "aws",
    title: "SDE Intern",
    year: 2024,
    type: "Internship",
    tools: "Java, AWS",
    images: [amazonImage,ec2Image],
    description: (
      <div className="project-experience">
        <h4>Amazon Web Services (AWS) – EC2 Reserved Instances</h4>
        <div className="description-grid">
          <div className="left">
            <p className="label">Problem</p>
            <p>
              The existing system relied on a legacy Distributed Job Scheduling solution to manage subscription state updates, which lacked scalability and native AWS integration
            </p>
  
            <p className="label">Solution</p>
            <p>
              Designed and implemented a scalable, event-driven architecture using AWS-native services to automate and streamline subscription updates across regions and partitions
            </p>
          </div>
          <div className="right">
            <p className="label">Contributions</p>
            <ul>
              <li>Replaced legacy scheduling system with a NAWS solution</li>
              <li>Developed infrastructure using AWS CDK (multi-region, multi-partition)</li>
              <li>Integrated CloudWatch for monitoring, metric tracking, and alerting</li>
            </ul>
            <p className="label">Impact</p>
            <ul>
              <li>Improved system reliability, observability, and scalability</li>
              <li>Reduced operational complexity and increased automation coverage for EC2 Reserved Instances</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },  
  {
    id: "playbook",
    title: "Head Backend Developer",
    year: 2023,
    type: "Internship",
    tools: "Python",
    images: [playbookImage, playImage1, playImage2, playImage3],
    description: (
      <div className="project-experience">
        <h4>Playbook Sports</h4>
        <div className="description-grid">
          <div className="left">
            <p className="label">Problem</p>
            <p>
              Manual data collection created inefficiencies, limited the scalability of operations, and introduced frequent bottlenecks
            </p>
  
            <p className="label">Solution</p>
            <p>
              Developed an asynchronous scraping and automation pipeline to extract and consolidate data from 40,000+ sources into a live spreadsheet
            </p>
          </div>
          <div className="right">
            <p className="label">Contributions</p>
            <ul>
              <li>Led system design and secured $6,000 investment after presenting to the CEO</li>
              <li>Built an async Python scraper using Selenium with dynamic parameter adaptation logic</li>
              <li>Integrated scraped output into Google Sheets using the gspread API</li>
            </ul>
  
            <p className="label">Impact</p>
            <p>
              Achieved 90% workflow efficiency improvement while scaling the system to tens of thousands of data points per run
            </p>
          </div>
        </div>
      </div>
    ),
  },  
  {
    id: "maxeds",
    title: "Backend Developer",
    year: 2023,
    type: "Startup",
    tools: "OpenAI API, Flask, PyTorch, NLP",
    images: [maxedsImage],
    description: (
      <div className="project-experience">
        <h4>MaxedS – Accounting Automation SaaS</h4>
        <div className="description-grid">
          <div className="left">
            <p className="label">Problem</p>
            <p>
              Manual financial workflows were time-consuming and error-prone, leading to high operational costs and limited scalability for clients
            </p>
  
            <p className="label">Solution</p>
            <p>
              Designed an AI-driven automation platform to streamline accounting workflows, combining LLM-powered logic with real-time interaction and intelligent parsing
            </p>
          </div>
          <div className="right">
            <p className="label">Contributions</p>
            <ul>
              <li>Integrated OpenAI and Griptape to power intelligent financial operations</li>
              <li>Built dynamic chat interfaces with Flask for real-time system interaction</li>
              <li>Implemented NLP pipelines with PyTorch to extract actionable insights from structured and unstructured financial data</li>
              <li>Developed an email summarization system to auto-categorize and assign internal tasks</li>
            </ul>
  
            <p className="label">Impact</p>
            <p>
              Reduced client costs by over 80%, accelerated internal workflows, and delivered a scalable MVP used by early adopters
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "linked",
    title: "LINK",
    year: 2023,
    type: "Creative Tool",
    tools: "Processing",
    images: [linkedImage, linkedImage1],
    description: (
      <div className="project-experience">
        <h4>LINK – Interactive Drawing Tool</h4>
        <div className="description-grid">
          <div className="left">
            <p className="label">Concept</p>
            <p>
              Blend interactive drawing with image processing to explore spatial relationships between user-generated nodes and underlying visual data
            </p>
  
            <p className="label">System Design</p>
            <p>
              Users can place and drag nodes, which automatically form visual connections based on proximity, constrained by a max-connection setting
            </p>
          </div>
          <div className="right">
            <p className="label">Technical Implementation</p>
            <ul>
              <li>Used ControlP5 for GUI controls and gab.opencv for image processing logic</li>
              <li>Built node-based interaction logic and adjustable connection thresholds</li>
              <li>Included grayscale, edge-detection, and contour mapping to create dynamic, generative visuals</li>
            </ul>
  
            <p className="label">Outcome</p>
            <p>
              A creative, code-based sketching tool combining generative art and interaction design through minimal controls
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ourcampus",
    title: "Lead Backend Developer",
    year: 2022,
    type: "App",
    tools: "Node.js, React Native, HTML, CSS",
    images: [ourcampusImage, campusImage1, campusImage2, campusImage3, campusImage5],
    description: (
      <div className="project-experience">
        <h4>OurCampus – Wesleyan University</h4>
        <div className="description-grid">
          <div className="left">
            <p className="label">Goal</p>
            <p>
              Create a comprehensive student experience app with event updates and live dining data for Wesleyan students
            </p>
  
            <p className="label">Development</p>
            <p>
              Led both backend and UI teams, building a React Native frontend with a Node.js backend and integrating scrapers for real-time data
            </p>
          </div>
          <div className="right">
            <p className="label">Key Features</p>
            <ul>
              <li>GDPR-compliant data deletion functions with secure logging</li>
              <li>Custom web scraper using Axios + Cheerio to extract daily menus</li>
              <li>Generated unique hashes to track and avoid duplicate menu data</li>
            </ul>
  
            <p className="label">Impact</p>
            <p>
              App launched to a student base of 500+, offering real-time dining and utility features integrated across campus services
            </p>
          </div>
        </div>
      </div>
    ),
  },  
  {
    id: "private",
    title: "Privacy Messaging App",
    year: 2022,
    type: "App",
    tools: "PHP, JavaScript",
    images: [privateImage],
    description: (
      <div className="project-experience">
        <h4>Privacy Messaging App</h4>
        <div className="description-grid">
          <div className="left">
            <p className="label">Objective</p>
            <p>
              Build a secure, privacy-focused messaging app that safeguards user data and protects communication from interception or manipulation
            </p>
  
            <p className="label">Security Approach</p>
            <p>
              End-to-end encryption via AES-256 and RSA, plus app-level protections like 2FA, screenshot blocking, and theoretical screen-capture defense
            </p>
          </div>
          <div className="right">
            <p className="label">Architecture</p>
            <ul>
              <li>Implemented blockchain-inspired message deletion to prevent tampering</li>
              <li>Enforced strict data rules with Firebase Security Rules and custom auth logic</li>
              <li>Created a clean UI that supports security without compromising usability</li>
            </ul>
  
            <p className="label">Result</p>
            <p>
              Presented as a prototype exploring the intersection of cryptography, UX, and platform security — with practical implementations and research extensions
            </p>
          </div>
        </div>
      </div>
    ),
  },    
];

const Work = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [activeYear, setActiveYear] = useState(projects[0].year);
  const [yearOffset, setYearOffset] = useState(0);
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef({});
  const trackRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const updateScrollArrows = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 0);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length > 0) {
        const topProjectId = visible[0].target.getAttribute('data-id');
        const topProject = projects.find(p => p.id === topProjectId);
        setActiveProjectId(topProject.id);
        setActiveYear(topProject.year);

        const idx = projects.findIndex(p => p.id === topProjectId);
        const totalCheckpoints = projects.length - 1;
        const trackHeight = trackRef.current?.offsetHeight || 0;
        const offset = (idx / totalCheckpoints) * trackHeight;
        setYearOffset(offset);
      }
    }, { root: null, threshold: 0.5 });

    Object.values(itemRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    const container = scrollContainerRef.current;
    if (container) {
      updateScrollArrows();
      container.addEventListener('scroll', updateScrollArrows);
    }

    return () => {
      observer.disconnect();
      container && container.removeEventListener('scroll', updateScrollArrows);
    };
  }, []);

  const activeProject = projects.find(p => p.id === activeProjectId);
  const isActive = (path) => location.pathname === path;

  return (
    <div className="landing-container">
      {/* Top navigation */}
      <div className="top-nav-buttons">
        <div className="desktop-only">
          <h2 className="landing-name-clickable" onClick={() => navigate('/')}>
            FREDDY FABIAN
          </h2>
          <div className="nav-links">
            <span onClick={() => navigate('/landing')} className={isActive('/landing') ? 'active' : ''}>
              Work
            </span>
            <span onClick={() => navigate('/about')} className={isActive('/about') ? 'active' : ''}>
              About
            </span>
            <span onClick={() => window.open('https://www.linkedin.com/in/freddy-fabian-784395223/', '_blank')}>
              Connect
            </span>
          </div>
        </div>
        <div className="mobile-header mobile-only">
          <HamburgerMenu />
          <h2 className="mobile-name" onClick={() => navigate('/')}>
            FREDDY FABIAN
          </h2>
          <div style={{ width: 24 }} /> {/* Spacer for visual balance */}
        </div>
      </div>

      {/* Main Work section */}
      <section id="work" className="work-section">
        <div className="work-container">
          <div className="scroll-wrapper">
            <div className="desktop-only">
              {canScrollUp && <div className="scroll-arrow up">↑</div>}
            </div>

            <div className="projects-scroll-container" ref={scrollContainerRef}>
              <div className="projects-list">
                {projects.map((project, idx) => (
                  <div
                    key={project.id}
                    data-id={project.id}
                    ref={(el) => (itemRefs.current[project.id] = el)}
                  >
                    <ProjectCard
                      project={project}
                      isActive={activeProjectId === project.id}
                      index={idx} // Pass the index here
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="desktop-only">
              {canScrollDown && <div className="scroll-arrow down">↓</div>}
            </div>
          </div>

          <div className="year-group" ref={trackRef}>
            {projects.map((_, idx) => (
              <div
                key={idx}
                className={`checkpoint ${activeProjectId === projects[idx].id ? 'active' : ''}`}
                style={{
                  position: 'absolute',
                  top: `calc(${idx} * (100% / ${projects.length - 1}))`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#cc0000',
                }}
              />
            ))}

            <motion.div
              className="year-label desktop-only"
              animate={{ top: yearOffset }}
              transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            >
              {activeYear}
            </motion.div>
          </div>

          <div className="project-details-pane">
            {activeProject && (
              <>
                <h3>{activeProject.title}</h3>
                <div>{activeProject.description}</div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Custom Cursor (desktop only) */}
      {window.innerWidth > 768 && (
        <div
          className="custom-cursor"
          style={{ left: cursorPos.x, top: cursorPos.y }}
        />
      )}
    </div>
  );
};

export default Work;
