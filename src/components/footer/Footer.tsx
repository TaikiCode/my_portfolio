import React, { VFC } from "react"
import { AUTHOR_NAME, SOCIAL_ACCOUNTS } from "../../contents/footer"
import "./styles.scss"

const Footer: VFC = () => {
  return (
    <div className="footer">
      <div className="flex flex-col items-center">
        <h5 className="uppercase text-xl">Follow me</h5>
        <div className="flex justify-center mt-4">
          {SOCIAL_ACCOUNTS.map((item, index) => (
            <a key={index} href={item.url}>
              {React.createElement(item.icon)}
            </a>
          ))}
        </div>
      </div>
      <div className="copyrights text-center">
        <p>
          Copyright&copy;
          {new Date().getFullYear()}&nbsp;{AUTHOR_NAME} | All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
