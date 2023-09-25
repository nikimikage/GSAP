window.addEventListener("DOMContentLoaded", () => {

// 対象の要素を取得
const paragraph = document.querySelector(".js-text");
console.log("paragraph",paragraph)
// テキストコンテンツを取得
const textContent = paragraph.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent = [...textContent]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph.innerHTML = newTextContent;


const paragraph_2 = document.querySelector(".js-text_2");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_2 = paragraph_2.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_2 = [...textContent_2]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_2.innerHTML = newTextContent_2;


const paragraph_3 = document.querySelector(".js-text_3");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_3 = paragraph_3.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_3 = [...textContent_3]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_3.innerHTML = newTextContent_3;

const paragraph_4 = document.querySelector(".js-text_4");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_4 = paragraph_4.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_4 = [...textContent_4]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_4.innerHTML = newTextContent_4;

const paragraph_5 = document.querySelector(".js-text_5");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_5 = paragraph_5.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_5 = [...textContent_5]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_5.innerHTML = newTextContent_5;

const paragraph_6 = document.querySelector(".js-text_6");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_6 = paragraph_6.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_6 = [...textContent_6]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_6.innerHTML = newTextContent_6;

const paragraph_7 = document.querySelector(".js-text_7");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_7 = paragraph_7.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_7 = [...textContent_7]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_7.innerHTML = newTextContent_7;

const paragraph_8 = document.querySelector(".js-text_8");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_8 = paragraph_8.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_8 = [...textContent_8]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_8.innerHTML = newTextContent_8;

const paragraph_9 = document.querySelector(".js-text_9");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_9 = paragraph_9.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_9 = [...textContent_9]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_9.innerHTML = newTextContent_9;

const paragraph_10 = document.querySelector(".js-text_10");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_10 = paragraph_10.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_10 = [...textContent_10]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_10.innerHTML = newTextContent_10;

const paragraph_11 = document.querySelector(".js-text_11");
console.log("paragraph_2",paragraph_2)
// テキストコンテンツを取得
const textContent_11 = paragraph_11.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent_11 = [...textContent_11]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph_11.innerHTML = newTextContent_11;

const tl = gsap.timeline({
    ease: "pawer4",
    scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: ".js-text span", // アニメーションが始まるトリガーとなる要素
        start: "top center", // アニメーションが始まる位置
        markers: true, // マーカー表示
      },

    });

tl.fromTo(
    ".js-text span",// アニメーションさせる要素
    {
      autoAlpha: 0, // アニメーション開始前は透明
      y: 30, // 30px下に移動
    },
    {
      autoAlpha: 1, // アニメーション後は出現(透過率0)
      y: 0, // 30px上に移動
      stagger: 0.02, // 0.2秒遅れて順番に再生
    }
  )
    .fromTo(
    ".js-text_2 span", // アニメーションさせる要素
    {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
    },
    {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_3 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_4 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_5 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_6 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_7 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_8 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_9 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_10 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    )
    .fromTo(
        ".js-text_11 span", // アニメーションさせる要素
        {
        autoAlpha: 0, // アニメーション開始前は透明
        y: 30, // 30px下に移動
        },
        {
        autoAlpha: 1, // アニメーション後は出現(透過率0)
        y: 0, // 30px上に移動
        stagger: 0.02, // 0.2秒遅れて順番に再生
        },"-=0.5"
    );

    gsap.timeline({repeat: -1,repeatDelay: 1,ease:"pawer4"})
    .to(
        ".line",
        {
            duration: 1,
            scaleY: 160,
            transformOrigin: "right top",
        }
    )
    .to(
        ".line",
        {
            duration: 1,
            y: 160,
            scaleY: 0,
            transformOrigin: "right top",
        }
    );

    gsap.fromTo(
        ".h3",
        {
            y: 30,
        },{
            duration: 0.75,
            y: 0,
            ease: "pawer4",
        }
    );

    gsap.timeline({ease:"pawer4"})
    .fromTo(
        ".rect",
        {
            y: 30,
        },{
            duration: 0.75,
            y: 0,
        }
    )
    .to(
        ".rect",
        {
            duration: 0.5,
            scaleX: 0,
            transformOrigin: "right top",
        },"-=50%"
    )


})