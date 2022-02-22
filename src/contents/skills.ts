export interface ISkillCategory {
  frontEnd: ISkill[]
  backEnd: ISkill[]
  [key: string]: ISkill[]
}

interface ISkill {
  title: string
  level: string
  barStyleName: string
}

export const SKILL_CONTENTS = {
  frontEnd: [
    {
      title: "HTML,CSS（Sass）",
      level: "90%",
      barStyleName: "ninety",
    },
    {
      title: "JavaScript/TypeScript",
      level: "80%",
      barStyleName: "eighty",
    },
    {
      title: "React",
      level: "90%",
      barStyleName: "ninety",
    },
    {
      title: "VueJS",
      level: "70%",
      barStyleName: "seventy",
    },
  ],
  backEnd: [
    {
      title: "Python",
      level: "80%",
      barStyleName: "eighty",
    },
    {
      title: "Django/FastAPI",
      level: "75%",
      barStyleName: "seventy_five",
    },
    {
      title: "NodeJS/ExpressJS",
      level: "60%",
      barStyleName: "sixty",
    },

    {
      title: "Ruby on Rails",
      level: "40%",
      barStyleName: "forty",
    },
  ],
} as ISkillCategory
