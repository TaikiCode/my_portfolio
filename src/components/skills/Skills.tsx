import { VFC } from "react"
import {SKILL_CONTENTS } from "../../contents/skills"
import Bar from "./Bar"
import "./skills.scss"

const Skills: VFC = () => {
  return (
    <div
      id="skills"
      className="skills-wrapper lg:pt-20 lg:pb-14  md:py-20 py-12"
    >
      <h1 className="uppercase text-center pb-8 text-4xl">My Skills</h1>
      <div className="flex lg:flex-row flex-col justify-evenly items-center mb-3 pb-1">
        {Object.keys(SKILL_CONTENTS).map((category, index) => (
          <div key={index} className="lg:w-1/3 md:w-2/3 w-5/6">
            <h1 className="text-center py-8 text-2xl italic font-mono">
              {category}
            </h1>
            <div>
              {SKILL_CONTENTS[category].map((skill, i) => (
                <Bar
                  key={i}
                  title={skill.title}
                  level={skill.level}
                  barStyleName={skill.barStyleName}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
