let n = 4181 // Número para delimitar o limite da sequencia fibonnaci calculada, caso contrário ela é calculada sem um fim.

let findN = 4181; // Número á ser procurado na sequencia fibonnaci criada;

let n1 = 0,
    n2 = 1,
    proxN;

proxN = n1+ n2;

const fibonnaciArray = [n1, n2];

while(proxN <= n){
  n1 = n2;
  n2 = proxN;
  fibonnaciArray.push(proxN);
  proxN = n1+ n2;
}

let nExists = false;

for(let i = 0; i < fibonnaciArray.length; i++){
  if(fibonnaciArray[i] === findN){  
    nExists = true;
  }
};


if(nExists){
  console.log(`O número ${findN} existe na sequência fibonnaci`);
}else{
  console.log(`O número ${findN} não existe na sequência fibonnaci`);
}