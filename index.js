const content = document.querySelectorAll(".faq_toggle");
const contItem = document.querySelectorAll(".faq_container_item");
const barsToX = document.querySelector(".nav_btn");
const btn = document.querySelector(".nav_btn_box");
const nav = document.querySelector(".nav");
const navA =  document.querySelectorAll("body > section.nav_bar > div > div > nav > a");
const mainNav = document.querySelector(".main_nav");
const body = document.querySelector("body");


document.querySelectorAll(".tog").forEach((button, index) => {
    button.onclick = (event) => {
        content.forEach((con, ind) => {
            content[ind].classList.add("hidden")
            contItem[ind].classList.remove("expand");
        })
        content[index].classList.toggle("hidden");
        contItem[index].classList.toggle("expand");
    }
  })

  btn.addEventListener("click", function () {
    barsToX.classList.toggle("btn_rotate");
    nav.classList.toggle("nav_toggle");
    mainNav.classList.toggle("box_shadow_transition");
    if (body.style.overflow === "hidden") {
        body.style.overflow = "initial";
      } else {
        body.style.overflow = "hidden";
      }
  });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navA.forEach((a, ind) => {
            navA[ind].style.fontSize = "14px";
        })
        document.querySelector("body > section.nav_bar > div > div > nav > button").style.transform = "scale(.7)";
        document.getElementsByClassName("logo")[0].style.width = "5%";
    } else {
        navA.forEach((a, ind) => {
            navA[ind].style.fontSize = "15px";
        })
        document.querySelector("body > section.nav_bar > div > div > nav > button").style.transform = "scale(1)";
        
        document.getElementsByClassName("logo")[0].style.width = "8%";
    }
}
