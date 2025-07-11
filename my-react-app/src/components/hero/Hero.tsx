import profilePic from '../../assets/profile.jpg';
import "./hero.css"; // Assuming you have a hero.css file for custom styles

export const Hero = () => {
  return (
    <div className="hero text-white py-20">
        <div className="container flex items-center mx-auto gap-2">
            <div className="basis-5/8 p-5">
                <h1 className='font-light text-3xl text-gray-400 mb-2'>Hello! I am</h1>
                <h1 className='font-light text-3xl mb-2'>Yusuf Shakhpaz</h1>
                <h1 className='text-3xl text-pink-600 mb-2'>Software Engineer</h1>
                <p className='text-xl mb-4 font-light'>I'm a driven Software Engineer based in Seattle, currently studying Computer Science at the University of Washington. I'm passionate about building impactful software and have led projects like CoinCapCrypto and SafeSpot, combining front-end design with full-stack development. I'm also actively involved in GitHired, a student-led career prep club, where I help organize events and mentor peers. I love working on real-world problems through hackathons and am always looking for new opportunities to learn, collaborate, and grow.</p>
                <a href="#" className="text-2xl inline-block px-3 py-1 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition duration-300">
                Get My Resume
                </a>
            </div>
            <div className="basis-3/8 p-5 relative">
                <div className="absolute inset-0 bg-gradient-to-tl from-pink-500 to-blue-500 blur-lg opacity-30 z-0"></div>
                <img
                    src={profilePic}
                    alt="Yusuf Shakhpaz"
                    className="relative z-10 w-full h-auto"
                />
            </div>

        </div>
    </div>

  );
}