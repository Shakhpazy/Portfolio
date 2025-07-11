import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './icons.css';

function SocialIcons() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-20">
      {/* Social Icons */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 text-white hover:text-white-500 transition-transform hover:scale-110 pointer-events-auto duration-300"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 text-white hover:text-white-400 transition-transform hover:scale-110 pointer-events-auto duration-300"
      >
        <FaLinkedin className="icon" />
      </a>
      <a
        href="mailto:your@email.com"
        className="z-10 text-white hover:text-white-400 transition-transform hover:scale-110 pointer-events-auto duration-300"
      >
        <FaEnvelope className="icon" />
      </a>

    </div>
  );
}

export default SocialIcons;