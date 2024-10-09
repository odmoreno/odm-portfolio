import { dataEn, skillData } from "../data/skills";
import SkillCard from "./SkillCard";

export default function Skill() {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    {dataEn.title}
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    {dataEn.desc}
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillData.map((skill, key) => (
                            <SkillCard
                                key={key}
                                skill={skill}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
