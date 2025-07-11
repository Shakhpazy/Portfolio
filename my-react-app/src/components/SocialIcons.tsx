import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="fixed bottom-0 left-5 z-50 flex flex-col items-center space-y-6">

      {/* Social Icons */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 text-white hover:text-pink-500 transition-transform hover:scale-110"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 text-white hover:text-blue-400 transition-transform hover:scale-110"
      >
        <FaLinkedin className="icon" />
      </a>
      <a
        href="mailto:your@email.com"
        className="z-10 text-white hover:text-green-400 transition-transform hover:scale-110"
      >
        <FaEnvelope className="icon" />
      </a>

      {/* Vertical white strip */}
      <div className="strip min-h-40 bg-blue-500"></div>

    </div>

    
  );
}

export default SocialIcons;