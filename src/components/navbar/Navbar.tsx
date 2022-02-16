import { VFC, useState, useEffect } from "react"
import { FiMenu } from "react-icons/fi"
import { IoCloseSharp } from "react-icons/io5"


import NavItem from "./NavItem"
import "./styles.scss"
import { NAV_ITEMS } from "../../contents/navItems"

const Navbar: VFC = () => {
  const [isHeightOver, setIsHeightOver] = useState<boolean>(false)

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const handleOpen = () => setIsMenuOpen(true)
  const handleClose = () => setIsMenuOpen(false)

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
    <div className={`navStyle ${!isHeightOver && "active"}`}>
      <div className="px-2 mx-2 w-full lg:flex lg:justify-center lg:items-center">
        <div className="hidden lg:flex items-stretch">
          {NAV_ITEMS.map((item, index) => (
            <NavItem
              key={index}
              text={item.text}
              toPath={item.toPath}
              offset={item.offset}
              isHeightOver={isHeightOver}
            />
          ))}
        </div>
        {/* モバイル用 */}
        <div className="lg:hidden flex pt-2">
          {isMenuOpen ? (
            <>
              <IoCloseSharp
                className="text-base-100 text-3xl z-50"
                onClick={handleClose}
              />
              <div className="overlay">
                {NAV_ITEMS.map((item) => (
                  <div className="mobileItem">
                    <NavItem
                      text={item.text}
                      toPath={item.toPath}
                      offset={item.offset}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <FiMenu
              className="text-base-100 text-3xl z-50"
              onClick={handleOpen}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
