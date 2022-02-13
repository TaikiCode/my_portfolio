import { VFC } from "react"
import { TIMELINE_CONTENTS } from "../../contents/experiences"
import TimelineBlock from "./TimelineBlock"

const Experiences: VFC = () => {
  const getBlockPosition = (index: number) => (index % 2 ? "left" : "right")
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
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
