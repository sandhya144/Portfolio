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
    microsoft,
    Aith,
    Gdg,
    igdtuw,
    TicTacToe,
    Gemini,
    Portfolio,
     Chess,
    threejs,
    cpp,
    School,
     
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
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
     
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "500+ DSA Problem Solved",
      icon: backend,
    },
     {
      title: "15+ Github Repositories",
      icon: mobile,
    },
    
  ];
  
  const technologies = [
     {
      name: "C++",
      icon: cpp,
    },
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Development Program | IGDTUW",
      company_name: "MSC-IGDTUW",
      icon: igdtuw,
      // iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "July 2024 - August 2024",
      points: [
        "Cracked the Top 5 spot in the MSC-IGDTUW Web Development Bootcamp, where I spent 4 weeks experimenting with modern web tech and bringing real ideas to life.",
        "Worked on different projects — from snappy, responsive UIs to API-powered features — mainly with React.js and JavaScript, always making sure they looked good and loaded fast.",
        // "Got to work closely with industry mentors, picking up insider tips, sharpening my problem-solving game, and learning how to ship scalable, production-ready web apps.",
      ],
    },
    {
      title: "Hack Odyssey | Event Co-Lead ",
      company_name: "AITH Kanpur",
      icon: Aith,
      // iconBg: "#E6DEDD",
      iconBg: "#E6DEDD",
      date: "Dec 2024 - Jan 2025",
      points: [
        "Took the lead in running Hack Odyssey, a full-blown hackathon with 100+ participants — from locking GeeksforGeeks as a sponser to arranging rewards and certificates.",
        "Handled event logistics, kept participants on track, and hosted intensive workshops that boosted coding skills for the top 10 devs by over 30%.",
        // "Built a buzzing, competitive-yet-friendly space where people shared ideas, learned from each other, and walked away with way more than just a participation certificate.",
      ],
    },
    {
      title: "GDG | Core Team Member",
      company_name: "Google Developer Group",
      icon: Gdg,
      // iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "Sep 2024 - Present",
      points: [
        "Designed personalized learning paths & peer mentoring sessions that boosted team performance by 30%.",
        // "Led weekly algorithm & problem-solving workshops → Equipped participants to excel in national and international coding competitions.",
        "Fostered collaboration among 100+ competitive programmers, creating a vibrant space for learning and problem-solving",
      ],
    },
    {
      title: "Global Fellowships",
      company_name: "Microsoft | HPAIR | ASPIRE",
      icon: microsoft,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Present",
      points: [
        "Microsoft Code; Without Barriers Mentee – Part of Microsoft’s program to close the gender gap in tech, connecting with global experts and mentors.",
        // "ASPIRE Leader Fellow – Diving into an intensive leadership and innovation journey, learning directly from top professionals across industries and building skills to drive real change.",
        "HPAIR’25 Delegate – Selected for Harvard’s HPAIR Conference to discuss tech, leadership, and AI ethics with industry leaders.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  const timeline = [
    {
      title: "Primary Education",
      company_name: "KVN Public School, Varanasi",
      icon: School,
      // iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "April 2017 - May 2019",
      points: [
        "Built a strong academic foundation. Graduated with 85% in board examinations.",
      ],
    },
    {
      title: "Higher Secondary Education",
      company_name: "KVN Public School, Varanasi",
      icon: School,
      // iconBg: "#E6DEDD",
      iconBg: "#E6DEDD",
      date: "April 2019 - May 2021",
      points: [
        "Specialized in Science with Mathematics, focusing on academic excellence. Achieved 80% in Class XII.",
        
      ],
    },
    {
      title: "Undergraduate in Computer Science & Engineering",
      company_name: "DR. Ambedkar Institute Of Technology, Kanpur",
      icon: Aith,
      // iconBg: "#E6DEDD",
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Pursuing a comprehensive curriculum in core computer science and modern technologies, maintaining a 8+ CGPA.",
      ],
    },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "She got the perfect mix of creativity and logic — solving DSA problems one moment and crafting awesome web features the next, all while rocking her academics.",
      name: "Aarohi Verma",
      // designation: "COO",
      image: "https://media.istockphoto.com/id/1097854158/photo/day-at-the-campus.jpg?s=612x612&w=0&k=20&c=qW62usluDwG6pLJ-4G9x7h43byggo0uvGGVZwyOLr_g=",
    },
    {
      testimonial:
        "Her creativity and skills in development, especially with React.js and 3D design, really stand out. She’s always experimenting, pushing limits, and coming up with awesome results.",
      name: "Aarav Mehta",
      // designation: "",
      image: "https://img.freepik.com/premium-photo/indian-college-boy-happy-smiling-college_437792-728.jpg",
    },
    {
      testimonial:
        "Whether it’s cracking an algorithms, building cool projects, or staying on top of her studies, she does it all with style and focus. She naturally inspires everyone around her to step up their game.",
      name: "Vihaan Singh",
      // designation: "CTO",
      // company: "456 Enterprises",
      image: "https://img.freepik.com/premium-photo/young-indian-college-boy-holding-backpack-books-giving-happy-expression_54391-7224.jpg?w=2000",
    },
  ];
  
  const projects = [
    {
      name: "Tic Tac Toe",
      description:
        "Built a responsive Tic Tac Toe game with confetti wins and victory sounds for extra fun. Designed a smooth, user-friendly experience while sharpening my game logic skills.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: " CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: TicTacToe,
      source_code_link: "https://github.com/sandhya144/Tic-Tac-Toe.git",
    },
    
    {
      name: "Google Gemini",
      description:
        "Created a Google Gemini-inspired web app with dark/light mode, Gemini API integration, and handy copy, paste, and delete features for a fast, accessible, and fun experience.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Gemini,
      source_code_link: "https://github.com/sandhya144/Gemini.git",
    },
    {
      name: "Portfolio Website",
      description:
        "Built my own responsive portfolio with React.js and Three.js, featuring a rotating 3D Earth with smooth animations. It’s my little playground to show off modern web dev skills and a bit of 3D magic.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/sandhya144/Portfolio.git",
    },
    {
      name: "ChessGame",
      description:
        "Built a real-time multiplayer chess game where players can face off online with instant updates via Socket.io, smart move checks using Chess.js, and a Node.js + Express.js backend keeping everything in sync.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "Socket IO",
          color: "pink-text-gradient",
        },
      ],

      image: Chess,
      source_code_link: "https://github.com/sandhya144/ChessGame.git",
    },
   ];
  
export { services, technologies, experiences, testimonials, projects, timeline };

