// Single source of truth for all portfolio content (based on the Aug 2026 résumé).
// Edit ONLY this file. `npm run sync-data` (also run automatically before
// `npm run dev` / `npm run build` in the frontend) copies it to frontend/src/data.js.

export const portfolio = {
  profile: {
    name: 'Panduga Maheswar Reddy',
    firstName: 'Mahesh',
    shortName: 'PMR',
    role: 'AI/GenAI Engineer',
    currentPosition: 'Junior Software Engineer – AI',
    currentCompany: 'Klystron Global',
    location: 'Trivandrum, India',
    hometown: 'Kurnool, Andhra Pradesh',
    email: 'panduga.maheswarreddy12@gmail.com',
    phone: '+91 83748 49909',
    image: '/img/portrait.webp',
    summary:
      'AI/GenAI engineer at Klystron Global who builds intelligent automation, AI-driven workflows and scalable backend systems, with hands-on experience fine-tuning LLMs such as LLaMA 3.1, building RAG and agentic AI applications, and shipping full-stack products.',
    // First-person line for the top of the page
    headline:
      'I build intelligent automation, AI-driven workflows and scalable backend systems, and I have fine-tuned LLMs like LLaMA 3.1 to solve real-world problems.',
    about: [
      'I am a Junior Software Engineer – AI at Klystron Global in Trivandrum. I design and deliver enterprise software: intelligent automation, AI-driven workflows and scalable backends that streamline business operations and cut manual effort.',
      'I also work on the architecture of production platforms, building secure integrations, improving performance and making workflows reliable across several business domains, together with cross-functional teams.',
      'I studied Computer Science at IIIT Kottayam (2022–2026). There I fine-tuned LLaMA 3.1 to classify civic complaints, built a real-time multilingual audio translator, and modelled flood-emergency data as a Neo4j knowledge graph.',
    ],
    availability: 'Ready to collaborate',
    socials: {
      github: 'https://github.com/PMaheshwarreddy',
      linkedin: 'https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286',
      instagram: 'https://www.instagram.com/maheswar_reddy_12',
      twitter: 'https://x.com/PMaheswar43013',
    },
  },

  stats: [
    { value: '95.23%', label: 'complaint classification accuracy with fine-tuned LLaMA 3.1' },
    { value: '4×', label: 'faster model training with CUDA' },
    { value: '82.63', label: 'BLEU score across 15+ languages' },
    { value: '30%', label: 'lower API latency in Campus-Concern' },
  ],

  projects: [
    {
      category: 'Civic AI · LLM Classification',
      title: 'Next-Gen Governance',
      description:
        'An LLM-powered complaint management system for urban and rural governance. It classifies and prioritises citizen issues using fine-tuned LLaMA 3.1, custom LLMs and BERT with 95.23% accuracy. Training runs 4× faster on CUDA, inference is exposed through REST APIs built with a modular SOLID architecture, and the system is covered by unit and integration tests, logging and documented, reusable AI workflows.',
      metrics: ['95.23% accuracy', '4× faster training'],
      tech: ['LLaMA 3.1', 'BERT', 'Python', 'CUDA', 'REST APIs', 'React', 'JavaScript', 'CSS'],
      github: 'https://github.com/PMaheshwarreddy/LocalGovernance-Issue-Resolver',
    },
    {
      category: 'Speech AI · Real-time NLP',
      title: 'Multi-Lingual Audio Translation',
      description:
        'A real-time multilingual audio translation system built on LLaMA 3.1 that supports 15+ languages and dialects. It combines speech recognition, sentiment analysis and text generation, uses LLMs fine-tuned on diverse corpora, and comes with a Streamlit demo that translates in under 1.5 seconds on average.',
      metrics: ['82.63 BLEU', '0.81 COMET', '<1.5s latency'],
      tech: ['LLaMA 3.1', 'Python', 'NLP', 'Streamlit', 'Data Pre-processing'],
      github: 'https://github.com/PMaheshwarreddy/-Language-Translation-using-Llama-Model',
    },
    {
      category: 'Knowledge Graph · Disaster Response',
      title: 'Flood Emergency Knowledge Graph',
      description:
        'A domain-specific knowledge graph that turns large volumes of unstructured flood data (news, reports and social media) into structured knowledge. It uses a custom flood ontology and a Neo4j graph, with LoRA fine-tuned LLMs pulling out the facts automatically to power flood analytics and Q&A.',
      metrics: ['Custom flood ontology', 'LoRA fine-tuning'],
      tech: ['Neo4j', 'LLMs', 'LoRA', 'Python', 'NLP'],
      github: 'https://github.com/PMaheshwarreddy/Flood-Emergency-Information-Knowledge-Graph',
    },
    {
      category: 'Full Stack · Role-based Workflows',
      title: 'Campus-Concern',
      description:
        'A full-stack complaint management system with role-based workflows for Admins, Technicians, Verifiers and Users, covering secure registration, tracking and resolution of complaints. Secure authentication, optimised MongoDB-backed APIs and a responsive React + Vite frontend cut response latency by 30%.',
      metrics: ['30% lower latency', '4 user roles'],
      tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Axios'],
      github: 'https://github.com/PMaheshwarreddy/Campus_concern',
    },
    {
      category: 'Full Stack · Event-driven',
      title: 'Splitr',
      description:
        'An expense splitting platform with group creation, balance calculation and settlements, secure sign-in and event-driven background workflows, built with Next.js and Convex.',
      metrics: ['Live on the web', 'Real-time sync'],
      tech: ['Next.js', 'React', 'Convex', 'Clerk', 'Inngest'],
      github: 'https://github.com/PMaheshwarreddy/Splitr-Expense-Splitting-Settlement-Platform',
      live: 'https://splitr-mocha.vercel.app/',
    },
    {
      category: 'Data Science · Regression',
      title: 'Food Delivery Time Prediction',
      description:
        'An XGBoost regression model with engineered features that predicts food delivery times, served through a Streamlit app for real-time ETA predictions and model evaluation.',
      metrics: ['0.82 R² score', 'Real-time ETA app'],
      tech: ['XGBoost', 'Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
      github: 'https://github.com/PMaheshwarreddy/Food-Delivery-Time-Prediction',
    },
    {
      category: 'Data Analytics · Business Intelligence',
      title: 'Restaurant Ratings Analysis',
      description:
        'A Power BI case study of real restaurant ratings from consumers in Mexico. It covers data modelling (with an ER diagram), data cleaning and analysis of consumer preferences, cuisines and restaurant features across four cities, presented in an interactive dashboard.',
      metrics: ['Interactive Power BI dashboard', '4 cities analysed'],
      tech: ['Power BI', 'Data Modelling', 'Data Cleaning', 'Data Visualization'],
      github: 'https://github.com/PMaheshwarreddy/Restaurant-Ratings-Analysis-',
    },
  ],

  // Exactly the skill groups on the résumé
  stack: [
    ['Languages', ['Python', 'Java', 'C', 'C++', 'SQL']],
    ['AI & LLMs', [
      'Generative AI', 'Open & Proprietary LLMs', 'Prompt Engineering', 'Retrieval-Augmented Generation (RAG)',
      'Agentic AI', 'AI Agents', 'LangChain', 'LangGraph', 'LangSmith', 'MCP', 'NLP', 'Transformers',
      'Model Fine-tuning', 'Text Classification', 'Sentiment Analysis',
    ]],
    ['Machine Learning', [
      'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'CUDA', 'Supervised & Unsupervised Learning',
      'Model Evaluation', 'Hyperparameter Tuning',
    ]],
    ['Backend & Frameworks', ['FastAPI', 'Node.js', 'Express.js', 'React.js', 'Flutter', 'REST APIs', 'Microservices']],
    ['Databases & Storage', ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'ChromaDB', 'Neo4j']],
    ['Cloud & DevOps', [
      'GCP', 'Vertex AI', 'AWS', 'Azure', 'Docker', 'Git', 'GitHub Actions (CI/CD)', 'Linux',
      'WebSockets', 'API Integration', 'Streamlit',
    ]],
  ],

  experience: [
    {
      period: 'Mar 2026 – Present · Trivandrum',
      title: 'Junior Software Engineer – AI',
      org: 'Klystron Global',
      // Not shown on the site: lets the assistant answer "what tech do you use at work?"
      // (tools listed on Mahesh's earlier résumé for this role)
      stack: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'Gemini', 'Vertex AI', 'Google Cloud (GCP)', 'Cloud Run', 'Artifact Registry', 'Firestore', 'Redis', 'Docker', 'CI/CD pipelines', 'Git'],
      bullets: [
        'Design and deliver enterprise software solutions, building intelligent automation, AI-driven workflows and scalable backend systems that streamline business operations and reduce manual effort.',
        'Contribute to the architecture and improvement of production platforms by developing secure integrations, optimising system performance and implementing reliable workflows across multiple business domains.',
        'Work with cross-functional teams to deliver high-quality features, troubleshoot production issues and support the deployment of scalable applications with a focus on reliability and security.',
      ],
    },
    {
      period: 'Nov 2022 – May 2026 · Kottayam',
      title: 'B.Tech, Computer Science & Engineering',
      org: 'Indian Institute of Information Technology Kottayam',
      bullets: [
        'Built LLM, speech and knowledge-graph projects end to end, from data preparation to working demos.',
        'Led a team that qualified for the Smart India Hackathon at college level.',
      ],
    },
  ],

  achievements: [
    { title: 'Smart India Hackathon', text: 'Led a team that qualified for SIH at college level, showing leadership, teamwork and problem-solving.' },
    { title: 'Data Science & ML Certificate', text: 'Earned a professional certificate in Data Science and Machine Learning.' },
    { title: 'End-to-end ownership', text: 'Delivered several software and AI solutions independently, from design to working, real-world applications.' },
    { title: 'Competitive programming', text: 'Regular practice on competitive programming platforms, building strong analytical thinking and algorithmic reasoning.' },
  ],
};
