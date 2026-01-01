import { 
  MdOutlinePalette, 
  MdOutlineSdStorage, 
  MdTimeline, 
  MdGraphicEq, 
  MdOutlineAnalytics, 
  MdErrorOutline
} from 'react-icons/md';
import { 
  FaRegChartBar, 
  FaGithub, 
  FaReact, 
  FaUniversalAccess, 
  FaFlask, 
  FaMicrochip,
  FaCube,    
  FaPenNib   
} from 'react-icons/fa';
import { 
  RiCodeFill, 
  RiJavascriptLine
} from "react-icons/ri";
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { BiTestTube, BiCut } from "react-icons/bi"; 
import { TbActivityHeartbeat } from "react-icons/tb";
import { 
  SiTypescript, 
  SiEslint, 
  SiSharp, 
  SiGoogle,
  SiTailwindcss, // Icono oficial de marca para Tailwind
  SiGreensock    // Icono oficial de marca para GSAP
} from 'react-icons/si';

import parasaite from "../assets/demos/parasaite.png"
import studyai from "../assets/demos/studyai.png"
import gabo_astral from "../assets/demos/gabo-astral.png"
import jose from "../assets/demos/jose.png"

export const projects = [
  {
    id: 1,
    title: "AI-Powered Parasite Detection Platform",
    description: "A frontend application that simulates parasite detection from images using Web Workers and 3D visualization.",
    imgURL: parasaite,
    longDescription: [
      `Architected a mission-critical frontend application designed for medical environments, focusing on high-availability 
      and computational efficiency. This project simulates real-time parasite detection by leveraging a multi-threaded architecture, 
      decoupling heavy image processing and canvas rendering from the main UI thread using Web Workers and OffscreenCanvas.`,
      `To ensure reliability in remote rural areas, I implemented an offline-first PWA strategy and optimized 3D asset delivery 
      through Draco compression and strategic pre-loading within a React Three Fiber environment. 
      The application features a centralized state management system with Zustand and complex data visualizations powered by D3.js.`,
      `Built with a focus on enterprise-grade code quality, the project integrates a robust CI/CD pipeline that automates unit testing, 
      enforces strict TypeScript compliance, and monitors bundle size impact on every deployment.`
    ],
    demoURL: "https://parasaite.vercel.app",
    githubURL: "https://github.com/yoampies/parasaite",
    techStack: [
      {
        category: "Core Architecture",
        items: [
          { 
            name: "React 19 & TS", 
            icon: FaReact, 
            description: "Strictly typed interfaces and Concurrent Mode to ensure a reliable and scalable medical diagnostic interface." 
          },
          { 
            name: "Zustand", 
            icon: MdOutlineSdStorage, 
            description: "High-performance state management with persistent middleware for handling study history and analysis sessions." 
          },
          { 
            name: "Web Workers", 
            icon: FaMicrochip, 
            description: "Multithreaded simulation of image processing, decoupling heavy logic from the main thread for 0ms UI lag." 
          }
        ]
      },
      {
        category: "Performance Engineering",
        items: [
          { 
            name: "OffscreenCanvas", 
            icon: MdOutlinePalette, 
            description: "Off-main-thread rendering of detection boxes, maintaining a fluid 60fps experience during complex visual analysis." 
          },
          { 
            name: "Draco 3D Compression", 
            icon: FaCube, 
            description: "Strategic optimization of GLTF models to ensure rapid loading of biological assets in web environments." 
          },
          { 
            name: "Vite PWA", 
            icon: MdTimeline, 
            description: "Offline-first implementation to guarantee access to diagnostic tools in remote medical areas with limited connectivity." 
          }
        ]
      },
      {
        category: "Visual Analytics & 3D",
        items: [
          { 
            name: "React Three Fiber", 
            icon: FaCube, 
            description: "Interactive 3D rendering of parasitic structures for high-fidelity clinical observation and training." 
          },
          { 
            name: "D3.js & Analytics", 
            icon: FaRegChartBar, 
            description: "Complex epidemiological data visualization using SVG for real-time confidence distribution and reporting." 
          },
          { 
            name: "GSAP Animations", 
            icon: SiGreensock, 
            description: "Performance-tuned micro-interactions and scanning sequences to enhance the diagnostic workflow UX." 
          }
        ]
      },
      {
        category: "QA & Infrastructure",
        items: [
          { 
            name: "Vitest", 
            icon: BiTestTube, 
            description: "Unit testing for core processing logic and worker algorithms to ensure mathematical and diagnostic accuracy." 
          },
          { 
            name: "CI/CD Pipeline", 
            icon: FaGithub, 
            description: "Advanced GitHub Actions for automated deployment, bundle size auditing, and cross-environment testing." 
          },
          { 
            name: "Code Standards", 
            icon: SiEslint, 
            description: "Strict quality enforcement via ESLint (React 19 rules), Prettier, and Husky pre-commit hooks." 
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Interactive Astrology App",
    description: "A React app with 3D animations and visuals for astrology and tarot services.",
    imgURL: gabo_astral,
    longDescription: [
      `I engineered a high-performance interactive platform that merges real-time 3D rendering (WebGL) with a robust, scalable 
      software architecture. The core of the project is a sophisticated user experience engine that orchestrates complex animations, 
      predictable state management, and a professional Continuous Integration (CI/CD) infrastructure.`,
      `The primary technical challenge involved optimizing React Three Fiber for low-end mobile devices. 
      I solved this by implementing Draco Compression for 3D assets, Lazy Loading for heavy components, and a dynamic 
      post-processing management system based on client hardware capabilities. System stability is guaranteed by a 
      comprehensive testing suite—ranging from pure logic to full user flows (Unit, Integration, and E2E Testing)—ensuring a 
      regression-free deployment pipeline.`
    ],
    demoURL: "https://gabo-astral.vercel.app",
    githubURL: "https://github.com/yoampies/gabo_astral",
    techStack: [
      {
        category: "Core Architecture",
        items: [
          { name: "React 19 & TS", icon: FaReact, description: "Leveraging Concurrent Mode, strictly typed interfaces, and custom hooks for business logic." },
          { name: "Zustand", icon: MdOutlineSdStorage, description: "State management with persistence middleware to handle complex history and study sessions." },
          { name: "Web Workers", icon: FaMicrochip, description: "Decoupling heavy PDF/Audio parsing from the main thread to ensure 0ms UI lag." }
        ]
      },
      {
        category: "Performance & UX",
        items: [
          { name: "Streaming UI", icon: MdTimeline, description: "Implementation of JavaScript Generators for word-by-word simulated AI content delivery." },
          { name: "Code Splitting", icon: BiCut, description: "Granular optimization using React.lazy and Suspense to reduce initial bundle impact." },
          { name: "Web Audio API", icon: MdGraphicEq, description: "Real-time audio waveform visualization for processed MP3 study sources." }
        ]
      },
      {
        category: "Data & Resilience",
        items: [
          { name: "Recharts & Heatmap", icon: MdOutlineAnalytics, description: "Complex data visualization for student progress tracking and activity consistency." },
          { name: "Error Boundaries", icon: MdErrorOutline, description: "Strategic implementation of boundaries to catch and isolate failures in heavy media components." },
          { name: "A11y First", icon: FaUniversalAccess, description: "Full keyboard navigation and aria-live announcements for asynchronous process feedback." }
        ]
      },
      {
        category: "Testing & Tooling",
        items: [
          { name: "Vitest", icon: BiTestTube, description: "Unit and integration testing for core study logic and history filtering." },
          { name: "E2E Testing", icon: FaFlask, description: "Automated user flows testing from file upload to study result generation." },
          { name: "CI/CD Tooling", icon: SiEslint, description: "Husky, ESLint, and Prettier integration to enforce high-quality code standards." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "AI Study Tool for Students",
    description: "An application that simulates generating summaries, quizzes, and flashcards from text, PDFs, and audio.",
    imgURL: studyai,
    longDescription: [
      `I developed StudyAI, an advanced frontend platform designed for student productivity that transforms raw text, PDFs, 
      and MP3 audio into dynamic study materials like comprehensive summaries, multiple-choice quizzes, and interactive flashcards. 
      Built with production-grade standards in mind, the application features a robust TypeScript architecture 
      and leverages Web Workers for off-main-thread processing to ensure a consistent 60 FPS experience.`,
      `The project showcases sophisticated engineering through a centralized Zustand state management system
      with persistence middleware, a high-performance streaming UI that simulates word-by-word AI 
      generation using JavaScript generators, and a dynamic audio waveform visualizer built with the Web Audio API. 
      To deliver a data-driven experience, I integrated Recharts for progress tracking and a GitHub-style knowledge 
      heatmap to visualize long-term learning consistency.`,
      `Furthermore, the platform is highly optimized for performance and resilience, utilizing React.lazy 
      for code splitting to minimize initial bundle sizes and custom Error Boundaries to isolate computational 
      failures. Finally, I prioritized accessibility by achieving full keyboard navigation support and implementing 
      aria-live announcements for real-time feedback on all asynchronous background processes.`
    ],
    demoURL: "https://studyai-drab.vercel.app",
    githubURL: "https://github.com/yoampies/studyai",
    techStack: [
      {
        category: "Core Architecture",
        items: [
          { name: "React 19 & TS", icon: FaReact, description: "Leveraging Concurrent Mode, strictly typed interfaces, and custom hooks for business logic." },
          { name: "Zustand", icon: MdOutlineSdStorage, description: "State management with persistence middleware to handle complex history and study sessions." },
          { name: "Web Workers", icon: FaMicrochip, description: "Decoupling heavy PDF/Audio parsing from the main thread to ensure 0ms UI lag." }
        ]
      },
      {
        category: "Performance & UX",
        items: [
          { name: "Streaming UI", icon: TbActivityHeartbeat, description: "Implementation of JavaScript Generators for word-by-word simulated AI content delivery." },
          { name: "Code Splitting", icon: BiCut, description: "Granular optimization using React.lazy and Suspense to reduce initial bundle impact." },
          { name: "Web Audio API", icon: MdGraphicEq, description: "Real-time audio waveform visualization for processed MP3 study sources." }
        ]
      },
      {
        category: "Data & Resilience",
        items: [
          { name: "Recharts & Heatmap", icon: MdOutlineAnalytics, description: "Complex data visualization for student progress tracking and activity consistency." },
          { name: "Error Boundaries", icon: MdErrorOutline, description: "Strategic implementation of boundaries to catch and isolate failures in heavy media components." },
          { name: "A11y First", icon: FaUniversalAccess, description: "Full keyboard navigation and aria-live announcements for asynchronous process feedback." }
        ]
      },
      {
        category: "Testing & Tooling",
        items: [
          { name: "Vitest", icon: BiTestTube, description: "Unit and integration testing for core study logic and history filtering." },
          { name: "E2E Testing", icon: BiTestTube, description: "Automated user flows testing from file upload to study result generation." },
          { name: "CI/CD Tooling", icon: SiEslint, description: "Husky, ESLint, and Prettier integration to enforce high-quality code standards." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Psychology Website with Scrollytelling",
    description: "An informative website for a psychologist, with a responsive design and scrollytelling animations.",
    imgURL: jose,
    longDescription: [
      `I engineered a high-performance, type-safe web platform for a professional psychologist designed to 
      maximize user engagement through an immersive digital storytelling experience. I architected a scalable, 
      module-based system that strictly separates complex GSAP animation logic from UI components to ensure high 
      maintainability and clean code standards.`,
      `Performance was optimized by engineering a system that leverages code splitting via React.lazy 
      and Suspense, alongside an automated image processing pipeline that converts assets to WebP and 
      AVIF formats to significantly reduce LCP. To deliver professional-grade reliability and inclusivity, 
      I implemented GSAP's advanced context API for strict memory management and utilized matchMedia patterns 
      to respect system-level Reduced Motion preferences.`,
      `Furthermore, I migrated the legacy codebase to TypeScript and established a robust DX workflow using 
      Husky and Lint-staged, while integrating dynamic metadata and WCAG-compliant ARIA labels to ensure the 
      platform is both discoverable and fully accessible.`
    ],
    demoURL: "https://jose-nine-ashy.vercel.app",
    githubURL: "https://github.com/yoampies/jose",
    techStack: [
      {
        category: "Core Frontend",
        items: [
          { name: "React 19", icon: FaReact, description: "Utilizing the latest Concurrent Mode features, lazy, and Suspense for optimized bundle delivery." },
          { name: "TypeScript", icon: SiTypescript, description: "Full implementation of custom interfaces and types to ensure end-to-end type safety." },
          { name: "Tailwind CSS", icon: SiTailwindcss, description: "Implementation of a responsive, mobile-first design system using utility-first patterns." }
        ]
      },
      {
        category: "Animation & Interaction",
        items: [
          { name: "GSAP", icon: SiGreensock, description: "Advanced use of ScrollTrigger and the Context API for high-performance, leak-free visual narratives." },
          { name: "Accessibility First", icon: FaUniversalAccess, description: "Native support for prefers-reduced-motion and keyboard navigation." }
        ]
      },
      {
        category: "Performance & SEO",
        items: [
          { name: "Asset Optimization", icon: SiSharp, description: "Integrated Sharp for automated next-gen image conversion (WebP/AVIF)." },
          { name: "Dynamic SEO", icon: SiGoogle, description: "Implementation of dynamic Open Graph tags and metadata for enhanced social media presence." }
        ]
      },
      {
        category: "Tooling & DX",
        items: [
          { name: "Code Quality", icon: SiEslint, description: "Husky, Prettier, and ESLint integration to maintain a 'Zero-Error' commit policy." },
          { name: "Version Control", icon: FaGithub, description: "Professional Git workflow with structured modularity." }
        ]
      }
    ]
  }
];

export const skillIcons = {
  'React': FaReact,
  'Tailwind CSS': SiTailwindcss,
  'JavaScript': RiJavascriptLine,
  'HTML & CSS': RiCodeFill,
  'GSAP': SiGreensock,
  'D3.js': FaRegChartBar,
  'React Three Fiber': FaCube,
  'Web Workers': FaMicrochip,
  'Canvas API': MdOutlinePalette,
  'localStorage': MdOutlineSdStorage,
  'Responsive Design': HiOutlineDeviceMobile,
  'Git': FaGithub,
  'UI/UX Design': FaPenNib,
};