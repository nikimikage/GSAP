window.addEventListener("DOMContentLoaded", () => {

for (let i = 0; i <= 10; i++) {
  const paragraph = document.querySelector(`.js-text_${i}`);
console.log("paragraph",paragraph)
// テキストコンテンツを取得
const textContent = paragraph.textContent;
// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent = [...textContent]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph.innerHTML = newTextContent;
  
}

const tl = gsap.timeline({
    ease: "pawer4",
    scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: ".js-text_0 span", // アニメーションが始まるトリガーとなる要素
        start: "top center", // アニメーションが始まる位置
        markers: true, // マーカー表示
      },

    });


    for (let i = 0; i <= 10; i++) {
      tl.fromTo(
        `.js-text_${i} span`,// アニメーションさせる要素
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
      
    }



    gsap.timeline({repeat: -1,repeatDelay: 1,ease:"pawer4"})
    .to(
        ".line",
        {
            duration: 0.75,
            scaleY: 160,
            transformOrigin: "right top",
        }
    )
    .to(".line",{
      pause: true,
    })
    .to(
        ".line",
        {
            duration: 0.75,
            y: 160,
            scaleY: 0,
            transformOrigin: "right top",
        },
    );

    const paragraph_12 = document.querySelector(".h3");
    console.log("h3",paragraph_12)
    // テキストコンテンツを取得
    const textContent_12 = paragraph_12.textContent;
    // テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
    const newTextContent_12 = [...textContent_12]
      .map((char) => `<span>${char}</span>`)
      .join("");
    // 新しい文字列をHTMLに挿入
    paragraph_12.innerHTML = newTextContent_12;

    gsap.fromTo(
        ".h3 span",
        {
            x: -30,
            scaleX: 0,
            transformOrigin: "left top",
        },{
            duration: 0.75,
            x: 0,
            scaleX: 1,
            transformOrigin: "left top",
            ease: "pawer4",
            stagger: 0.02,
        }
    );

  


})