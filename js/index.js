const menu = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const nav = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
