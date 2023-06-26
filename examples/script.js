const closeBtn = document.querySelectorAll(".intro_close_btn"),
    menuBtn = document.querySelector(".menu_btn"),
    continueDesktopBtn = document.querySelector(".intro.desktop .continue_btn"),
    intro = document.querySelector(".intro.desktop"),
    introMobile = document.querySelector(".intro.mobile"),
    introMobileWrapper = document.querySelector(".intro_mobile_wrapper"),
    introMobileSection = document.querySelectorAll(".intro_mobile_section"),
    continueMobileBtn = document.querySelector(".intro.mobile .continue_btn"),
    scene = document.querySelector("a-scene"),
    introAction = localStorage.getItem("intro") === "true";

if (false) {
    hideIntro();
    intro.style.visibility = "hidden";
    introMobile.style.visibility = "hidden";
    menuBtn.style.visibility = "hidden";
} else {
    scene.addEventListener("loaded", showIntro);
    if (window.innerWidth > 768) {
        localStorage.setItem("intro", "true");
    }
}
function introResize() {
    if (window.innerWidth > 768) {
        introMobile.style.visibility = "hidden";
        showIntro();
    } else {
        intro.style.visibility = "hidden";
        hideIntro();
    }
}
introResize();
window.addEventListener("resize", introResize);

closeBtn.forEach((btn) => {
    btn.addEventListener("click", hideIntro);
});
continueDesktopBtn.addEventListener("click", hideIntro);
menuBtn.addEventListener("click", showIntro);
continueMobileBtn.addEventListener("click", function () {
    introMobileWrapper.classList.remove("step-1");
    introMobileWrapper.classList.add("step-2");
});
document.addEventListener("click", function (e) {
    if (window.innerWidth < 768 && e.target != continueMobileBtn) {
        if (introMobileWrapper.className.includes("step-2")) {
            introMobileWrapper.classList.remove("step-2");
            introMobileWrapper.classList.add("step-3");
        }
    }
});
document.querySelector("#start-btn").addEventListener("click", function () {
    hideIntro();
    document.querySelector(".guide_completed").classList.add("active");
    setTimeout(() => {
        document.querySelector(".guide_completed").classList.remove("active");
    }, 1500);
    localStorage.setItem("intro", "true");
});

function showIntro() {
    if (scene.hasLoaded) {
        if (window.innerWidth > 768) {
            intro.classList.add("active");
        } else {
            introMobile.classList.add("active");
        }
    }
}
function hideIntro() {
    intro.classList.remove("active");
    introMobile.classList.remove("active");
}


const display = document.querySelector(".display-name")
const displayBtn = document.querySelector(".display-name .btn")
displayBtn.addEventListener("click"  , ()=>{
    display.style.display = "none"
})









