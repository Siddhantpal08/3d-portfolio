import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    cognifyz,
    html,
    css,
    python,
    mysql,
    c,
    php,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    acmegrade,
    trainity,
    jarvis,
    todo,
    video,
    resume,
    portfolio,
    mytube
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer (React + Tailwind)",
      icon: reactjs,
    },
    {
      title: "Backend Developer (Node.js + Express)",
      icon: backend,
    },
    {
      title: "Database Designer (MongoDB + SQL)",
      icon: mongodb,
    },
    {
      title: "Mobile App Developer (React Native)",
      icon: mobile,
    },
    {
      title: "UI/UX & Prototyping",
      icon: figma,
    },
    {
      title: "Content Creator / Video Editing",
      icon: creator,
    },
    {
      title: "Data Analyst",
      icon: figma
    }
  ];
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL / SQL",
      icon: mysql, 
    },
    {
      name: "Git & GitHub",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Python",
      icon: python, 
    },
    {
      name: "C / C++",
      icon: c, 
    },
    {
      name: "PHP",
      icon: php,
    }
  ];
  
  
  const experiences = [
    {
      title: "Full-stack Developer",
      company_name: "Cognifyz Technologies",
      icon: cognifyz,
      iconBg: "#383E56",
      date: "Jan 2025 - Feb 2025",
      points: [
        "Built and deployed full-stack features for web products using modern JS stacks.",
        "Optimized UI and backend endpoints to improve user experience and performance.",
        "Collaborated with small cross-functional teams to deliver releases on schedule.",
        "Wrote maintainable code and participated in code reviews to raise code quality."
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "Acmegrade",
      icon: acmegrade,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Feb 2024",
      points: [
        "Assisted in developing front-end components and integrating REST APIs.",
        "Helped optimize page load times by applying performance best-practices.",
        "Worked with mentors to learn production workflows and version control.",
        "Contributed to documentation and testing of delivered features."
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Trainity",
      icon: trainity,
      iconBg: "#383E56",
      date: "Dec 2023 - Mar 2024",
      points: [
        "Analyzed sales and user data to surface actionable insights that improved conversions.",
        "Created dashboards/reports to track KPIs and support product decisions.",
        "Applied data-cleaning and exploratory-analysis techniques to large datasets.",
        "Presented findings to stakeholders and recommended data-driven changes."
      ],
    },
  ];
  
  
  // --- Replace testimonials (feedbacks) ---
const testimonials = [
  {
    testimonial:
      "Siddhant turned a rough idea into a lightweight desktop assistant that actually helps our team — thoughtful UI, reliable commands, and great error handling.",
    name: "Arnav Mehra",
    designation: "Product Lead",
    company: "Cognifyz",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "The notepad app Siddhant built for offline use is fast, minimal and exactly what my friend needed. Great attention to detail and usability.",
    name: "Priya Sharma",
    designation: "Freelance Designer",
    company: "Independent",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Siddhant's portfolio and short-screen guides helped me understand video-editing basics quickly — clear explanations and practical tips.",
    name: "Rahul Verma",
    designation: "Content Creator",
    company: "Solo Creator",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    testimonial:
      "Delivery-minded developer — shipped a Next.js portfolio, fixed bugs fast and added a contact form that actually works. Good communicator too.",
    name: "Sneha Gupta",
    designation: "Recruiter",
    company: "TechHire",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

// --- Replace projects ---
const projects = [
  {
    name: "MyJarvis — Desktop Assistant",
    description:
      "A PyQt5-based personal desktop assistant with voice commands, custom status updates, animated UI, and toggles for microphone/control. Built to automate small daily tasks.",
    tags: [
      { name: "python", color: "green-text-gradient" },
      { name: "pyqt5", color: "blue-text-gradient" },
      { name: "voice", color: "pink-text-gradient" },
    ],
    image: jarvis, 
    source_code_link: "https://github.com/Siddhantpal08/MyJarvis",
  },

  {
    name: "MyTube — Video Streaming (YouTube-like)",
    description:
      "A lightweight video streaming web app inspired by YouTube. Features video upload/streaming UI, search, channel profiles, comments, and client-side recommendations. Built with Next.js for routing and SSR, and an S3/local store for videos (demo uses mock/video placeholders).",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "video-streaming", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: mytube,
    source_code_link: "https://github.com/Siddhantpal08/MyTube",
  },

  {
    name: "Offline Notepad (Tauri + React)",
    description:
      "Cross-platform offline notes app using Tauri + React + SQLite. Minimal UI, fast search, light/dark modes, and a reliable local-first experience for private notes.",
    tags: [
      { name: "tauri", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "sqlite", color: "pink-text-gradient" },
    ],
    image: todo,
    source_code_link: "https://github.com/Siddhantpal08/Advanced/tree/main/notepadx",
  },

  {
    name: "3D Portfolio / Desktop Scene",
    description:
      "Interactive 3D hero scene (react-three-fiber + GLTF) integrated into a Next.js portfolio. Focus on smooth camera, responsive layout and accessible fallbacks.",
    tags: [
      { name: "react-three-fiber", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "threejs", color: "pink-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Siddhantpal08/3d-portfolio",
  },

  {
    name: "Video Editing Guides & Short-film Edits",
    description:
      "A set of concise, practical video-editing guides and short edited reels demonstrating storytelling and pacing — created to help beginners make sharable shorts.",
    tags: [
      { name: "video-editing", color: "blue-text-gradient" },
      { name: "content", color: "green-text-gradient" },
      { name: "portfolio", color: "pink-text-gradient" },
    ],
    image: video,
    source_code_link: "https://github.com/Siddhantpal08/Intermediate/tree/main/docs/Video-Editing-Guide",
  },

  {
    name: "Code-4-Tech — Hackathon Project",
    description:
      "Hackathon submission: a lightweight web tool that automates a repetitive workflow (MVP built in 48 hours). Demonstrates rapid prototyping and teamwork.",
    tags: [
      { name: "hackathon", color: "blue-text-gradient" },
      { name: "prototype", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: resume,
    source_code_link: "https://github.com/Siddhantpal08/innomatics-resume-analyzer",
  },
];


  export { services, technologies, experiences, testimonials, projects } 