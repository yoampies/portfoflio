import { MdOutlinePalette, MdAnimation, MdViewInAr, MdOutlineSdStorage } from 'react-icons/md';
import { FaRegChartBar, FaGithub, FaReact, FaMobileAlt } from 'react-icons/fa';
import { RiCodeFill, RiJavascriptLine, RiPencilLine, RiTailwindCssFill } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";
import { HiOutlineDeviceMobile } from 'react-icons/hi';

export const projects = [
  {
    id: 1,
    title: "AI-Powered Parasite Detection Platform",
    description: "A frontend application that simulates parasite detection from images using Web Workers and 3D visualization.",
    imgURL: "http://your-domain.com/images/parasitos-app.jpg",
    longDescription: "I developed a frontend application that simulates parasite detection from user-uploaded images. I implemented Web Workers to simulate image processing without blocking the UI, and used the Canvas API to draw randomly generated 'detection' boxes. The history of uploaded images is saved locally using localStorage. For epidemiological data visualization, I integrated D3.js to create interactive charts. Additionally, I integrated React Three Fiber to render 3D models of parasites, demonstrating skills in data visualization and 3D graphics.",
    demoURL: "https://parasaite.vercel.app",
    githubURL: "https://github.com/yoampies/parasaite",
    techStack: {
      'React': FaReact,
      'Tailwind CSS': RiTailwindCssFill,
      'Web Workers': GiGearStickPattern,
      'D3.js': FaRegChartBar,
      'Canvas API': MdOutlinePalette,
      'localStorage': MdOutlineSdStorage,
      'Git': FaGithub,
      'GSAP': MdAnimation,
      'React Three Fiber': MdViewInAr,

    }
  },
  {
    id: 2,
    title: "AI Study Tool for Students",
    description: "An application that simulates generating summaries, quizzes, and flashcards from text, PDFs, and audio.",
    imgURL: "http://your-domain.com/images/estudios-ia-app.jpg",
    longDescription: "I created a frontend application for students that simulates generating study content from various sources like text, PDFs, and audio. The app simulates interaction with AI to create summaries, multiple-choice quizzes, and flashcards. I used localStorage to save the creation history. GSAP was used to animate the 'AI processing' progress and flashcard transitions, providing a fluid and engaging user experience. Built with React and Tailwind CSS.",
    demoURL: "https://studyai-drab.vercel.app",
    githubURL: "https://github.com/yoampies/studyai",
    techStack: {
      'React': FaReact,
      'Tailwind CSS': RiTailwindCssFill,
      'localStorage': MdOutlineSdStorage,
      'Git': FaGithub,
      'GSAP': MdAnimation,
      'React Three Fiber': MdViewInAr,
    }
  },
  {
    id: 3,
    title: "Interactive Astrology App",
    description: "A React app with 3D animations and visuals for astrology and tarot services.",
    imgURL: "http://your-domain.com/images/astrologia-app.jpg",
    longDescription: "I developed an interactive application for astrology and tarot services. The app was built with React and Tailwind CSS, and integrates React Three Fiber for an immersive 3D experience. It includes a main animation where users can select tarot cards to ask questions, with detailed explanations of their meanings. The interface is designed to present the astrologer's and tarot reader's services in a clear and appealing way.",
    demoURL: "https://gabo-astral.vercel.app",
    githubURL: "https://github.com/yoampies/gabo_astral",
    techStack: {
      'React': FaReact,
      'Tailwind CSS': RiTailwindCssFill,
      'Git': FaGithub,
      'React Three Fiber': MdViewInAr,
    }
  },
  {
    id: 4,
    title: "Psychology Website with Scrollytelling",
    description: "An informative website for a psychologist, with a responsive design and scrollytelling animations.",
    imgURL: "http://your-domain.com/images/psicologia-app.jpg",
    longDescription: "I designed and developed a website for a psychologist using React and Tailwind CSS. The main feature is the use of GSAP to implement 'scrollytelling' animations, guiding the user through information about the professional's services in an interactive and visually attractive way. The design is fully responsive, ensuring an optimal experience on all devices.",
    demoURL: "https://jose-nine-ashy.vercel.app",
    githubURL: "https://github.com/yoampies/jose",
    techStack: {
      'React': FaReact,
      'Tailwind CSS': RiTailwindCssFill,
      'GSAP': MdAnimation,
      'Git': FaGithub,
    }
  }
];

export const skillIcons = {
  'React': FaReact,
  'Tailwind CSS': RiTailwindCssFill,
  'JavaScript': RiJavascriptLine,
  'HTML & CSS': RiCodeFill,
  'GSAP': MdAnimation,
  'D3.js': FaRegChartBar,
  'React Three Fiber': MdViewInAr,
  'Web Workers': GiGearStickPattern,
  'Canvas API': MdOutlinePalette,
  'localStorage': MdOutlineSdStorage,
  'Responsive Design': HiOutlineDeviceMobile,
  'Git': FaGithub,
  'UI/UX Design': RiPencilLine,
};