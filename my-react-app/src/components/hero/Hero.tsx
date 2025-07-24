import profilePic from '../../assets/profile.jpg';
import SocialIcons from './SocialIcons';
import { FaUserSecret } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="hero text-white py-20">
        <div className="container md:flex items-center mx-auto gap-2 md:mt-40">
            <div className="md:basis-[60%] p-5 md:!text-left text-center">
                <h1 className='font-light text-3xl text-gray-400 mb-2'>Hello! I am</h1>
                <h1 className='font-light text-3xl mb-2'>Yusuf Shakhpaz</h1>
                <h1 className='text-3xl text-orange-600 mb-2'>Software Engineer</h1>
                <p className='text-xl mb-4 font-light'>I'm a driven Software Engineer based in Seattle, currently studying Computer Science at the University of Washington. I'm passionate about building impactful software and have led projects like CoinCapCrypto and SafeSpot, combining front-end design with full-stack development. I'm also actively involved in GitHired, a student-led career prep club, where I help organize events and mentor peers. I love working on real-world problems through hackathons and am always looking for new opportunities to learn, collaborate, and grow.</p>
                <a href="#" className="text-2xl inline-block px-3 py-1 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
                Get My Resume
                </a>
            </div>
            <div className="md:basis-[40%] p-5 relative flex items-center justify-center">
                <div className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                    <FaUserSecret className="text-gray-800 text-8xl" />
                </div>
            </div>
        </div>
        <div className='container mt-15 mx-auto'>
            <SocialIcons />
        </div>
    </div>

  );
}