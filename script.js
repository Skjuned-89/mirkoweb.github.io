let headerCont = document.querySelector("header .container")
let topbtn = document.querySelector(".topbtn");
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topbtn.style.display = "block";
        headerCont.style.paddingTop = "10px"
        headerCont.parentElement.style.backgroundColor = "#1c262f"
    } else {
        topbtn.style.display = "none";
        headerCont.style.paddingTop = "30px"
        headerCont.parentElement.style.backgroundColor = "transparent"
    }
})
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
document.querySelector(".link1").addEventListener("click", () => {
    document.querySelector(".aboutUsSection").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".link2").addEventListener("click", () => {
    console.log("serviceSection");
    document.querySelector(".serviceSection").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".link3").addEventListener("click", () => {
    document.querySelector(".plansSection").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".link4").addEventListener("click", () => {
    document.querySelector(".contactSection").scrollIntoView({ behavior: "smooth" });
});
