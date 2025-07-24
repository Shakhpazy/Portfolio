
export const About = () => {
  const data = {
    Past: "I got into tech out of curiosity, starting with small projects and learning the basics through a mix of self-study and academic coursework. I spent time experimenting, attending events, and exploring different areas of software development.",
    Present: "I'm currently studying Computer Science and gaining hands-on experience by building applications and contributing to collaborative efforts in my campus community. I enjoy working on practical problems and helping others grow alongside me.",
    Future: "I'm driven to become a well-rounded software engineer focused on solving real-world challenges. I'm especially interested in areas where technology can create meaningful impact, and I'm excited to keep learning, collaborating, and pushing my limits."
  };


  return (
    <div className="text-white py-20 mt-10 md:mt-20 " id="about">
      <div className="container mx-auto">
        <h1 className="text-6xl text-center font-light mb-15">About My</h1>
        <div className="flex flex-wrap gap-5 px-5">
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex-1 bg-slate-800 rounded-lg p-6 min-w-[250px] hover:bg-slate-700 hover:scale-105 transition duration-300">
                    <h2 className="text-4xl text-orange-600 text-center font-light mb-6">{key}</h2>
                    <p className="text-base font-light text-xl text-center">{value}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}