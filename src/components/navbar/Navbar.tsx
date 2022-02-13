import { VFC, useState, useEffect } from "react"
import { MenuIcon } from "@heroicons/react/solid"
import NavItem from "./NavItem"

const Navbar: VFC = () => {
  const [isHeightOver, setIsHeightOver] = useState<boolean>(false)

  useEffect(() => {
    const scrollAction = () => {
      if (150 > window.scrollY) {
        setIsHeightOver(true)
      } else {
        setIsHeightOver(false)
      }
    }
    window.addEventListener("scroll", scrollAction, {
      capture: false,
      passive: true,
    })
    scrollAction() // 初期描画時に一度だけ判定する
    return () => {
      window.removeEventListener("scroll", scrollAction)
    }
  }, [])

  return (
    <nav
      className={
        isHeightOver
          ? "navbar navbar-expand-lg navbar-light fixed-top"
          : "navbar navbar-expand-lg navbar-light fixed-top active"
      }
    >
      <div className={isHeightOver ? "container my-4" : "container my-2"}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavItem toPath="home" offset={-110} active>
              Home <span className="sr-only">(current)</span>
            </NavItem>
            <NavItem toPath="about" offset={-100}>
              About me
            </NavItem>
            <NavItem toPath="experience" offset={-77}>
              Experience
            </NavItem>
            <NavItem toPath="skills" offset={-75}>
              My Skills
            </NavItem>
            <NavItem toPath="portfolio" offset={-75}>
              Portfolio
            </NavItem>
            <NavItem toPath="contacts" offset={-75}>
              Contacts
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
