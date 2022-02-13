import {VFC} from "react"

interface Props {
    title: string
    level: string
    barStyleName: string
}

const Bar: VFC<Props> = ({title, level, barStyleName}) => {
  return (
    <>
      <div className="flex justify-between items-center pb-5">
        <p>{title}</p>
        <p>{level}</p>
      </div>
      <div className={`line pb-1 ${barStyleName}`} />
    </>
  )
}

export default Bar
