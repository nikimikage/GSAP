window.addEventListener("DOMContentLoaded", () => {
   // 対象の要素を取得
const paragraph = document.querySelectorAll(".js-text");
// console.log(paragraph)

// テキストコンテンツを取得



paragraph.forEach(text => {
    const textContent = text.textContent;
    // console.log("textContent",textContent)

    const newTextContent = [...textContent]
 .map((char) => `<span>${char}</span>`)
.join("");
 //console.log("nweTextContent",newTextContent)
// 新しい文字列をHTMLに挿入
text.innerHTML = newTextContent;
//console.log( "paragraph", paragraph)



    console.log(typeof child)
    gsap.from(
        text.childNodes,{
            autoAlpha: 0,
            y: 20,
            stagger: 0.2,
            ease: "power4",
            scrollTrigger: {
                toggleActions: "play none none reverse",
              trigger: paragraph, // アニメーションが始まるトリガーとなる要素
              start: "top 80%", // アニメーションが始まる位置
              markers: true,
            },
        }
    )
});



gsap.from(
  paragraph, // アニメーションさせる要素
  {
    autoAlpha: 0, // アニメーション後は出現(透過率0)
    y: 20, // 20px上に移動
    stagger: 0.6,// 0.2秒遅れて順番に再生
    ease: "power4",
    scrollTrigger: {
        toggleActions: "play none none reverse",
      trigger: paragraph, // アニメーションが始まるトリガーとなる要素
      start: "top 80%", // アニメーションが始まる位置
      markers: true,
    },
  }
);
})


  