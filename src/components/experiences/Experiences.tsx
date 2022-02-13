import { VFC } from "react"
import { TIMELINE_CONTENTS } from "../../contents/experiences"
import TimelineBlock from "./TimelineBlock"
import "./experiences.scss"

const Experiences: VFC = () => {
  const getBlockPosition = (index: number) => (index % 2 ? "left" : "right")
  return (
    <div id="experience" className="experience py-10 lg:px-40 md:px-20">
      <div className="flexRowCenter py-5">
        <h1>experience</h1>
      </div>
      <div className="experience-wrapper">
        {TIMELINE_CONTENTS.map((item, index) => (
          <TimelineBlock
            key={index}
            position={getBlockPosition(index)}
            topicText={item.topicText}
            season={item.season}
            expText={item.expText}
          />
        ))}
      </div>
    </div>
  )
}

export default Experiences
