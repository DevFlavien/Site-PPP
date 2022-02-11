function DateHeure() {
  const date = new Date();
  const année = date.getFullYear();
  let mois = date.getMonth();
  const jour = date.getDate();
  let joursem = date.getDay();
  let heure = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();

  if (heure < 10) { heure = 0 + heure; }

  if (minutes < 10) { minutes = 0 + minutes; }

  if (secondes < 10) { secondes = 0 + secondes; }

  const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const JOURSEM = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  mois = MOIS[mois];
  joursem = JOURSEM[joursem];

  document.querySelector('footer>p').innerHTML = `${joursem} ${jour} ${mois} ${année}/ ${heure}h ${minutes}m ${secondes}s`;
}
DateHeure();
setInterval(DateHeure, 1000);

const petitesimg = document.querySelectorAll('section>a>img');
console.log(petitesimg);

function adminlms() {
  const img = document.createElement('img');
  img.src = 'MEDIAS/lms.png';
  const div = document.querySelector('div:last-child');
  div.appendChild(img);
}
function animateur() {
  const img = document.createElement('img');
  img.src = 'MEDIAS/animateur.png';
  const div = document.querySelector('div:last-child');
  div.appendChild(img);
}
function chefproj() {
  const img = document.createElement('img');
  img.src = 'MEDIAS/chefprojet.png';
  const div = document.querySelector('div:last-child');
  div.appendChild(img);
}
function concepteur() {
  const img = document.createElement('img');
  img.src = 'MEDIAS/concepteur.png';
  const div = document.querySelector('div:last-child');
  div.appendChild(img);
}
function consultant() {
  const img = document.createElement('img');
  img.src = 'MEDIAS/consultant.png';
  const div = document.querySelector('div:last-child');
  div.appendChild(img);
}
function inteweb() {
  const img = document.createElement('img');
  img.src = 'MEDIAS/inte.png';
  const div = document.querySelector('div:last-child');
  div.appendChild(img);
}

function depop() {
  const img = document.querySelector('div>img');
  img.remove(img);
}

petitesimg[0].addEventListener('mouseenter', adminlms);
petitesimg[0].addEventListener('mouseleave', depop);
petitesimg[1].addEventListener('mouseenter', animateur);
petitesimg[1].addEventListener('mouseleave', depop);
petitesimg[2].addEventListener('mouseenter', chefproj);
petitesimg[2].addEventListener('mouseleave', depop);
petitesimg[3].addEventListener('mouseenter', consultant);
petitesimg[3].addEventListener('mouseleave', depop);
petitesimg[4].addEventListener('mouseenter', concepteur);
petitesimg[4].addEventListener('mouseleave', depop);
petitesimg[5].addEventListener('mouseenter', inteweb);
petitesimg[5].addEventListener('mouseleave', depop);
