import {VFC} from "react"

interface Props {
    title: string
    level: string
    barStyleName: string
}

const Bar: VFC<Props> = ({title, level, barStyleName}) => {
  return (
    <>
      <div className="flex justify-between items-center pb-2 font-mono text-sm">
        <p>{title}</p>
        <p>{level}</p>
      </div>
      <div className={`line mb-7 ${barStyleName}`} />
    </>
  )
}

export default Bar
