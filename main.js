const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("ul li a");
const links2 = document.querySelectorAll("p a");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let clientScrollY = 0;
let totalScrollY = 0;

function updateTotalScrollY(){
  totalScrollY = window.scrollY + clientScrollY;
  console.log(totalScrollY);
}

document.addEventListener('mousemove', (e1) => {
  clientScrollY = e1.clientY;
  updateTotalScrollY();
})
document.addEventListener('scroll', (e) => {
  updateTotalScrollY();
})

// document.addEventListener("mousemove", (e) => {
//     sleep(1000)
//     let x = e.pageX + 4;
//     let y = e.pageY + 4;
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
// })

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

links2.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links2.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

