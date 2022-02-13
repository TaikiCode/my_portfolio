import {VFC} from "react"

interface Props {
    title: string
    level: string
    barStyleName: string
}

const Bar: VFC<Props> = ({title, level, barStyleName}) => {
  return (
    <div className="bars">
      <div className="info">
        <p>{title}</p>
        <p>{level}</p>
      </div>
      <div className={`line ${barStyleName}`} />
    </div>
  )
}

export default Bar
