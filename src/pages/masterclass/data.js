// data.js
export const events = [
  {
    id: 1,
    name: "Advanced System Architecture 2024",
    path: "advanced-system-architecture",
    poster:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    type: "Online",
    privacy: "Public",
    host: "Sarah Drasner",
    dateTime: "Oct 24, 10:00 AM",
    pricing: "Free",
    attendees: 1240,

    shortDescription:
      "A deep technical exploration of modern distributed system design and scalability patterns.",

    detailedOverview:
      "This session dives into how large-scale systems are designed, deployed, and scaled in production. You’ll explore real-world architectural decisions around microservices, load balancing, fault tolerance, and system observability. The focus is on practical trade-offs rather than theory, backed by real production examples.",

    topics: [
      {
        title: "Distributed Systems Fundamentals",
        subTopics: [
          "CAP theorem in practice",
          "Stateful vs stateless services",
          "Event-driven architectures",
        ],
      },
      {
        title: "Scalability & Reliability",
        subTopics: [
          "Horizontal vs vertical scaling",
          "Load balancing strategies",
          "Circuit breakers and retries",
        ],
      },
      {
        title: "Observability",
        subTopics: [
          "Metrics, logs, and traces",
          "Monitoring distributed failures",
          "SLOs and SLAs",
        ],
      },
    ],

    agenda: [
      { title: "Introduction & context setting", duration: "10 min" },
      { title: "Core architecture concepts", duration: "45 min" },
      { title: "Real-world case study", duration: "20 min" },
      { title: "Live Q&A", duration: "15 min" },
    ],

    targetAudience: {
      stage: "Mid to Senior level",
      industry: ["Software Engineering", "Platform Engineering", "Cloud"],
    },

    prerequisites:
      "Basic understanding of backend development and cloud infrastructure is recommended.",
  },

  {
    id: 2,
    name: "Product Design Masterclass",
    path: "product-design-masterclass",
    poster:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    type: "Hybrid",
    privacy: "Private",
    host: "Gary Simon",
    dateTime: "Nov 02, 02:30 PM",
    pricing: "$49.00",
    attendees: 850,

    shortDescription:
      "A practical masterclass on designing intuitive, accessible, and conversion-focused products.",

    detailedOverview:
      "This masterclass focuses on real-world product design workflows used by top design teams. You’ll learn how to think in systems, design for accessibility, and translate business goals into usable interfaces. The session balances theory with hands-on design critique and examples.",

    topics: [
      {
        title: "Design Foundations",
        subTopics: [
          "Visual hierarchy",
          "Typography systems",
          "Color and contrast",
        ],
      },
      {
        title: "Accessibility & UX",
        subTopics: [
          "WCAG fundamentals",
          "Designing for inclusivity",
          "Usability testing",
        ],
      },
      {
        title: "Modern UI Frameworks",
        subTopics: [
          "Design systems",
          "Component-driven design",
          "Figma workflows",
        ],
      },
    ],

    agenda: [
      { title: "Design fundamentals recap", duration: "15 min" },
      { title: "Core design principles", duration: "45 min" },
      { title: "Live design walkthrough", duration: "30 min" },
      { title: "Q&A and critique", duration: "20 min" },
    ],

    targetAudience: {
      stage: "Junior to Mid level",
      industry: ["UI/UX Design", "Product Management", "Frontend Development"],
    },

    prerequisites:
      "Basic familiarity with design tools like Figma is helpful but not mandatory.",
  },

  {
    id: 3,
    name: "The DevOps Blueprint",
    path: "devops-blueprint",
    poster:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800",
    type: "Online",
    privacy: "Public",
    host: "Kelsey Hightower",
    dateTime: "Nov 15, 09:00 AM",
    pricing: "$99.00",
    attendees: 3200,

    shortDescription:
      "A complete guide to building, deploying, and operating modern cloud-native systems.",

    detailedOverview:
      "This workshop walks through the full DevOps lifecycle, from local development to production-grade infrastructure. You’ll understand how containers, orchestration, and CI/CD pipelines work together, and how to avoid common pitfalls teams face when scaling DevOps practices.",

    topics: [
      {
        title: "Containers & Orchestration",
        subTopics: [
          "Docker fundamentals",
          "Kubernetes architecture",
          "Helm basics",
        ],
      },
      {
        title: "CI/CD Pipelines",
        subTopics: [
          "Pipeline design",
          "Automated testing",
          "Deployment strategies",
        ],
      },
      {
        title: "Production Operations",
        subTopics: [
          "Monitoring and alerts",
          "Incident response",
          "Cost optimization",
        ],
      },
    ],

    agenda: [
      { title: "DevOps mindset & overview", duration: "10 min" },
      { title: "Core DevOps tooling", duration: "50 min" },
      { title: "Live pipeline demo", duration: "30 min" },
      { title: "Open Q&A", duration: "20 min" },
    ],

    targetAudience: {
      stage: "Mid to Senior level",
      industry: ["DevOps", "Cloud Engineering", "SRE"],
    },

    prerequisites:
      "Working knowledge of Linux, Git, and basic cloud services is recommended.",
  },

  {
    id: 4,
    name: "AI & Machine Learning Ethics",
    path: "ai-ml-ethics",
    poster:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    type: "Offline",
    privacy: "Public",
    host: "Dr. Aris Noble",
    dateTime: "Dec 05, 01:00 PM",
    pricing: "Free",
    attendees: 450,

    shortDescription:
      "A thoughtful discussion on the ethical challenges introduced by AI and LLMs.",

    detailedOverview:
      "As AI systems become more powerful, ethical decision-making becomes critical. This session examines bias, transparency, accountability, and regulation in modern AI systems, with a focus on real-world consequences and responsible deployment.",

    topics: [
      {
        title: "Ethical Foundations",
        subTopics: [
          "Bias and fairness",
          "Explainability",
          "Data responsibility",
        ],
      },
      {
        title: "LLMs in Production",
        subTopics: ["Hallucinations", "Model alignment", "Human oversight"],
      },
      {
        title: "Policy & Governance",
        subTopics: [
          "AI regulation",
          "Compliance challenges",
          "Future frameworks",
        ],
      },
    ],

    agenda: [
      { title: "Ethics overview", duration: "15 min" },
      { title: "Core ethical challenges", duration: "40 min" },
      { title: "Case discussions", duration: "25 min" },
      { title: "Audience Q&A", duration: "20 min" },
    ],

    targetAudience: {
      stage: "All levels",
      industry: ["AI", "Data Science", "Policy", "Product"],
    },

    prerequisites:
      "No technical background required. Open to anyone interested in AI responsibility.",
  },

  {
    id: 5,
    name: "Fullstack Next.js 14 Workshop",
    path: "fullstack-nextjs-workshop",
    poster:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    type: "Online",
    privacy: "Private",
    host: "Lee Robinson",
    dateTime: "Dec 12, 04:00 PM",
    pricing: "$120.00",
    attendees: 2100,

    shortDescription:
      "Hands-on workshop for building scalable apps using Next.js 14 and modern patterns.",

    detailedOverview:
      "This workshop focuses on building real production-ready applications using the latest Next.js features. You’ll work through routing, data fetching, server actions, and performance optimizations with clear guidance on best practices.",

    topics: [
      {
        title: "Next.js Core",
        subTopics: ["App Router", "Server Components", "Server Actions"],
      },
      {
        title: "Performance",
        subTopics: ["Caching strategies", "Streaming", "Edge rendering"],
      },
      {
        title: "Production Readiness",
        subTopics: ["Auth patterns", "Error handling", "Deployment"],
      },
    ],

    agenda: [
      { title: "Project setup", duration: "15 min" },
      { title: "Core feature implementation", duration: "60 min" },
      { title: "Optimization techniques", duration: "25 min" },
      { title: "Live Q&A", duration: "20 min" },
    ],

    targetAudience: {
      stage: "Junior to Mid level",
      industry: ["Frontend", "Fullstack", "Web Development"],
    },

    prerequisites: "Comfortable with React and basic JavaScript concepts.",
  },

  {
    id: 6,
    name: "Venture Capital Fundamentals",
    path: "vc-fundamentals",
    poster:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    type: "Hybrid",
    privacy: "Public",
    host: "Naval Ravikant",
    dateTime: "Jan 10, 11:00 AM",
    pricing: "Free",
    attendees: 5600,

    shortDescription:
      "An insider’s guide to venture capital, startups, and long-term value creation.",

    detailedOverview:
      "This session breaks down how venture capital works from both founder and investor perspectives. You’ll learn how funding rounds operate, how investors evaluate startups, and what long-term value creation really means.",

    topics: [
      {
        title: "VC Basics",
        subTopics: ["How VC funds work", "Investment cycles", "Risk vs reward"],
      },
      {
        title: "Fundraising",
        subTopics: ["Pitch decks", "Valuations", "Term sheets"],
      },
      {
        title: "Founder Mindset",
        subTopics: [
          "Long-term thinking",
          "Ownership and leverage",
          "Building durable companies",
        ],
      },
    ],

    agenda: [
      { title: "Introduction to VC", duration: "15 min" },
      { title: "Fundraising mechanics", duration: "40 min" },
      { title: "Founder case studies", duration: "30 min" },
      { title: "Open Q&A", duration: "20 min" },
    ],

    targetAudience: {
      stage: "Early to Growth stage",
      industry: ["Startups", "Entrepreneurship", "Investing"],
    },

    prerequisites: "No prior investment knowledge required.",
  },
];
