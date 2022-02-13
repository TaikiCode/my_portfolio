import { VFC } from "react"
import Typed from "react-typed"
import { HEADER_TEXT, TYPE_CONTENTS } from "../../contents/header"
import "./styles.scss"

const Header: VFC = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1 className="uppercase font-serif italic">{HEADER_TEXT}</h1>
        <div className="typed-wrapper mt-6">
          <Typed
            className="typed-text"
            strings={TYPE_CONTENTS}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
      </div>
    </div>
  )
}

export default Header
