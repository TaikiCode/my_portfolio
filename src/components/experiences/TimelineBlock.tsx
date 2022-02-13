import { VFC } from "react"

interface Props {
  position: "right" | "left"
  topicText: string
  season: string
  experienceText: string
}

const TimelineBlock: VFC<Props> = ({
  position,
  topicText,
  season,
  experienceText,
}) => {
  return (
    <div className={`timeline-block timeline-block-${position}`}>
      <div className="marker"></div>
      <div className="timeline-content">
        <h3 className="topic">{topicText}</h3>
        <p className="font-italic">{season}</p>
        <p className="experience-text">{experienceText}</p>
      </div>
    </div>
  )
}

export default TimelineBlock
