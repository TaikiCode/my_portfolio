import gallery from "../images/gallery.png"
import typing_game from "../images/typing-game.png"
import coin_tracker from "../images/coin-tracker.png"
import sns from "../images/sns.png"
import portfolio from "../images/portfolio.png"




export const PORTFOLIO_CONTENTS = [
    {
        title: "Gallery",
        imageUrl: gallery,
        description: "reactの外部ライブラリであるsimple-react-lightboxを利用して、ギャラリーサイトを作りました。画像はunsplash.comからランダムに取得しています。お洒落な写真をお楽しみください。",
        skills: "React, simple-react-lightbox, Bootstrap4, css, unsplash（画像）",
        github: "https://github.com/TaikiCode/react_gallery",
        demo: "https://taikicode.github.io/react_gallery/",
    },
    {
        title: "Typing Game",
        imageUrl: typing_game,
        description: "react-hooksのuseState,useEffectを理解するために、タイピングゲームを作りました。少しでも実用的なものにするために、正確にタイプできた単語とできなかった単語をすぐに確認できるようにしています。ぜひ挑戦してみてください。",
        skills: "React, css",
        github: "https://github.com/TaikiCode/react_typing-game",
        demo: "https://taikicode.github.io/react_typing-game/",
    },
    {
        title: "Coin-Tracker",
        imageUrl: coin_tracker,
        description: "コロナ禍でビットコインが市場最高値を3年ぶりに更新しました。またビットコインだけでなく、イーサリアムなど他の有望な仮想通貨も同様に高騰しています。これはそれらの有望な仮想通貨の値動きをリアルタイムで追跡するアプリです。",
        skills: "React, react-router-dom, Chart.js, axios, CoinGecko API, Bootstrap4",
        github: "https://github.com/TaikiCode/react_coin-tracker",
        demo: "https://taikicode.github.io/react_coin-tracker/",
    },
    {
        title: "SNS",
        imageUrl: sns,
        description: "Djangoでフォロワー機能、投稿に対するコメント機能、いいね機能があるSNSを作成しました。signalを利用して自動的にプロフィールを作成したり、context_processorsで友達申請の通知を表示したりと、Djangoの機能を最大限利用しています。シンプルなデザインにこだわりました。",
        skills: "Django, widget_tweaks, Sqlite(開発), Postgresql(本番), heroku, AWS S3, HTML/CSS, Bootstrap4",
        github: "https://github.com/TaikiCode/django_sns_deploy",
        demo: "https://django-simple-sns.herokuapp.com/",
    },
    {
        title: "Portfolioサイト",
        imageUrl: portfolio,
        description: "Reactで作成した自分のポートフォリオサイトです。react-hook-formなどの便利な外部ライブラリをたくさん利用して作成しました。",
        skills: "React, react-hook-form, react-scroll, react-typed, emailjs-com, tailwindCSS materialUI",
        github: "https://github.com/TaikiCode/react_portfolio",
        demo: "https://taikicode.github.io/react_portfolio/",
    },

]