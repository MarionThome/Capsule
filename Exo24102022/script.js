//Exo n°1 : Changer les première et dernière valeur de chaque élément <li>...</li> de toutes les listes non-ordonnées (<ul>) du document ci-dessous : remplacez les par "first" et "last".
const ulist = document.querySelectorAll("ul")
console.log(ulist)

for(let element of ulist){
    element.firstElementChild.textContent = "First"
    element.lastElementChild.textContent = "Last"
}


//Exo n°2 : À partir d'une liste de divers éléments (par exemple : const Array = [ 'robot', 'computer', 'developer', 'rocket', 'science' ]), créer une nouvelle liste <ul> dans laquelle vous injecterez chaque valeur du tableau avec la balise appropriée.

const array = [ 'robot', 'computer', 'developer', 'rocket', 'science' ]

document.body.innerHTML += `<ul class="array"></ul>`

for (let value of array) {
    document.querySelector(".array").innerHTML += `<li>${value}</li>`;
}

//Exo n°3 : Reprenez la liste HTML de l'exercice 1 et créez un algorithme permettant, via le DOM, d'ajouter un id numéroté à chaque balise <li> (en partant de 0 pour le premier, puis 1, et ainsi de suite...).
const lilist = document.querySelectorAll(".addId")
 
for(let i=0; i<lilist.length; i++){
    lilist[i].setAttribute('id', i);
}

