const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("ul li a");
const navlinks = document.querySelectorAll("ul li");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.screenX + 4;
    let topPosition = e.screenY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
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