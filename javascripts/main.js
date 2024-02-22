document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

document.querySelector('.burger-menu').addEventListener('click', function() {
  this.classList.toggle('open');
  document.querySelector('.menu').classList.toggle('open');
  var menuLinks = document.querySelectorAll('.menu ul li');
  menuLinks.forEach(function(link) {
    link.classList.toggle('fade');
  });
});
