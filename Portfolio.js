// Smooth Scroll for Navigation Links
document.querySelectorAll(".topbar nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // offset for fixed header
        behavior: "smooth"
      });
    }
  });
});

// Active Link Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".topbar nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active-link");
    }
  });
});

document.getElementById("uploadCV").addEventListener("change", function () {
  if (this.files.length > 0) {
    alert("Uploaded CV: " + this.files[0].name);
  }
});

