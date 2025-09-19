import { useEffect, useState } from 'react'
import profileImage from './assets/profile.png'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaUniversity,
  FaPhoneAlt,
  FaFilePdf,
  FaGlobe,
} from 'react-icons/fa'
import './App.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
]

const contactItems = [
  { icon: FaMapMarkerAlt, label: 'Fullerton, CA (Open to Relocation)' },
  { icon: FaUniversity, label: 'California State University, Fullerton' },
  { icon: FaPhoneAlt, label: '714-213-4517', href: 'tel:7142134517' },
  { icon: FaEnvelope, label: 'aryan.sh.6302@gmail.com', href: 'mailto:aryan.sh.6302@gmail.com' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/er-aryan' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/er-aryan' },
  { icon: FaGlobe, label: 'Portfolio', href: 'https://your-portfolio-url.com' },
]

const summary = [
  'I am Aryan Sharma, a Computer Science graduate student at California State University, Fullerton (expected December 2025) with a focus on Large Language Models, Generative AI, and intelligent systems.',
  'My recent work spans AI research and applied engineering — from optimizing LLM pipelines for Pollack Library to mentoring students in Algorithm Engineering as a Teaching Assistant.',
  'I enjoy building production-grade AI assistants, multimodal experiences, and deployment pipelines that make advanced machine learning accessible to students, researchers, and end-users.',
]

const experiences = [
  {
    organisation: 'Pollack Library, California State University, Fullerton',
    role: 'LLM Research Engineer (Part-Time)',
    timeframe: 'Aug 2024 – Present',
    bullets: [
      'Optimized and evaluated LLM pipelines that support student and faculty research, improving response quality and latency.',
      'Integrated retrieval and summarization workflows into library systems to surface credible sources quickly.',
      'Instrumented analytics over large research datasets to guide product direction and adoption.',
    ],
  },
  {
    organisation: 'ECS Department, California State University, Fullerton',
    role: 'Teaching Assistant – Algorithm Engineering (Part-Time)',
    timeframe: 'Jan 2024 – Present',
    bullets: [
      'Guided cohorts through dynamic programming, greedy strategies, and NP-completeness using live demos and labs.',
      'Hosted office hours with targeted code reviews to improve assignment quality and exam readiness.',
      'Streamlined grading workflows and crafted review sessions that boosted overall course performance.',
    ],
  },
  {
    organisation: 'Sabudh Foundation, Mohali, India',
    role: 'Data Science Intern',
    timeframe: 'Jul 2021 – Jun 2023',
    bullets: [
      'Led a seven-member NLP team delivering five chatbot projects, lifting accuracy by 20% and cutting misinterpretation by 15%.',
      'Authored documentation, flows, and handover guides that increased team efficiency by 30%.',
      'Completed 100+ hours of exploratory data analysis and secured Dataiku/RASA certifications, reducing project turnaround by 35%.',
    ],
  },
]

const projectCategories = [
  {
    name: 'Computer Vision',
    projects: [
      {
        name: 'YOLOv8 Object Detector',
        focus: 'Computer Vision',
        bullets: [
          'Developed and deployed an object detector with transfer learning, reaching 92% accuracy on a custom dataset.',
          'Optimized the inference pipeline with TensorFlow and Ultralytics for near real-time performance.',
        ],
      },
      {
        name: 'Dog vs Cat Classifier (CNN)',
        focus: 'Image Classification',
        bullets: [
          'Trained a convolutional neural network on Kaggle data to distinguish cats and dogs with 90% accuracy.',
          'Applied convolution, pooling, and transfer learning to cement core image-classification skills.',
        ],
      },
      {
        name: 'Library Shelf Inventory System',
        focus: 'Vision + Automation',
        bullets: [
          'Built a computer-vision shelf inventory system using YOLO/segmentation to detect and organize books in stacks.',
          'Automated call-number alignment and tracking, reducing manual cataloging workload and errors.',
          'Synced detection results with a structured database for real-time inventory oversight.',
        ],
      },
    ],
  },
  {
    name: 'Core Deep Learning & NLP',
    projects: [
      {
        name: 'MNIST Digit Classifier (MLP)',
        focus: 'Deep Learning Foundations',
        bullets: [
          'Implemented a fully connected neural network achieving 97% accuracy on MNIST.',
          'Used dropout and batch normalization to mitigate overfitting.',
        ],
      },
      {
        name: 'Mini Transformer from Scratch',
        focus: 'Transformer Architecture',
        bullets: [
          'Implemented an encoder-decoder Transformer with self-attention and positional encoding.',
          'Strengthened understanding of attention, embeddings, and sequence modeling internals.',
        ],
      },
      {
        name: 'Text Generation with LSTM',
        focus: 'Sequence Modeling',
        bullets: [
          'Built an LSTM for character-level text generation, producing coherent sequences.',
          'Explored how recurrent architectures capture long-term dependencies.',
        ],
      },
      {
        name: 'Sentiment Classifier (TF-IDF + Logistic Regression)',
        focus: 'Classical NLP',
        bullets: [
          'Implemented a sentiment-analysis pipeline using TF-IDF features and Logistic Regression.',
          'Benchmarked classical ML against neural embeddings on modern datasets.',
        ],
      },
    ],
  },
  {
    name: 'Large Language Models',
    projects: [
      {
        name: 'Fine-tuned LLaMA2 with LoRA/QLoRA',
        focus: 'LLM Customization',
        bullets: [
          'Fine-tuned LLaMA2 on a domain dataset with LoRA/QLoRA, reducing hallucinations by 18%.',
          'Deployed via HuggingFace PEFT for efficient scaling and low-cost experimentation.',
        ],
      },
      {
        name: 'PDF Q&A with BERT/GPT',
        focus: 'Document Intelligence',
        bullets: [
          'Built a Q&A assistant over PDFs using HuggingFace Transformers (BERT/GPT).',
          'Enabled context-aware search in large documents to accelerate research workflows.',
        ],
      },
      {
        name: 'Text Summarizer / Chatbot',
        focus: 'Abstractive Summaries',
        bullets: [
          'Created a summarizer using Transformer models (T5, GPT) to condense long passages.',
          'Integrated summaries into a chatbot interface for concise question answering.',
        ],
      },
    ],
  },
  {
    name: 'Applied GenAI: RAG, Agents & Multimodal',
    projects: [
      {
        name: 'RAG-based Document Assistant',
        focus: 'Retrieval-Augmented Generation',
        bullets: [
          'Built a semantic search + RAG pipeline with LangChain and Pinecone.',
          'Delivered context-aware Q&A across large document sets.',
        ],
      },
      {
        name: 'Research Agent with CrewAI',
        focus: 'Agentic Workflows',
        bullets: [
          'Designed an autonomous research assistant with CrewAI for multi-step planning.',
          'Automated literature review and data collection to reduce manual effort.',
        ],
      },
      {
        name: 'LLM-based Multi-Agent Team (AutoGen)',
        focus: 'Multi-Agent Collaboration',
        bullets: [
          'Built a Planner-Researcher-Coder agent team using AutoGen.',
          'Demonstrated cooperative code generation and debugging with autonomous agents.',
        ],
      },
      {
        name: 'Multimodal AI Subtitle Generator',
        focus: 'Speech & Language',
        bullets: [
          'Created a subtitle pipeline using Whisper + LLMs for transcription, translation, and alignment.',
          'Delivered multilingual accessibility for video content.',
        ],
      },
      {
        name: 'Text-to-Image Generator (Stable Diffusion)',
        focus: 'Generative Art',
        bullets: [
          'Explored Stable Diffusion to produce high-quality images from text prompts.',
          'Documented prompt-engineering best practices for consistent results.',
        ],
      },
      {
        name: 'Voice-to-Text + TTS Assistant',
        focus: 'Speech Interfaces',
        bullets: [
          'Combined Whisper (ASR) with Tacotron-style TTS for real-time transcription and synthesis.',
          'Built accessibility-focused voice interfaces.',
        ],
      },
    ],
  },
  {
    name: 'Deployment & MLOps',
    projects: [
      {
        name: 'Deploy Full-Stack LLM App',
        focus: 'Production LLMs',
        bullets: [
          'Launched a FastAPI + Streamlit LLM application with containerized deployment.',
          'Published to HuggingFace Spaces for public access and feedback.',
        ],
      },
    ],
  },
  {
    name: 'Domain-Specific Chatbots & Applications',
    projects: [
      {
        name: 'IDP Chatbot',
        focus: 'Educational Support',
        bullets: [
          'Developed a Rasa chatbot to assist students with IDP queries.',
          'Led workshops and documentation efforts, increasing adoption by 40%.',
        ],
      },
      {
        name: 'Edu-ChatBot',
        focus: 'Knowledge Management',
        bullets: [
          'Designed a chatbot for interns and students to answer Edu Collab questions.',
          'Maintained datasets and flows, improving accuracy and reducing manual support.',
        ],
      },
      {
        name: 'SSA_Chatbot',
        focus: 'Student Services',
        bullets: [
          'Created an FAQ-driven chatbot for student support assistance.',
          'Automated academic and administrative query resolution.',
        ],
      },
      {
        name: 'NewMediBot',
        focus: 'Healthcare Assistant',
        bullets: [
          'Built a Rasa-based medical information chatbot covering symptoms, prevention, and treatments.',
          'Integrated with Telegram and WhatsApp and deployed via Docker for multi-platform support.',
        ],
      },
      {
        name: 'Calorie Tracker App',
        focus: 'Health & Wellness',
        bullets: [
          'Developed a calorie-tracking application with meal logging and weekly summaries.',
          'Implemented personalized nutrition targets and reporting for fitness goals.',
        ],
      },
      {
        name: 'SockCensor',
        focus: 'Content Moderation',
        bullets: [
          'Implemented a moderation pipeline to detect and censor inappropriate text content.',
          'Supports online platforms in enforcing community standards.',
        ],
      },
      {
        name: 'Image LLM Archives',
        focus: 'Multimodal Retrieval',
        bullets: [
          'Built an archive system using image embeddings and LLMs to index and retrieve image-text pairs.',
          'Enabled natural-language search to support designers and researchers.',
        ],
      },
    ],
  },
]

const skills = [
  {
    category: 'Technologies',
    items: [
      'Python',
      'SQL',
      'C++',
      'Natural Language Processing',
      'Transformers (BERT, GPT, T5)',
      'Generative AI',
      'Large Language Models',
      'Prompt Engineering',
      'Vector Databases',
      'Chatbot Development',
      'Web Scraping',
    ],
  },
  {
    category: 'Frameworks',
    items: [
      'TensorFlow',
      'Scikit-Learn',
      'NLTK',
      'Hugging Face',
      'Keras',
      'LangChain',
      'LangSmith',
      'LangGraph',
      'CrewAI',
      'Ragas',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Flask',
      'Docker',
      'Kubernetes',
      'AWS',
      'Azure App Services',
      'MongoDB',
      'Faiss',
      'Selenium',
      'Azure ML Studio',
    ],
  },
  {
    category: 'Techniques',
    items: [
      'Exploratory Data Analysis',
      'Data Mining',
      'Neural Networks',
      'Fine Tuning',
    ],
  },
]

const education = [
  {
    institution: 'California State University, Fullerton',
    credential: 'Master of Science, Computer Science',
    timeframe: 'Expected Dec 2025',
    details: ['GPA: 3.8 / 4.0'],
  },
  {
    institution: 'I.K. Gujral Punjab Technical University',
    credential: 'Bachelor of Technology, Computer Science & Engineering',
    timeframe: 'Aug 2019 – Jun 2023',
    details: ['GPA: 3.6 / 4.0'],
  },
]

const quickLinks = [
  { label: 'Download Résumé', href: '/Resume.pdf', icon: FaFilePdf },
  { label: 'Portfolio Showcase', href: 'https://your-portfolio-url.com', icon: FaGlobe },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/er-aryan', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/er-aryan', icon: FaGithub },
]

const footerSocial = [
  { label: 'Email', href: 'mailto:aryan.sh.6302@gmail.com', icon: FaEnvelope },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/er-aryan', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/er-aryan', icon: FaGithub },
  { label: 'Portfolio', href: 'https://your-portfolio-url.com', icon: FaGlobe },
]

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

function App() {
  const [showContacts, setShowContacts] = useState(true)
  const [activeCategorySlug, setActiveCategorySlug] = useState(null)

  const getCategoryFromSlug = (slug) =>
    projectCategories.find((category) => slugify(category.name) === slug) || null

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '')

      if (hash.startsWith('projects/')) {
        const [, slug] = hash.split('/')
        setActiveCategorySlug(getCategoryFromSlug(slug) ? slug : null)
        return
      }

      if (hash === 'projects' || hash === '') {
        setActiveCategorySlug(null)
      }
    }

    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  const activeCategory = activeCategorySlug
    ? getCategoryFromSlug(activeCategorySlug)
    : null
  const activeCategoryId = activeCategory ? slugify(activeCategory.name) : null

  const handleCategorySelect = (slug) => {
    setActiveCategorySlug(slug)
    window.location.hash = `projects/${slug}`
  }

  const handleBackToCategories = () => {
    setActiveCategorySlug(null)
    window.location.hash = 'projects'
  }

  return (
    <div className="app-shell">
      <header className="masthead">
        <div className="masthead__inner-wrap">
          <a className="site-title" href="#about">
            Aryan Sharma — Portfolio
          </a>
          <nav aria-label="Primary">
            <ul className="visible-links">
              {navLinks.map((link) => (
                <li key={link.href} className="masthead__menu-item">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" role="main">
        <aside className="sidebar sticky" aria-label="Profile">
          <div className="author-card" itemScope itemType="http://schema.org/Person">
            <div className="author__avatar">
              <img src={profileImage} alt="Aryan Sharma" />
            </div>
            <div className="author__content">
              <h3 className="author__name" itemProp="name">
                Aryan Sharma
              </h3>
              <p className="author__bio" itemProp="jobTitle">
                LLM Research Engineer &amp; CS Graduate Student
              </p>
            </div>
            <div className="author__urls-wrapper">
              <button
                type="button"
                className="btn btn--inverse"
                onClick={() => setShowContacts((prev) => !prev)}
                aria-expanded={showContacts}
              >
                {showContacts ? 'Hide details' : 'Show details'}
              </button>
              <ul className={`author__urls social-icons ${showContacts ? 'is-open' : ''}`}>
                {contactItems.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Icon aria-hidden="true" />
                    {href ? (
                      <a href={href}>{label}</a>
                    ) : (
                      <span>{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <article className="page" itemScope itemType="http://schema.org/CreativeWork">
          <header id="about">
            <h1 className="page__title" itemProp="headline">
              Aryan Sharma
            </h1>
            <p className="page__subtitle">
              Building AI research assistants, multimodal experiences, and developer tools that make machine learning practical.
            </p>
          </header>

          <section className="page__content" itemProp="text">
            <div className="section-block" aria-labelledby="about-heading">
              <h2 id="about-heading" className="section-title">
                About
              </h2>
              {summary.map((copy) => (
                <p key={copy}>{copy}</p>
              ))}
            </div>

            <div className="section-block" id="experience" aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="section-title">
                Experience
              </h2>
              {experiences.map((job) => (
                <section key={job.organisation} className="experience-item">
                  <header className="experience-header">
                    <div>
                      <h3 className="item-title">{job.role}</h3>
                      <p className="item-subtitle">{job.organisation}</p>
                    </div>
                    <p className="item-meta">{job.timeframe}</p>
                  </header>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="section-block" id="projects" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="section-title">
                Projects
              </h2>

              {activeCategory ? (
                <section
                  className="project-detail"
                  id={`projects-${activeCategoryId ?? 'detail'}`}
                >
                  <div className="project-detail__header">
                    <button
                      type="button"
                      className="back-button"
                      onClick={handleBackToCategories}
                    >
                      ← All domains
                    </button>
                    <h3 className="project-detail__title">{activeCategory.name}</h3>
                  </div>
                  <div className="project-grid project-grid--detail">
                    {activeCategory.projects.map((project) => (
                      <article key={project.name} className="project-card">
                        <div className="project-card__header">
                          <h4 className="item-title">{project.name}</h4>
                          {project.focus && <span className="project-tag">{project.focus}</span>}
                        </div>
                        <ul>
                          {project.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>
              ) : (
                <>
                  <p className="project-intro">
                    Select a domain to browse the detailed project list.
                  </p>
                  <div className="project-tabs">
                  {projectCategories.map((category) => {
                    const slug = slugify(category.name)
                    return (
                      <button
                        key={category.name}
                        type="button"
                        className="project-tab"
                        onClick={() => handleCategorySelect(slug)}
                      >
                        <h3>{category.name}</h3>
                        <p>{category.projects.length} projects</p>
                      </button>
                    )
                  })}
                  </div>
                </>
              )}
            </div>

            <div className="section-block" id="skills" aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="section-title">
                Skills Snapshot
              </h2>
              <div className="skills-grid">
                {skills.map((group) => (
                  <section key={group.category} className="skill-card">
                    <h3 className="item-title">{group.category}</h3>
                    <ul>
                      {group.items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>

            <div className="section-block" id="education" aria-labelledby="education-heading">
              <h2 id="education-heading" className="section-title">
                Education
              </h2>
              {education.map((entry) => (
                <section key={entry.institution} className="education-item">
                  <header className="experience-header">
                    <div>
                      <h3 className="item-title">{entry.credential}</h3>
                      <p className="item-subtitle">{entry.institution}</p>
                    </div>
                    <p className="item-meta">{entry.timeframe}</p>
                  </header>
                  <ul>
                    {entry.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="section-block" aria-labelledby="quick-links-heading">
              <h2 id="quick-links-heading" className="section-title">
                Quick Links
              </h2>
              <div className="quick-links">
                {quickLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} className="quick-link icon-link">
                    <Icon aria-hidden="true" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>

      <div className="page__footer">
        <footer>
          <a href="/Resume.pdf">Résumé (PDF)</a>
          <div className="page__footer-follow">
            <span className="follow-label">Connect:</span>
            <ul className="social-icons footer-icons">
              {footerSocial.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href}>
                    <Icon aria-hidden="true" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="page__footer-copy">
            &copy; {new Date().getFullYear()} Aryan Sharma. Crafted with Vite &amp; React.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
