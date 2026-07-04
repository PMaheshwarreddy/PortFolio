export const portfolio = {
  profile: {
    name: 'Panduga Maheswar Reddy',
    shortName: 'PMR',
    role: 'AI/GenAI Engineer',
    location: 'Trivandrum, India',
    email: 'panduga.maheswarreddy12@gmail.com',
    phone: '+91 83748 49909',
    image: '/assets/profile-cutout-ai.png',
    originalImage: '/assets/profile-original.jpeg',
    summary:
      'AI/GenAI Engineer specialized in building production-grade intelligence systems, fine-tuned LLMs, robust RAG pipelines, and scalable full-stack enterprise applications.',
    availability: 'Available for AI/ML roles and GenAI engagements',
  },
  stats: [
    { value: '95.23%', label: 'complaint classification accuracy' },
    { value: '4x', label: 'faster CUDA training speed' },
    { value: '500+', label: 'coding problems solved' },
    { value: '15+', label: 'shipped AI/ML projects' },
  ],
  projects: [
    {
      category: 'Civic AI / LLM Classification',
      title: 'Next-Gen Governance',
      description:
        'Complaint management platform for urban and rural governance. Fine-tuned LLaMA 3.1, custom LLM flows, and BERT classifiers to prioritize citizen issues with 95.23% classification accuracy. Leveraged CUDA GPUs for 4x faster training and built React-based real-time tracking interface.',
      metrics: ['95.23% accuracy', '4x CUDA speed'],
      tech: ['LLaMA 3.1', 'BERT', 'Python', 'React', 'CUDA', 'FastAPI'],
    },
    {
      category: 'Speech AI / Real-time NLP',
      title: 'Multi-Lingual Audio Translation',
      description:
        'Real-time ASR to NLU to translation pipeline across 15+ languages and dialects with Dockerized FastAPI microservices, health check metrics, speech recognition, and Streamlit-based interactive demo.',
      metrics: ['82.63 BLEU', '<1.5s latency'],
      tech: ['LLaMA 3.1', 'FastAPI', 'Streamlit', 'Docker', 'Python', 'NLP'],
    },
    {
      category: 'Knowledge Graph / Disaster Response',
      title: 'Flood Emergency Knowledge Graph',
      description:
        'Ontology-driven emergency knowledge graph that turns unstructured reports, news, and social content into queryable Neo4j intelligence using LoRA-assisted extraction and custom Q&A pipelines.',
      metrics: ['Neo4j engine', 'LoRA extraction'],
      tech: ['Neo4j', 'Python', 'LLMs', 'LoRA', 'NLP'],
    },
    {
      category: 'Full Stack / Role-based Workflows',
      title: 'Campus-Concern',
      description:
        'Complaint workflow platform with Admin, Technician, Verifier, and User roles. Developed secure APIs, MongoDB data modeling, authentication, and responsive React + Vite frontend, reducing response latency by 30%.',
      metrics: ['30% lower latency', '4 role tiers'],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Vite', 'Axios'],
    },
    {
      category: 'Full Stack / API Operations',
      title: 'Splitr',
      description:
        'Expense splitting platform enabling group creation, balance calculation, secure authentication, event-driven workflows, and database operations using Convex queries and Next.js.',
      metrics: ['Convex DB', 'Event-driven'],
      tech: ['React', 'Next.js', 'Convex', 'Clerk', 'Inngest', 'CSS'],
    },
    {
      category: 'Data Science / Regression',
      title: 'Food Delivery Time Prediction',
      description:
        'XGBoost regression model with feature engineering to predict food delivery times. Built a Streamlit app for real-time ETA predictions and model evaluation.',
      metrics: ['0.82 R2 score', 'Streamlit ETA'],
      tech: ['XGBoost', 'Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
    },
    {
      category: 'Data Science / Regression',
      title: 'Restaurant Ratings Analysis',
      description:
        'Exploratory data analysis and feature engineering on restaurant datasets to uncover dining trends and preferences. Built Random Forest and XGBoost predictive models and Power BI dashboard.',
      metrics: ['Random Forest', 'XGBoost', 'Power BI'],
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Power BI', 'SQL'],
    },
    {
      category: 'Analytics / Business Intelligence',
      title: 'Workforce Analytics',
      description:
        'Power BI dashboard suite surfacing employee attrition patterns across demographics, roles, and departments to derive actionable HR strategies.',
      metrics: ['16.2% attrition insights'],
      tech: ['Power BI', 'DAX', 'Excel', 'Power Query'],
    },
    {
      category: 'Full Stack / Microservices',
      title: 'Retail Management Platform',
      description:
        'Deployed inventory and billing management system with Docker, JUnit, Selenium, and CI/CD pipelines, improving operational efficiency by 35%.',
      metrics: ['35% efficiency', '90%+ code coverage'],
      tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'JUnit', 'Selenium', 'CI/CD'],
    },
  ],
  /* stack: [
     ['Languages', ['Python', 'SQL', 'Java', 'C', 'C++', 'R', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']],
     ['LLM & GenAI', ['Generative AI', 'LLaMA 3.1', 'BERT', 'Text Classification', 'Sentiment Analysis', 'RAG', 'Agentic AI', 'LangChain', 'Prompt Engineering', 'LoRA', 'Vertex AI', 'Gemini']],
     ['AI / ML Frameworks', ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'OpenCV', 'CUDA', 'NLP']],
     ['Backend & Databases', ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST APIs', 'Microservices', 'Spring Boot', 'Convex', 'MongoDB', 'MySQL', 'Neo4j', 'Redis', 'NoSQL', 'Firestore']],
     ['Testing & QA', ['Selenium', 'JUnit', 'Postman', 'Usability Testing']],
     ['Cloud & DevOps', ['GCP', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'Git', 'GitHub Actions', 'WebSockets', 'JIRA', 'Trello', 'Notion']],
   ],
 
   */

  stack: [
    ['Languages', [
      'Python', 'Java', 'JavaScript', 'SQL', 'C', 'C++', 'C#',
      'Tailwind CSS', 'Bootstrap'
    ]],

    ['AI, GenAI & Agentic AI', [
      'Generative AI',
      'Agentic AI',
      'Large Language Models (LLMs)',
      'Prompt Engineering',
      'RAG',
      'MCP',
      'LangChain',
      'CLosed Models',
      'Open Source Models',
      'Vector Databases',
      'Gemini',
      'Vertex AI',
      'LoRA Fine-tuning',
      'Embeddings',
      'Transformers',
      'Text Classification',
      'Sentiment Analysis',
      'Knowledge Graphs',
      'Neo4j',
      'AI Workflow Automation'
    ]],

    ['Machine Learning', [
      'Scikit-learn',
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Plotly',
      'CUDA',
      'NLP',
      'Feature Engineering',
      'Model Evaluation',
      'Regression',
      'Classification',
      'Clustering'
    ]],

    ['Backend & Databases', [
      'FastAPI',
      'Flask',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Microservices',
      'Spring Boot',
      'Convex',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Redis',
      'Firestore',
      'Neo4j',
      'NoSQL',
      'Schema Design',
      'Query Optimization'
    ]],

    ['Frontend', [
      'React',
      'Flutter',
      'Next.js',
      'Angular',
      'Axios',
      'Streamlit'
    ]],

    ['Cloud, DevOps & Tools', [
      'Google Cloud Platform (GCP)',
      'Vertex AI',
      'Cloud Run',
      'Artifact Registry',
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'Git',
      'GitHub',
      'GitHub Actions',
      'CI/CD',
      'Linux',
      'WebSockets',
      'REST API Integration'
    ]],

    ['Testing & Collaboration', [
      'Selenium',
      'JUnit',
      'Postman',
      'Usability Testing',
      'Agile',
      'Scrum',
      'SDLC',
      'SOLID Principles',
      'Clean Architecture',
      'JIRA',
      'Confluence',
      'Trello',
      'Notion'
    ]],

    ['Data Analytics & BI', [
      'Power BI',
      'Power Query',
      'DAX',
      'Excel',
      'Pandas',
      'NumPy',
      'Data Cleaning',
      'EDA',
      'Data Visualization'
    ]]
  ],


  experience: [
    {
      period: 'March 2026 - Present / Trivandrum',
      title: 'Junior Software Engineer - AI',
      org: 'Klystron Global',
      bullets: [
        'Developed and maintained enterprise-grade AI/GenAI solutions for OCR, intelligent document processing, and automated data extraction using Gemini models, Vertex AI, FastAPI, Flask, and GCP services.',
        'Built and optimized multi-tenant AI backoffice workflows integrating OCR pipelines, LLM-based extraction, validation, and analytics, improving processing efficiency and reducing manual verification effort.',
        'Worked on production deployment and cloud infrastructure using Docker, Cloud Run, Artifact Registry, Firestore, Redis, and CI/CD pipelines, while implementing secure API management, monitoring, and scalable backend architectures on GCP.',
      ],
    },
    {
      period: 'November 2022 - May 2026 / Kottayam',
      title: 'B.Tech, Computer Science & Engineering',
      org: 'Indian Institute of Information Technology Kottayam',
      bullets: [
        'Qualified for Smart India Hackathon at college level while leading a technical team.',
        'Completed professional certification in Data Science and Machine Learning.',
        'Solved 400+ coding problems across platforms including LeetCode.',
      ],
    },
  ],
};


