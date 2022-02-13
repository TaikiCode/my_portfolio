import { VFC } from "react"
import { SKILL_CONTENTS } from "../../contents/skills"
import Bar from "./Bar"
import "./skills.scss"

const Skills: VFC = () => {
  return (
    <div id="skills" className="skills-wrapper lg:py-24  md:py-20 py-12">
        <h1 className="uppercase text-center pb-12 text-4xl">My Skills</h1>
        <div className="flexRowCenter mb-4 pb-5">
          <div className="column lg:w-1/3 md:w-2/3 w-5/6">
            {SKILL_CONTENTS.map((skill, index) => (
              <Bar
                key={index}
                title={skill.title}
                level={skill.level}
                barStyleName={skill.barStyleName}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Skills
