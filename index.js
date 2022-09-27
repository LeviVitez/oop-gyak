class Zene{
    #nev
    #hossz

constructor(nev,hossz){
    this.#nev=nev;
    this.#hossz=hossz;
}
}

let zenek=[
    Zene.nev,
    Zene.hossz
];

kiir(){
    console.log(user.nev, user.eletkor);
}
function hozzad() {
    let nev= document.getElementById("nev").value;
    let hossz= parseFloat(document.getElementById("hossz").value); 
    console.log(nev)
    console.log(hossz)

    new zenek.nev(nev)
    new zenek.hossz(hossz)

    console.log(zenek.nev)
    console.log(zenek.hossz)

}   