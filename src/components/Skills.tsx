import { SkillIcons } from "./SkillIcons";

export const SkillSection = () => {

    return(
        <section className="container flex flex-col gap-6">
            <h2 className="section-title">Skills</h2>
            <SkillIcons />
        </section>
    );
}

