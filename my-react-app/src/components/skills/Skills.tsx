import { SkillCategory } from "./SkillCatagory";
import { SkillsData } from "./data";

export const Skills = () => {

  return (
    <div className="text-white py-20">
      <div className="container mx-auto">
        <h1 className="text-6xl text-center font-light mb-15">Skills</h1>
        <div className="skillssection">
            {SkillsData.map((category, index) => {
              const title = Object.keys(category)[0] as 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms';
              const skills = category[title];
              return (
                <SkillCategory key={index} title={title} skills={skills ?? []} />
              );
            })}
        </div>
      </div>
    </div>
  );
}