const reponse = document.querySelectorAll('label>input');

const button = document.querySelector('button');
const avis = document.querySelector('p:last-child');
let final = '';
console.log(avis);

button.addEventListener('click', () => {
  let resultat = 0;
  if (reponse[0].checked) { resultat += 2; }
  if (reponse[1].checked) { resultat += 1; }
  if (reponse[3].checked) { resultat += 1; }
  if (reponse[4].checked) { resultat += 2; }
  if (reponse[7].checked) { resultat += 2; }
  if (reponse[8].checked) { resultat += 1; }
  if (reponse[10].checked) { resultat += 1; }
  if (reponse[11].checked) { resultat += 2; }
  if (reponse[12].checked) { resultat += 2; }
  if (reponse[13].checked) { resultat += 1; }
  if (reponse[15].checked) { resultat += 1; }
  if (reponse[16].checked) { resultat += 2; }
  if (reponse[18].checked) { resultat += 2; }
  if (reponse[19].checked) { resultat += 1; }
  if (reponse[22].checked) { resultat += 1; }
  if (reponse[23].checked) { resultat += 2; }
  if (reponse[24].checked) { resultat += 2; }
  if (reponse[25].checked) { resultat += 1; }
  if (reponse[28].checked) { resultat += 2; }
  if (reponse[29].checked) { resultat += 1; }
  if (resultat < 5) { final = 'VOUS N\'ETES PAS FAIT POUR CES METIERS, ENVISAGEZ AUTRE CHOSE...'; }
  else if (resultat > 4 && resultat < 10) { final = 'CES METIERS POURRAIENT VOUS CORRESPONDRE, MAIS CREUSEZ DAVANTAGE !'; }
  else if (resultat > 9 && resultat < 16) { final = 'CES METIERS VOUS CORRESPONDENT !'; }
  else { final = 'NE CHERCHEZ PLUS ! CES METIERS VOUS CORRESPONDENT PARFAITEMENT !'; }
  avis.textContent = final;
});
