gsap.from(".bannerContent", {
    duration: 1,
    opacity: 0,
    x: -150
});
gsap.from(".broadBandCard1 ,.broadBandCard2 ,.broadBandCard3", {
    scale: 0,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".broadBandCard1 ,.broadBandCard2 ,.broadBandCard3",
        scroller: "body",
        start: "top 70%"
    }
});
gsap.from(".aboutUsContent", {
    x: -150,
    opacity: 0,
    duration: 1,
    markers: true,
    scrollTrigger: {
        trigger: ".aboutUsContent",
        scroller: "body",
        start: "top 30%"
    }
});
gsap.from(".aboutUsSection .container .aboutImage", {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".aboutUsSection .container .aboutImage",
        scroller: "body",
        start: "bottom 92%"
    }
});
gsap.from(".serviceSection .container ul", {
    scale: 0,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".serviceSection .container ul",
        scroller: "body",
        start: "top 90%"
    }
});
