
console.log('connecté !');
const btnRed = document.getElementById('btn-red');
const btnBleu =document.getElementById('btn-bleu');
console.log(btnRed,"Bouton rouge");
let titre = document.getElementById('titre');
let compteur = 0;
let compteur2 = 0;
btnRed.addEventListener('click',function(){
    console.log('cliqué');
    compteur = compteur + 1;
    console.log(compteur,"Compteur après incrémentation");
    titre.innerText = compteur;
});

btnBleu.addEventListener('click',function(){
    console.log('cliqué');
    compteur2 = compteur2 + 1;
    console.log(compteur2, "Compteur Bleu après incrémentation");
})
setTimeout(function(){
    console.log('fin du chrono !')
    btnBleu.remove();
    btnRed.remove();
}, 10000)
