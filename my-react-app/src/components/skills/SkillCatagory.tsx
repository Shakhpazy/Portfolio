export type SkillCategoryProps = {
    title: string;
    skills: string[];
};

export const SkillCategory = ({title, skills} : SkillCategoryProps) => {
    return (
        <div className={`skill-${title} mt-10`}>
            <h1 className="text text-3xl text-center md:!text-start font-light">{title}</h1>
            <div className="skills-list flex flex-wrap justify-center md:!justify-start gap-4 mt-4 text-xl text-pink-600">
                {skills.map((skill, idx) => (
                    <p className="px-4 py-2 bg-slate-800 rounded-lg hover:scale-110 transition-transform duration-200" key={idx}>{skill}</p>
                ))}
            </div>
        </div>
    );
}