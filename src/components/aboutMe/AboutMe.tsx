import { VFC } from "react"
import { ABOUT_ME } from "../../contents/aboutMe"
import me from "../../images/demo.png"
import "./aboutMe.scss"

const AboutMe: VFC = () => {
  return (
    <div id="about" className="w-full h-full bg-base-200">
      <div className="flexColCenter w-full h-full">
        <div className="h-1/2">
          <div className="h-60">
            <img src={me} alt="author..." className="h-full" />
          </div>
        </div>
        <div className="h-1/2 lg:w-1/2 md:w-2/3 pt-12">
          <h1 className="title">about me</h1>
          <p className="leading-loose font-italic px-3 lg:px-0">{ABOUT_ME}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
