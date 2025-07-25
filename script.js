let headerCont = document.querySelector("header .container");
let topbtn = document.querySelector(".topbtn");
let menuIcon = document.querySelector(".menu i");
let menu = document.querySelector(".menu");
let smallScreen = document.querySelector(".smallScreen");
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topbtn.style.display = "block";
        headerCont.style.paddingTop = "10px"
        headerCont.parentElement.style.backgroundColor = "#1c262f"
        menuIcon.style.color = "#fff";
    } else {
        menuIcon.style.color = "#000";
        topbtn.style.display = "none";
        headerCont.parentElement.style.backgroundColor = "transparent"
        if (window.matchMedia("(max-width: 1024px)").matches) {
            headerCont.style.paddingTop = "10px"
        } else {
            headerCont.style.paddingTop = "30px"
        }
    }
})
menu.addEventListener("click", () => {
    document.body.style
    if (window.scrollY > 0) {
        if (smallScreen.style.right == "170%") {
            smallScreen.style.right = "-8%";
            console.log("if 0 btn click")
        } else {
            smallScreen.style.right = "170%";
            console.log("if 100 btn click")
        }
    }
    else {
        headerCont.parentElement.style.backgroundColor = "#1c262f"
        menuIcon.style.color = "#fff";
        if (smallScreen.style.right == "170%") {
            smallScreen.style.right = "-8%";
            console.log("else 0 btn click")
        } else {
            smallScreen.style.right = "170%";
            console.log("else 125 btn click")
            if (window.scrollY > 0) {
                headerCont.parentElement.style.backgroundColor = "#1c262f"
            } else {
                headerCont.parentElement.style.backgroundColor = "transparent"
                menuIcon.style.color = "#000";
            }
        }
    }

});
topbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
document.querySelector(".bannerSection .bannerContent button").addEventListener("click", () => {
    document.querySelector(".plansSection").scrollIntoView({ behavior: "smooth" });
});
function scrollView(eventclass, viewclass) {
    document.querySelector(`.${eventclass}`).addEventListener("click", () => {
        document.querySelector(`.${viewclass}`).scrollIntoView({ behavior: "smooth" });
    });
}
scrollView("home", "bannerSection");
scrollView("about", "aboutUsSection");
scrollView("services", "serviceSection");
scrollView("plans", "plansSection");
scrollView("contact", "contactSection");
scrollView("link1", "aboutUsSection");
scrollView("link2", "serviceSection");
scrollView("link3", "plansSection");
scrollView("link4", "contactSection");

function smscrollView(smeventclass, smviewclass) {
    document.querySelector(`.${smeventclass}`).addEventListener("click", () => {
        smallScreen.style.right = "170%";
        document.querySelector(`.${smviewclass}`).scrollIntoView({ behavior: "smooth" });
        console.log("button was clicked")
    });
}
smscrollView("smhome", "bannerSection");
smscrollView("smabout", "aboutUsSection");
smscrollView("smservices", "serviceSection");
smscrollView("smplans", "plansSection");
smscrollView("smcontact", "contactSection");
