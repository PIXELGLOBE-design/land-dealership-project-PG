
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.08
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
});

scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();


let tl = gsap.timeline();

tl.to(".landingTitle", {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power3.out"
})

.to(".landingFadeOut", {
    yPercent: -100,
    duration: 1.4,
    ease: "power4.inOut"
}, "-=0.6")

.to(".landingPage", {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.8
})

.fromTo(".page_inside",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" },
    "-=0.3"
)

.fromTo(".circle",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" },
    "-=0.3"
);