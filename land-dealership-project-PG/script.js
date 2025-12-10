const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.08
});

gsap.registerPlugin(ScrollTrigger);

// Use the same selector used to initialize LocomotiveScroll
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
        // for setting scroll position, use the options form to ensure compatibility with loco v4
        return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // let ScrollTrigger know if loco uses transforms (helps with pinning)
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
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
