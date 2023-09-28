let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
  menubar.classList.toggle('fa-times');
  mynav.classList.toggle('active');
}
let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
  });
});
