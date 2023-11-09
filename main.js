const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("ul li a");
const navlinks = document.querySelectorAll("ul li");

document.addEventListener("mousemove", (e) => {
    let x = e.pageX + 4;
    let y = e.pageY + 4;
    console.log(x,y);
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

// Animation

navlinks.forEach((li, i) => {
    li.style.animationDelay = 0 + i * 140 + "ms";
})