const left = document.querySelectorAll(".left");
const right = document.querySelectorAll(".right");
const email = document.querySelector(".email");
email.addEventListener("click", async (e) => {
  await navigator.clipboard.writeText(e.target.innerText);
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  {
    threshold: 0.5,
  }
);

right.forEach((item) => observer.observe(item));
left.forEach((item) => observer.observe(item));
