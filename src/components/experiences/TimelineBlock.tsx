import { VFC } from "react"

interface Props {
  position: "right" | "left"
  topicText: string
  season: string
  expText: string
}

const TimelineBlock: VFC<Props> = ({
  position,
  topicText,
  season,
  expText,
}) => {
  return (
    <div className={`timeline-block timeline-block-${position}`}>
      <div className="marker"></div>
      <div className="timeline-content">
        <h3 className="topic font-bold font-serif text-xl">{topicText}</h3>
        <p className="font-serif pt-1 pb-3">{season}</p>
        <p className="pb-3 tracking-wide">{expText}</p>
      </div>
    </div>
  )
}

export default TimelineBlock
