gsap.from(".bannerContent", {
    duration: 1,
    opacity: 0,
    x: -150
});
document.querySelectorAll('.broadBandCard1, .broadBandCard2, .broadBandCard3').forEach(card => {
    gsap.from(card, {
        scale: 0,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 80%"
        }
    });
});
gsap.from(".aboutUsContent", {
    x: -150,
    opacity: 0,
    duration: 1,
    markers: true,
    scrollTrigger: {
        trigger: ".aboutUsContent",
        scroller: "body",
        start: "50% 80%"
    }
});
gsap.from(".aboutUsSection .container .aboutImage", {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".aboutUsSection .container .aboutImage",
        scroller: "body",
        start: "70% 80%"
    }
});
gsap.matchMedia().add("(max-width: 1024px)", () => {
    document.querySelectorAll('.serviceSection .container ul li').forEach(item => {
        gsap.from(item, {
            scale: 0,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: item,
                scroller: "body",
                start: "top 90%"
            }
        });
    });
});
gsap.matchMedia().add("(min-width: 1025px)", () => {
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
});

