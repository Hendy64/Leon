let pageUp = document.getElementById("scroll-up");
window.onscroll = function () {
  console.log(scrollY)
  this.scrollY > 100 ? pageUp.classList.remove('not-active') : pageUp.classList.add('not-active');
};
pageUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});