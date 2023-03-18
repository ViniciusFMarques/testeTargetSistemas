let stringInicial = 'target'; //Digite aqui a string á ser invertida
let arrayString = []; 
let stringInvertida = '';

for(let i = 0; i < stringInicial.length; i++){
  arrayString.push(stringInicial[i]);
}

for(let i = (arrayString.length - 1); i >= 0; i--){
  stringInvertida += arrayString[i];
};

console.log(stringInvertida);
