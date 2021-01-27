let toggleNavStatus = false;


let toggleNav = function() {
     let getSidebar = document.querySelector(".nav-sidebar");
     let getSidebarUl = document.querySelector(".nav-sidebar ul");
     let getSidebarTitle = document.querySelector(".nav-sidebar span");
     let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

     if (toggleNavStatus === false) {
         getSidebarUl.style.visibility = "visible";
         getSidebar.style.width = "272px";
         getSidebarTitle.style.opacity = "0.4";

         let arrayLength = getSidebarLinks.length;
         for (let i = 0; i < arrayLength; i++) {
             getSidebarLinks[i].style.opacity = "1";
         }

         toggleNavStatus = true;
     }

     else if (toggleNavStatus === true) {
        getSidebar.style.width = "36px";
        getSidebarTitle.style.opacity = "1";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}




let tl = gsap.timeline()
tl.fromTo('.enterButton', {
    x: -1300,
    opactity: 0,
},{
    x: 0,
    opactiy: 1,
    delay: .3,
    duration: 1
}
)
.fromTo('.logo', {
    opacity: 0,
},{
    opacity: .5,
    ease: "power2.inOut",
    duration: .7, x: 1, ease: "steps(4)",
}

);
