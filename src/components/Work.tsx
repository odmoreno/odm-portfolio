import { works } from "../data/works";
import ProjectCard from "./ProjectCard";



export default function Work() {
    return (
        <section
            id="work"
            className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My works
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map((work, key) => (
                        <ProjectCard
                            key={key}
                            work={work}
                            classes="reveal-up"
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
