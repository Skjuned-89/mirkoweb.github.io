let headerCont = document.querySelector("header .container")
window.addEventListener('scroll', () => {
    // console.log("scrolling")
    if (window.scrollY > 0) {
        headerCont.style.paddingTop = "10px"
        headerCont.parentElement.style.backgroundColor = "#1c262f"
    } else {
        headerCont.style.paddingTop = "30px"
        headerCont.parentElement.style.backgroundColor = "transparent"
    }

})
