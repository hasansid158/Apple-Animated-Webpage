window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".trigger1",
        start: "center center",
        scrub: .5,
    }
}
);
tl.set(".iphone-image", {scale: 4, transformOrigin: "center top"});
tl.to(".iphone-image", {duration: 3, scale:2.2, y: "-50%"})
tl.to(".iphone-image", {duration: 3, scale:1, y: "0%"});

const tl2 = new gsap.timeline({
    scrollTrigger: {
        trigger: ".trigger2",
        start: "center center",
        scrub: .5,
        pin: ".trigger2",
    }
});

tl2.to(".iphone1", {duration: 3, x: "-54%"})
.to(".iphone2", {duration: 3, x: "54%"}, 0)
.to([".iphone1-text", ".iphone2-text"], {autoAlpha: 1, duration: 1}, 0)
.to(".iphone1-text", {duration: 3, x: "-28%"}, 0)
.to(".iphone2-text", {duration: 3, x: "25%"}, 0)

.to([".iphone1-text", ".iphone2-text"], {autoAlpha: 0, duration: 1})
.to([".iphone1-img",".iphone2-img"], {duration: 0.5, autoAlpha: 0})
.to(".iphone1-img-behind", {duration: 3, x: "-50%"})
.to(".iphone2-img-behind", {duration: 3, x: "50%"}, "-=3")
.to(".iphone-stick", {duration: 1, autoAlpha: 1, display: "block"}, "-=3")
