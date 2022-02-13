import { ReactNode, VFC } from "react"
import { Link } from "react-scroll"

interface Props {
  toPath: string
  offset: number
  active?: boolean
  children: ReactNode
}

const NavItem: VFC<Props> = ({ toPath, offset, active, children }) => {
  return (
    <li className={active ? "nav-item active" : "nav-item"}>
      <Link
        className="nav-link"
        href="#"
        smooth={true}
        to={toPath}
        offset={offset}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavItem
