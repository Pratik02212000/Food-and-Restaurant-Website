
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    });
});

// counter design
document.addEventListener("DOMContentLoaded",()=>{
function counter(id, start, end, duration){
    let obj=document.getElementById(id),
    currrent=start,
    range = end - start,
    increment=end > start ? 1: -1,
    step = Math.abs (Math.floor(duration / range)),
    timer = setInterval(()=>{
        currrent+=increment;
        obj.textContent = currrent;
        if(currrent == end){
            clearInterval(timer);
        }
    },step);
}
counter("count1",0,1287,3000);
counter("count2",100,5786,2500);
counter("count3",0,1440,3000);
counter("count4",0,7110,3000);
});