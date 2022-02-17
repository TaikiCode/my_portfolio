import PortfolioCard from "./PortfolioCard"
import "./portfolio.scss"
import { PORTFOLIO_CONTENTS } from "../../contents/portfolio"

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper py-20">
      <h1 className="uppercase text-center pb-12 text-4xl">Portfolio</h1>
      <div className="flexRowCenter flex-wrap">
          {PORTFOLIO_CONTENTS.map((item, index) => <PortfolioCard key={index} {...item} />)}
      </div>
    </div>
  )
}

export default Portfolio
