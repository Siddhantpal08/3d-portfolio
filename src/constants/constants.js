import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      icon: mongodb, // use your SQL icon if you add one
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
      icon: figma, // add python icon to your assets first
    },
    {
      name: "C / C++",
      icon: figma, // replace with a proper C++ icon if available
    },
    {
      name: "PHP",
      icon: html, // replace with your php icon in assets
    }
  ];
  
  
  const experiences = [
    {
      title: "Full-stack Developer",
      company_name: "Cognifyz Technologies",
      icon: /* use the appropriate imported icon variable, e.g. cognifyzIcon */ starbucks,
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
      icon: /* replace with a company icon variable if available */ tesla,
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
      icon: /* replace with a company icon variable if available */ shopify,
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
  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects } 