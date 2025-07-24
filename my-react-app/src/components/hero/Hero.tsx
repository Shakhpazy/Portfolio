import { FaUserSecret } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="hero text-white py-20" id='resume'>
        <div className="container md:flex items-center mx-auto gap-2 md:mt-40">
            <div className="md:basis-[60%] p-5 md:!text-left text-center">
                <h1 className='font-light text-3xl text-gray-400 mb-2'>Hello! I am</h1>
                <h1 className='font-light text-3xl mb-2'>Yusuf Shakhpaz</h1>
                <h1 className='text-3xl text-orange-600 mb-2'>Software Engineer</h1>
                <p className='text-xl mb-4 font-light'>I'm a software engineer based in Seattle and a Computer Science student at the University of Washington. I enjoy building practical, user-focused applications and have experience across both front-end and back-end development. I'm involved in my campus community, where I support peers through tech events and mentorship. Outside of programming, I like playing soccer, spending time outdoors, and exploring new ideas through side projects and hackathons. I'm always looking for opportunities to learn, create, and grow.</p>
                <a
                href="/YusufShakhpazResume.pdf"
                download
                className="text-2xl inline-block px-3 py-1 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
                >
                Get MY Resume
                </a>
            </div>
            <div className="md:basis-[40%] p-5 relative flex items-center justify-center">
                <div className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                    <FaUserSecret className="text-gray-700 text-9xl" />
                </div>
            </div>
        </div>
    </div>

  );
}

// my-react-app/src/components/hero/Hero.tsx