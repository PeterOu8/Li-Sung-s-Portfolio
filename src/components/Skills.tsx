import { SkillIcons } from "./SkillIcons";

export const SkillSection = () => {

    return(
        <section className="container flex flex-col gap-10">
            <h2 className="title">Skills</h2>
            <SkillIcons />
        </section>
    );
}

