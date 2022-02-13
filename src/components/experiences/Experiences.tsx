import { VFC } from "react"
import TimelineBlock from "./TimelineBlock"

const Experiences: VFC = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <TimelineBlock
          position="right"
          topicText="サッカー少年"
          season="2010 ~ 2014"
          experienceText="小学5年生の頃、イナズマイレブンの影響でサッカーを始める。中学生になるとゴールキーパーとして市の選抜選手になるほど上達する。"
        />
        {/* - */}
        <TimelineBlock
          position="left"
          topicText="ほぼ不登校"
          season="2015 ~ 2017"
          experienceText="高校時代にオンラインゲームやYouTubeにハマりほぼ不登校になるが、偏差値40台の底辺高校だったのでなんとか卒業に成功する。"
        />
        {/* - */}
        <TimelineBlock
          position="right"
          topicText="大学受験"
          season="2018 ~ 2019"
          experienceText="ふと上京したいと思い、浪人して１から受験勉強を開始する。自分の地頭レベルを知るために独学での勉強を決意し、無事第一志望の青山学院大学に合格する。"
        />
        {/* - */}
        <TimelineBlock
          position="left"
          topicText="プログラミング"
          season="2019夏"
          experienceText="一番効率的に稼げそう、という軽い気持ちでプログラミングを始める。しかし、これまでほとんどパソコンを触ったことがなかったので簡単な操作に苦戦する。"
        />
        {/* - */}
        <TimelineBlock
          position="right"
          topicText="短期インターン"
          season="2020 ~ 現在"
          experienceText="様々なイベントや短期インターンに参加。しかし、スキルがない自分にできることは少なく、無力さを痛感する。また、将来IT系で仕事をしようと決意し、本格的にプログラミングの勉強を開始する。"
        />
      </div>
    </div>
  )
}

export default Experiences
