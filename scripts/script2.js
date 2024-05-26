
const jump_to_top = document.querySelector(".jump-to-top");

jump_to_top.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    });
});

