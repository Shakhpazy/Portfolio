import project1img from "./assets/project1.jpg";
import project2img from "./assets/project2.jpg";
import project3img from "./assets/project3.jpg";
import project4img from "./assets/project4.jpg";
import project5img from "./assets/project5.jpg";

export type Project = {
    name: string;
    description: string;
    image: string;
    github: string;
    technologies: string[];
}

export const projectData: Project[] = [
  {
    name: 'CoinCapCrypto',
    description: 'CoinCapCrypto is a sleek crypto portfolio tracker that lets users monitor real-time prices, view coin details, compare assets, and manage their personal holdings through an intuitive, responsive interface.',
    image: project1img,
    github: 'https://github.com/YOUR_USERNAME/coincapcrypto',
    technologies: ['React', 'Express', 'Node.js', 'PostgreSQL', 'Bootstrap'],
  },
  {
    name: 'RouteWatch',
    description: 'RouteWatch is a mobile-first safety routing app that generates walking paths based on real-time public safety data. Users receive heatmap visualizations and safe route suggestions tailored to their location.',
    image: project2img,
    github: 'https://github.com/YOUR_USERNAME/routewatch',
    technologies: ['React Native', 'Express', 'Firebase Auth', 'Tailwind CSS', 'Map APIs'],
  },
  {
    name: 'Aegis',
    description: 'Aegis is an AI-powered image tool that automatically detects and blurs sensitive information, helping users protect their privacy when sharing photos online.',
    image: project5img,
    github: 'https://github.com/YOUR_USERNAME/aegis',
    technologies: ['Python', 'OpenCV', 'Flask', 'React', 'Machine Learning'],
  },
  {
    name: 'ParkWatch',
    description: 'ParkWatch uses AI and computer vision to detect available parking spots in real time through camera feeds, offering a smart solution for drivers and city planners.',
    image: project4img,
    github: 'https://github.com/YOUR_USERNAME/parkwatch',
    technologies: ['Python', 'YOLOv5/YOLOv8', 'OpenCV', 'Flask', 'Computer Vision'],
  },
  {
    name: 'Multiplayer Tetris',
    description: 'Multiplayer Tetris is a real-time, browser-based version of the classic game. It features competitive play, WebSocket-powered syncing, and responsive UI design.',
    image: project3img,
    github: 'https://github.com/YOUR_USERNAME/multiplayer-tetris',
    technologies: ['JavaScript', 'HTML Canvas', 'Node.js', 'WebSockets'],
  },
];