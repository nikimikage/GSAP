window.addEventListener("DOMContentLoaded", () => {

const tl = gsap.timeline();

tl.fromTo(
    ".box",{
        clipPath: "polygon(0 0,0 0,0 100%,0 100%)",
    },{
        duration: 0.75,
        clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
        ease: "power4.out",
    }
)

.to(
    ".box",{
        duration: 0.75,
        ease: "power4.out",
    }
)
.to(
    ".rect",{
        x: "105%",
        duration: 1,
        ease: "power4.out",
    },"-=50%",
)

})