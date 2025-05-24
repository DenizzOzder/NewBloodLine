document.getElementById("sign_btn").addEventListener("click", function discord(){
     window.open("https://discord.gg/2sSz4aXSpd", "_blank");
});

document.getElementById("info").addEventListener("click", function faq(){
    window.open("https://awakening.wiki/New_Bloodline", "_blank");
});

document.getElementById("forum").addEventListener("click", function forum(){
  window.open("/forum.html","_blank");
})
// Scrolldan sonra navbarı saklamak
let lastScrollTop = 0;
const navbar = document.getElementById("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    // Aşağı kaydırılıyor → gizle
    navbar.classList.add("hide-navbar");
  } else {
    // Yukarı kaydırılıyor → göster
    navbar.classList.remove("hide-navbar");
  }

  lastScrollTop = scrollTop;
});