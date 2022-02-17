import { VFC } from "react"
import { Link } from "react-scroll"

interface Props {
  text: string
  toPath: string
  offset: number
  isHeightOver?: boolean
}

const NavItem: VFC<Props> = ({ text, toPath, offset, isHeightOver }) => {
  return (
    <Link
      className={`navItem ${isHeightOver ? "m-3" : "mx-2"}`}
      href="#"
      to={toPath}
      offset={offset}
      smooth={true}
    >
      {text}
    </Link>
  )
}

export default NavItem
