
const x = document.getElementById("creatives");
const menu = document.getElementById('menu');
const mylinks = document.getElementById('mylinks');

menu.addEventListener('click', () => {
  mylinks.classList.toggle('show');
})

menu.addEventListener('click', () => {
  creatives.classList.toggle('hide');
})

