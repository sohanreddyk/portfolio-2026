/* ============================================================
   PROFILE DATA — single source of truth.
   Reconciled against Sohan's SWE résumé (Sohan_Kadiri_SWE_Resume.pdf)
   + the real Helmsman / Lumen / ChatFlow repos. All numbers are the
   actual measured values from those projects.
   ============================================================ */

export const profile = {
  name: "Sohan Reddy",
  first: "Sohan",
  last: "Reddy",

  role: "Software Engineer",
  location: "Seattle, WA",
  status: "Available — New Grad 2027",

  tagline: (
    "I build backend and AI systems that run in production — from scalable " +
    "REST APIs and distributed services to RAG-powered LLM features."
  ),

  // Résumé PDF: drop the uploaded file into /public with this exact name,
  // then the button opens it. (Currently expects public/Sohan_Kadiri_SWE_Resume.pdf)
  resumeUrl: "/Sohan_Kadiri_SWE_Resume.pdf",

  socials: {
    github: "https://github.com/sohanreddyk",
    linkedin: "https://www.linkedin.com/in/sohanreddyk/",
    email: "sohanjreddy@outlook.com",
    portfolio: "https://www.sohanreddy.org",
  },
};

/* --- Hero name lines (rendered as masked reveal) --- */
export const heroLines = ["Sohan", "Reddy"];

/* --- Marquee strip --- */
export const marquee = [
  "Go",
  "Python",
  "Distributed Systems",
  "Kubernetes",
  "LLM Infrastructure",
  "AWS",
  "RAG",
  "Backend Engineering",
  "PyTorch",
  "Observability",
];

/* --- About --- */
export const about = {
  lead: (
    "I care about writing clean, well-tested code and designing systems " +
    "that stay reliable under load."
  ),
  body: [
    "I'm an MS Computer Science student at Northeastern University in Seattle " +
      "(AI & Software Engineering, graduating May 2027), focused on backend " +
      "engineering, cloud infrastructure, and applied machine learning.",
    "My graduate work spans distributed systems — multithreaded servers on AWS " +
      "EC2 with RabbitMQ, concurrent data processing in Java, and reinforcement-" +
      "learning simulators in PyTorch. Beyond product work, I'm a published " +
      "researcher: my IEEE paper introduces an interpretable, quantum-based " +
      "2Q-learning approach for detecting DDoS attacks in fog computing.",
  ],
  // Categorized to mirror the résumé's Technical Skills section.
  skills: [
    {
      label: "Languages",
      items: ["Go", "Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
    },
    {
      label: "Backend & Distributed",
      items: [
        "FastAPI",
        "Celery",
        "RabbitMQ",
        "REST APIs",
        "WebSockets",
        "Microservices",
        "Concurrency",
      ],
    },
    {
      label: "AI & ML",
      items: [
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "Pandas",
        "sentence-transformers",
        "LangChain",
        "LLM fine-tuning",
      ],
    },
    {
      label: "Cloud & DevOps",
      items: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "GitHub Actions",
        "Linux",
      ],
    },
    {
      label: "Data & Frontend",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "React", "Next.js", "TailwindCSS"],
    },
  ],
  certifications: [
    "Advanced Data Structures & Algorithms",
    "Cloud Computing Foundations",
    "Introduction to Networks",
    "ML & NLP Bootcamp (MLOps)",
  ],
};

/* --- Impact band (count-up stats) --- */
export const impactStats = [
  { value: 594, suffix: " RPS", label: "Peak gateway throughput (Helmsman, warm cache)" },
  { value: 17, suffix: "×", label: "Latency & throughput gain from semantic caching" },
  { value: 95, suffix: "%", label: "DDoS detection accuracy (IEEE research)" },
  { value: 1, suffix: "", label: "IEEE peer-reviewed publication" },
];

/* --- Experience (matches résumé's Professional Experience) --- */
export const experience = [
  {
    company: "Stack Lane",
    role: "Artificial Intelligence Intern",
    period: "Mar — Jun 2025",
    where: "Bangalore, India",
    blurb:
      "AI engineering intern focused on LLM fine-tuning, retrieval-augmented systems, and production ML pipelines.",
    bullets: [
      "Fine-tuned LLaMA 2 in PyTorch with a custom training pipeline that cut inference and training compute cost by 30%.",
      "Refactored preprocessing scripts, increasing data throughput by 35% and enabling training on datasets twice as large.",
      "Engineered retrieval-augmented generation (RAG) features with a Pinecone vector database and the Mistral LLM API for semantic search and grounded responses.",
      "Led a 3-engineer team building an AI chatbot from prototype to production, owning architecture decisions and integration.",
    ],
  },
  {
    company: "Vault of Codes",
    role: "Web Development Intern",
    period: "May 2024 — Jan 2025",
    where: "Remote",
    blurb: "Full-stack intern building responsive, production-hosted web applications.",
    bullets: [
      "Built a responsive portfolio and e-commerce site with real-time chat and one-click checkout, improving cross-device responsiveness by 30% and lifting conversion 20%.",
      "Optimized page-load performance to under 1.2s across devices via asset optimization and component-level lazy loading.",
    ],
  },
];

/* --- Featured projects (large, with pipeline visuals + metric counters) --- */
export const featured = [
  {
    no: "01",
    name: "Helmsman",
    flag: "Distributed LLM Gateway",
    description:
      "A self-hosted, OpenAI-compatible LLM inference gateway in Go — lock-free round-robin load balancing, per-key Redis token-bucket rate limiting, semantic caching, and per-backend circuit breakers, deployed on Kubernetes with full Prometheus/Grafana observability.",
    metrics: [
      { value: 0.2, suffix: "ms", label: "p50 latency (warm)" },
      { value: 594, suffix: " RPS", label: "throughput (warm)" },
      { value: 17, suffix: "×", label: "cache speedup" },
    ],
    tags: ["Go", "Redis", "Kubernetes", "Prometheus", "Grafana", "Ollama"],
    links: {
      github: "https://github.com/sohanreddyk/helmsman",
      demo: null,
    },
    pipeline: {
      title: "Request path",
      nodes: [
        { label: "auth · rate limit · semaphore" },
        { label: "semantic cache", detail: "cosine ≥ 0.95", hot: true },
        { label: "round-robin load balancer" },
        { label: "circuit breaker + retry" },
        { label: "Ollama backends ×N" },
      ],
    },
  },
  {
    no: "02",
    name: "Lumen",
    flag: "Distributed AI Evaluation Platform",
    description:
      "A distributed platform that scores LLM outputs across 5 pluggable evaluators, detects cross-run regressions with a Mann-Whitney U test, and auto-alerts when pass rate drops below 70% — Celery workers persist to PostgreSQL, surfaced on a live React dashboard.",
    metrics: [
      { value: 5, suffix: "", label: "pluggable evaluators" },
      { value: 6, prefix: "2→", suffix: "", label: "K8s HPA replicas" },
      { value: 70, suffix: "%", label: "auto-alert threshold" },
    ],
    tags: ["FastAPI", "Celery", "PostgreSQL", "Redis", "React", "Kubernetes"],
    links: {
      github: "https://github.com/sohanreddyk/lumen",
      demo: null,
    },
    pipeline: {
      title: "Eval pipeline",
      nodes: [
        { label: "FastAPI → Postgres (run: pending)" },
        { label: "Celery worker → Redis queue" },
        { label: "evaluate", detail: "5 strategies", hot: true },
        { label: "Mann-Whitney U regression check" },
        { label: "alert if pass-rate < 70%" },
      ],
    },
  },
  {
    no: "03",
    name: "Harbor",
    flag: "LLM Reliability Platform",
    description:
      "A self-hosted reliability layer that sits between an app and its LLM provider: an OpenAI-compatible Go gateway with streaming semantic cache, model routing, provider fallback with circuit breaking, and Redis rate limiting, paired with a Python evaluation control plane whose statistical regression gate blocks quality drops in CI — fully observable via Prometheus and Grafana.",
    metrics: [
      { value: 9.5, suffix: "\u00d7", label: "faster on cache hits (p50)" },
      { value: 85, suffix: "%", label: "estimated spend avoided" },
      { value: 100, suffix: "%", label: "served through a provider outage" },
    ],
    tags: ["Go", "FastAPI", "Redis", "pgvector", "Prometheus", "Grafana"],
    links: {
      github: "https://github.com/sohanreddyk/harbor",
      demo: null,
    },
    pipeline: {
      title: "Request path",
      nodes: [
        { label: "RAG app \u2192 Go gateway (SSE)" },
        { label: "rate limit \u2192 route" },
        { label: "semantic cache", detail: "85% hit rate", hot: true },
        { label: "provider fallback + circuit breaker" },
        { label: "Prometheus + Grafana" },
      ],
    },
  },
];

/* --- Other projects (compact index) --- */
export const projectsIndex = [
  {
    no: "04",
    name: "ChatFlow",
    description:
      "A multithreaded Java WebSocket chat server on AWS EC2 with a RabbitMQ topic exchange and channel pooling, tuned to sustain ~131K messages/sec across four load-balanced servers.",
    tags: "Java · RabbitMQ · AWS EC2",
    url: "https://github.com/sohanreddyk/chatflow",
  },
  {
    no: "05",
    name: "Self-Driving Car RL",
    description:
      "A 2D top-down driving simulator in PyTorch with ray-cast sensors, trained with DQN and PPO to learn control policies from scratch.",
    tags: "PyTorch · DQN · PPO",
    url: "https://github.com/sohanreddyk/self-driving-car-rl",
  },
  {
    no: "06",
    name: "Leaf Disease Detection",
    description:
      "A CNN image classifier diagnosing disease in mango and banana leaves at 98.7% accuracy, built as a fast field diagnostic for growers.",
    tags: "Deep Learning · CNN",
    url: "https://github.com/sohanreddyk/leaf-disease-detection",
  },
  {
    no: "07",
    name: "Reddit Sentiment Analysis",
    description:
      "An NLP tool that scrapes Reddit threads and summarizes posts, scores sentiment, and visualizes engagement to cut through the noise.",
    tags: "NLP · Python · AWS",
    url: "https://github.com/sohanreddyk/reddit-analysis",
  },
];

/* --- Research / publication --- */
export const publication = {
  badge: "IEEE · Peer-Reviewed",
  title:
    "Detection of DDoS Attacks in Fog Computing using Interpretable Quantum-based 2Q Learning",
  meta: "3rd IEEE Int'l Conference on Intelligent and Innovative Technologies in Computing, Electrical and Electronics (IITCEE) · Bangalore, India · Jan 16–17, 2025",
  stats: [
    { value: 95, suffix: "%", label: "detection accuracy" },
    { value: 35, suffix: "%", label: "less RL training time" },
    { value: 5, suffix: "", label: "IoT datasets evaluated" },
  ],
  url: "https://ieeexplore.ieee.org/document/10915401",
};

/* --- Education --- */
export const education = [
  {
    years: "2025 — 2027",
    school: "Northeastern University",
    degree: "M.S. Computer Science",
    note: "AI & Software Engineering · Seattle, WA · Sep 2025 – May 2027",
  },
  {
    years: "2021 — 2025",
    school: "Siddaganga Institute of Technology",
    degree: "B.Tech, Artificial Intelligence & Data Science",
    note: "Tumkur, India · Dec 2021 – Jun 2025",
  },
];

export const contact = {
  pre: "What's next",
  blurb:
    "I'm looking for New Grad software engineering roles for 2027 — backend, cloud, distributed systems, and ML/AI systems. Recruiters and engineers building at scale, my inbox is open.",
};
