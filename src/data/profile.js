/* ============================================================
   PROFILE DATA — single source of truth.
   Reconciled against Sohan's role-specific résumés (public/*.pdf)
   + the real project repos on github.com/sohanreddyk.
   Where sources disagree, the résumé numbers win.
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

  // Résumé PDF: lives in /public. The hero button opens this file.
  resumeUrl: "/SDE.pdf",

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
  "TypeScript",
  "Distributed Systems",
  "Kafka",
  "Kubernetes",
  "LLM Infrastructure",
  "AWS",
  "RAG",
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
      "(GPA 3.9, graduating May 2027), focused on backend engineering, " +
      "distributed systems, cloud infrastructure, and applied AI.",
    "I build systems that are meant to be operated: Kafka pipelines with " +
      "idempotent processing and dead-letter queues, LLM gateways with " +
      "semantic caching and failover, and AWS pipelines where a human signs " +
      "off on every AI finding. I'm also a published researcher: my IEEE " +
      "paper introduces an interpretable, quantum-based 2Q-learning approach " +
      "for detecting DDoS attacks in fog computing.",
  ],
  // Categorized to mirror the résumé's Technical Skills section.
  skills: [
    {
      label: "Languages",
      items: ["Go", "Python", "TypeScript", "Java", "C++", "JavaScript", "SQL"],
    },
    {
      label: "Backend & Distributed",
      items: [
        "Node.js",
        "NestJS",
        "FastAPI",
        "Kafka",
        "RabbitMQ",
        "Celery",
        "REST APIs",
        "WebSockets",
        "Concurrency",
      ],
    },
    {
      label: "AI & ML",
      items: [
        "LLMs",
        "RAG",
        "Amazon Bedrock",
        "Pinecone",
        "pgvector",
        "PyTorch",
        "scikit-learn",
        "LightGBM",
        "MLflow",
      ],
    },
    {
      label: "Cloud & DevOps",
      items: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Prometheus",
        "Grafana",
        "GitHub Actions",
        "Linux",
      ],
    },
    {
      label: "Data & Frontend",
      items: ["PostgreSQL", "Redis", "MongoDB", "React", "Next.js", "TailwindCSS"],
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
  { value: 61, suffix: "×", label: "Event-processing throughput gain (Insight, 46 → 2,816 events/sec)" },
  { value: 85, suffix: "%", label: "Semantic-cache hit rate (Harbor, benchmark workload)" },
  { value: 95, suffix: "%", label: "DDoS detection accuracy (IEEE research)" },
  { value: 1, suffix: "", label: "IEEE peer-reviewed publication" },
];

/* --- Experience (matches résumé's Work Experience) --- */
export const experience = [
  {
    company: "Siemens (Stack Lane team)",
    role: "Software Engineer Intern",
    period: "Aug 2024 — Jul 2025",
    where: "Remote",
    blurb:
      "Built and shipped AI-powered full-stack applications and a RAG chatbot as part of the Stack Lane team.",
    bullets: [
      "Engineered 2 full-stack applications using React, Node.js and PostgreSQL, integrating REST APIs and authentication to serve 2,500+ users.",
      "Improved AI chatbot retrieval relevance by 40% through a Pinecone-backed RAG pipeline, supporting 1,200+ conversations with 850 ms p95 latency.",
      "Led 3 interns through architecture design and API integration, resolving 9 production issues through systematic debugging and service-level testing.",
      "Automated frontend and backend deployments using Docker, Azure, and Vercel CI/CD pipelines, reducing release time by 70%, from 20 to 6 minutes.",
    ],
  },
  {
    company: "Unisys (Vault of Codes team)",
    role: "Software Engineering Intern",
    period: "Apr — Jun 2024",
    where: "Remote",
    blurb:
      "Built a production digital marketplace with real-time messaging as part of the Vault of Codes team.",
    bullets: [
      "Developed a full-stack digital marketplace serving 8,000+ users and processing 1,600+ orders, generating $20K in gross merchandise value.",
      "Increased checkout conversion from 41% to 50% (22% relative improvement) through funnel optimization and one-click checkout, contributing $14K in revenue.",
      "Engineered a real-time messaging system using WebSockets, supporting 350 concurrent connections with sub-150 ms latency and 99.8% message delivery.",
      "Improved mobile conversion by 8% through Lighthouse-guided optimizations, reducing page load time to under 1.2 seconds.",
    ],
  },
  {
    company: "Siddaganga Institute of Technology",
    role: "Research Assistant",
    period: "May 2024 — Jan 2025",
    where: "Tumkur, India",
    blurb:
      "Research on interpretable, quantum-based reinforcement learning for network-attack detection.",
    bullets: [
      "Evaluated a quantum-based 2Q learning approach for DDoS detection across 5 datasets, achieving 95% detection performance.",
      "Improved model convergence by 30% through experimental optimization and comparative evaluation, contributing to a peer-reviewed IEEE publication.",
    ],
  },
];

/* --- Featured projects (large, with pipeline visuals + metric counters) --- */
export const featured = [
  {
    no: "01",
    name: "InspectIQ",
    flag: "AI-Assisted Vehicle Inspection Platform",
    description:
      "A vehicle inspection and condition-report platform for wholesale operations. Inspectors capture required photo evidence on web or mobile; images flow through S3 → SQS → Lambda to Amazon Bedrock, outputs are validated against a strict schema, and a human reviewer must confirm every finding before it enters an auditable report. AI suggests; a human decides.",
    metrics: [
      { value: 95, suffix: "%", label: "schema-valid AI outputs" },
      { value: 92, suffix: "%", label: "test coverage" },
      { value: 108, suffix: "", label: "image regression corpus" },
    ],
    tags: ["React", "TypeScript", "AWS Lambda", "Bedrock", "S3 · SQS", "PostgreSQL", "Terraform"],
    links: {
      github: "https://github.com/sohanreddyk/InspectIQ",
      demo: "https://inspectiq.pages.dev/",
    },
    pipeline: {
      title: "Inspection pipeline",
      nodes: [
        { label: "capture on web / mobile → private S3 upload" },
        { label: "SQS queue → Lambda worker" },
        { label: "Bedrock analysis + strict schema validation", detail: "95% valid", hot: true },
        { label: "reviewer confirms, edits, or rejects" },
        { label: "graded report + full audit trail" },
      ],
    },
  },
  {
    no: "02",
    name: "Insight",
    flag: "Distributed Real-Time Analytics Platform",
    description:
      "A multi-tenant, real-time product-analytics platform — a compact Segment / PostHog. Events flow over HTTP into Kafka, through idempotent stream processing into materialized read models, and out to a live dashboard over SSE. Tenant isolation, a dead-letter queue, OpenTelemetry tracing, and a load-tested 61× throughput optimization.",
    metrics: [
      { value: 61, suffix: "×", label: "throughput gain (46 → 2,816 events/sec)" },
      { value: 41.1, suffix: "K", label: "events in the documented load test" },
      { value: 0, suffix: "", label: "request errors, zero consumer lag" },
    ],
    tags: ["TypeScript", "NestJS", "Kafka", "PostgreSQL", "Redis", "Next.js", "OpenTelemetry"],
    links: {
      github: "https://github.com/sohanreddyk/realtime-analytics-pipeline",
      demo: null,
    },
    pipeline: {
      title: "Event path",
      nodes: [
        { label: "ingestion API · API key · rate limit · idempotency" },
        { label: "Kafka raw-events (keyed by tenant)" },
        { label: "processor", detail: "one Postgres txn", hot: true },
        { label: "read models + Redis pub/sub → SSE dashboard" },
        { label: "DLQ for poison messages · OTel → Jaeger / Grafana" },
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
      { value: 85, suffix: "%", label: "cache-hit rate (benchmark)" },
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
    name: "Homelab Infrastructure",
    description:
      "A self-hosted DevOps lab on KVM/libvirt, defined entirely as code: Terraform, Ansible, k3s, GitLab CI/CD with security scanning, Prometheus/Grafana/Loki with 20+ alert rules, 14 runbooks with a ~2-hour RTO, and a Claude-powered alert-diagnosis bridge into Slack.",
    tags: "Terraform · Kubernetes · Ansible",
    url: "https://github.com/sohanreddyk/homelab-infrastructure",
  },
  {
    no: "05",
    name: "BIXI Demand MLOps",
    description:
      "15-minute demand forecasts for 1,100+ BIXI stations (LightGBM + Optuna, test RMSE 1.035 departures / 1.026 arrivals) with MLflow registry, SHAP/LIME, Evidently drift monitoring, and a CDK-defined AWS pipeline. The AWS runtime is retired; a live Streamlit demo remains.",
    tags: "MLOps · AWS · LightGBM",
    url: "https://github.com/sohanreddyk/bixi-demand-mlops-platform",
  },
  {
    no: "06",
    name: "Warden",
    description:
      "A vulnerability-management orchestrator that aggregates findings from 6 infrastructure scanners plus SAST, SCA, DAST, container and IaC sources, deduplicates per CVE and asset, and ranks 1,000+ vulnerabilities with a 6-factor model (CVSS, CISA KEV, EPSS, SSVC, exploit availability, asset criticality). SLA tracking, Jira and Slack alerts, and a React dashboard cut manual triage time by 60%.",
    tags: "FastAPI · Celery · React",
    url: "https://github.com/sohanreddyk/warden",
  },
  {
    no: "07",
    name: "TaskForge",
    description:
      "A header-only C++17 task queue on Redis: multithreaded workers, priorities, scheduled tasks, at-least-once delivery with stuck-task recovery, plus a Python CLI and Next.js dashboard. 5,000 tasks/sec at 20 ms p95 dispatch and 99.9% completion in failure testing.",
    tags: "C++17 · Redis · Concurrency",
    url: "https://github.com/sohanreddyk/TaskForge",
  },
  {
    no: "08",
    name: "ClaimDesk",
    description:
      "A conversational insurance-claims agent on a four-phase SOP. The LLM interprets and phrases; deterministic code controls verification, data access, and every side effect. 670+ Python tests and a requirements matrix mapping each requirement to its proof. A single-instance demo.",
    tags: "LLM Agents · FastAPI · React",
    url: "https://github.com/sohanreddyk/claimdesk",
  },
  {
    no: "09",
    name: "Helmsman",
    description:
      "A self-hosted, OpenAI-compatible LLM inference gateway in Go — lock-free round-robin load balancing, per-key Redis token-bucket rate limiting, semantic caching, and per-backend circuit breakers on Kubernetes. 594 RPS and 0.2 ms p50 warm, 17× cache speedup.",
    tags: "Go · Redis · Kubernetes",
    url: "https://github.com/sohanreddyk/helmsman",
  },
  {
    no: "10",
    name: "Lumen",
    description:
      "A distributed LLM evaluation platform: 5 pluggable evaluators, Mann-Whitney U regression detection, Celery workers persisting to PostgreSQL, and a live React dashboard with automated quality alerts.",
    tags: "FastAPI · Celery · PostgreSQL",
    url: "https://github.com/sohanreddyk/lumen",
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
    { value: 30, suffix: "%", label: "faster model convergence" },
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
    note: "GPA 3.9 · Seattle, WA · Sep 2025 – May 2027",
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
