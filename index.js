let zenék = [];

class zene {
  #zene;
  #length;

  constructor(zene, length) {
    this.#zene = zene;
    this.#length = length;
  }

  get zene() {
    return this.#zene;
  }

  get length() {
    return this.#length;
  }
}

function ossz() {
  var ossz = 0;
  for (let i = 0; i < zenék.length; i++) {
    ossz += zenék[i].length;
  }
  return ossz;
}

function addToList() {
  var data = new zene(
    document.getElementById("zene").value,
    parseInt(document.getElementById("length").value)
  );
  zenék.push(data);
  var sPlaceHolder = ossz();
  document.getElementById("ossz").innerText =
    "A zeneszámok össz hossza: " + sPlaceHolder + " másodperc";
}
function init() {
  document.getElementById("add").addEventListener("click", addToList);
}
document.addEventListener("DOMContentLoaded", init);
console.log(ossz());