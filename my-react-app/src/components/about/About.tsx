
export const About = () => {
    const data = {
    Past: "Started my journey in tech out of curiosity, building small projects and learning fundamentals through self-study and coursework. Participated in hackathons and explored areas like web development and blockchain.",
    Present: "Currently pursuing a Bachelor's in Computer Science at the University of Washington Tacoma. Building real-world applications like CoinCapCrypto and SafeSpot, while leading initiatives in my club GitHired to help others grow their careers.",
    Future: "Aiming to become a software engineer focused on solving meaningful problems at scale. Excited to explore opportunities in AI, fintech, or Web3, and to keep growing through collaboration, research, and real-world impact."
    };


  return (
    <div className="text-white py-20 mt-10">
      <div className="container mx-auto">
        <h1 className="text-6xl text-center font-light mb-15">About My</h1>
        <div className="flex flex-wrap gap-5">
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex-1 bg-slate-800 rounded-lg p-6 min-w-[250px] hover:bg-slate-700 hover:scale-105 transition duration-300">
                    <h2 className="text-4xl text-pink-600 text-center font-light mb-6">{key}</h2>
                    <p className="text-base font-light text-xl text-center">{value}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}