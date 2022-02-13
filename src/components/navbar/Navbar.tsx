import { VFC, useState, useEffect } from "react"
import { MenuIcon } from "@heroicons/react/solid"
import NavItem from "./NavItem"
import "./styles.scss"
import { NAV_ITEMS } from "../../contents/navItems"

const Navbar: VFC = () => {
  const [isHeightOver, setIsHeightOver] = useState<boolean>(false)

  useEffect(() => {
    const scrollAction = () => {
      if (100 > window.scrollY) {
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
    <div className={`nav ${!isHeightOver && "active"}`}>
      <div className="hidden px-2 mx-2 w-full lg:flex lg:justify-center lg:items-center">
        <div className="flex items-stretch">
          {NAV_ITEMS.map((item, index) => <NavItem text={item.text} toPath={item.toPath} offset={item.offset} isHeightOver={isHeightOver}/>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar

