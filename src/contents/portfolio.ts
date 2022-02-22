import gallery from "../images/gallery.png"
import typing_game from "../images/typing-game.png"
import coin_tracker from "../images/coin-tracker.png"
import sns from "../images/sns.png"
import portfolio from "../images/portfolio.png"
import bj01 from "../images/bj01.png"
import bj02 from "../images/bj02.png"
import p4p01 from "../images/p4p01.png"
import p4p02 from "../images/p4p02.png"


export const PORTFOLIO_CONTENTS = [
    {
        title: "Who is The One?",
        imageUrl: p4p01,
        imageAltUrl: p4p02,
        description: "ボクシングの世界チャンピオンは各階級に最大4人も存在しています。またチャンピオン同士の対戦は、プロモーターや放映権の関係でかなり実現が難しい現状です。なので、「その階級で誰が本当に強いのか」「誰が真のチャンピオンなのか」を決めるアプリを作りました。",
        skills: "React, TypeScript, react-router-dom, tailwindCSS, daisyUI, Sass, the_Ring_Magazine（画像）",
        github: "https://github.com/TaikiCode/whoIsTheOne",
        demo: "",
    },
    {
        title: "Black Jack",
        imageUrl: bj01,
        imageAltUrl: bj02,
        description: "手持ちカードの数字の合計が「21」を超えない範囲で「21」に近づけた方が勝ち、というゲーム「BlackJack」を作りました。このプロジェクトでは、ゲームのStateをReducerで管理する方法を試してみました。必勝法である「カウンティング」ができるようにデッキの枚数は常に管理しているので、ぜひ試してみてください。",
        skills: "React, TypeScript, tailwindCSS, daisyUI, Sass, Deck_of_Card_API",
        github: "https://github.com/TaikiCode/blackJack",
        demo: "",
    },
    {
        title: "SNS",
        imageUrl: sns,
        imageAltUrl: sns,
        description: "Djangoでフォロワー機能、投稿に対するコメント機能、いいね機能があるSNSを作成しました。signalを利用して自動的にプロフィールを作成したり、context_processorsで友達申請の通知を表示したりと、Djangoの機能を最大限利用しています。シンプルなデザインにこだわりました。",
        skills: "Django, widget_tweaks, Sqlite(開発), Postgresql(本番), heroku, AWS S3, HTML/CSS, Bootstrap4",
        github: "https://github.com/TaikiCode/django_sns_deploy",
        demo: "https://django-simple-sns.herokuapp.com/",
    },
    {
        title: "Coin-Tracker",
        imageUrl: coin_tracker,
        imageAltUrl: coin_tracker,
        description: "コロナ禍でビットコインが市場最高値を3年ぶりに更新しました。またビットコインだけでなく、イーサリアムなど他の有望な仮想通貨も同様に高騰しています。これはそれらの有望な仮想通貨の値動きをリアルタイムで追跡するアプリです。",
        skills: "React, react-router-dom, Chart.js, axios, CoinGecko API, Bootstrap4",
        github: "https://github.com/TaikiCode/react_coin-tracker",
        demo: "https://taikicode.github.io/react_coin-tracker/",
    },
    {
        title: "Typing Game",
        imageUrl: typing_game,
        imageAltUrl: typing_game,
        description: "react-hooksのuseState,useEffectを理解するために、タイピングゲームを作りました。少しでも実用的なものにするために、正確にタイプできた単語とできなかった単語をすぐに確認できるようにしています。ぜひ挑戦してみてください。",
        skills: "React, css",
        github: "https://github.com/TaikiCode/react_typing-game",
        demo: "https://taikicode.github.io/react_typing-game/",
    },
    {
        title: "Gallery",
        imageUrl: gallery,
        imageAltUrl: gallery,
        description: "reactの外部ライブラリであるsimple-react-lightboxを利用して、ギャラリーサイトを作りました。画像はunsplash.comからランダムに取得しています。お洒落な写真をお楽しみください。",
        skills: "React, simple-react-lightbox, Bootstrap4, css, unsplash（画像）",
        github: "https://github.com/TaikiCode/react_gallery",
        demo: "https://taikicode.github.io/react_gallery/",
    },
    {
        title: "Portfolioサイト",
        imageUrl: portfolio,
        imageAltUrl: portfolio,
        description: "Reactで作成した自分のポートフォリオサイトです。react-hook-formなどの便利な外部ライブラリをたくさん利用して作成しました。",
        skills: "React, react-hook-form, react-scroll, react-typed, emailjs-com, tailwindCSS materialUI",
        github: "https://github.com/TaikiCode/react_portfolio",
        demo: "https://taikicode.github.io/react_portfolio/",
    },

]