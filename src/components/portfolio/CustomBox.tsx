import { VFC } from "react"
import Box from "@mui/material/Box"

interface Props {
  title: string
  imageUrl: string
  imageAltUrl: string
  description: string
  skills: string
  github: string
  demo: string
}

const CustomBox: VFC<Props> = ({
  title,
  imageAltUrl,
  description,
  skills,
  github,
  demo,
}) => {
  const handleOpenWindow = (url: string) => window.open(url)
  return (
    <Box className="boxStyle">
      <div className="titleSection">{title}</div>

      <div className="bodySection">
        <div className="imageWrapper">
          <img className="w-full rounded-lg" src={imageAltUrl} alt={title} />
        </div>

        <div className="mainSection">
          <div className="description">
            <h1 className="h-1/4 text-xl">説明</h1>
            <div className="h-3/4 text-sm">{description}</div>
          </div>

          <div className="skills">
            <h1 className="h-1/4 text-lg pt-3">使用技術</h1>
            <div className="h-3/4 flexRowCenter text-sm font-serif">
              {skills}
            </div>
          </div>

          <div className="source">
            <div className="flex flex-col lg:flex-row">
              <div className="pr-5 font-mono text-sm">Github: </div>
              <a onClick={() => handleOpenWindow(github)}>{github}</a>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="pr-5 font-mono text-sm">Demo: </div>
              <a onClick={() => handleOpenWindow(demo)}>{demo}</a>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default CustomBox
