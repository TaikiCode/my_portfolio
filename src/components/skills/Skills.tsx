import { VFC } from "react"
import { SKILL_CONTENTS } from "../../contents/skills"
import Bar from "./Bar"

const Skills: VFC = () => {
  return (
    <div id="skills" className="skills-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5 m-0">My Skills</h1>
        <div className="skills-content mb-4 pb-5">
          <div className="column">
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
    </div>
  )
}

export default Skills
