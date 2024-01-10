var container = document.querySelector(".gallery");
var btn1 = document.getElementById('btn1'); 
var btn2 = document.getElementById('btn2'); 
console.log(btn1)
console.log(btn2)



container.addEventListener("wheel", function (event) {
    event.preventDefault();
    container.scrollLeft = container.scrollLeft + event.deltaY;
});



btn1.addEventListener("click", function () {
    container.style.scrollBehavior = "smooth"; 
    console.log(container.scrollLeft)
    container.scrollLeft += 900;
});



btn2.addEventListener("click", function () {
    container.scrollLeft -= 900;
});
