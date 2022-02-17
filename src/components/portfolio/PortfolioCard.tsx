import { VFC, useState } from "react"
import { SearchIcon } from "@heroicons/react/solid"
import Modal from "@mui/material/Modal"
import CustomBox from "./CustomBox"

interface Props {
  title: string
  imageUrl: string
  description: string
  skills: string
  github: string
  demo: string
}

const PortfolioCard: VFC<Props> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="card shadow-xl m-6 w-96 relative">
      <img className="w-full cursor-pointer" src={props.imageUrl} alt={props.title} />
      <div className="cardInfo" onClick={handleOpen}>
        <SearchIcon className="text-gray-300 h-8 w-8" />
      </div>
      <Modal open={open} onClose={handleClose}>
        <CustomBox {...props} />
      </Modal>
    </div>
  )
}

export default PortfolioCard
