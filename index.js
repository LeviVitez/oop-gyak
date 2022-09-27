class Zene{
    #nev
    #hossz

constructor(nev,hossz){
    this.#nev=nev;
    this.#hossz=hossz;
}
}

const zenek=[];


function hozzad() {
    let nev= document.getElementById("nev").textContent;
    let hossz= parseFloat(document.getElementById("hossz").value); 
    console.log(nev)
    console.log(hossz)
}   