for (let i = 1;i < 5; i++){
  console.log("aguarde");
}
  console.log("urna promta");
  var idade = 18

var idade= prompt("qual sua idade");
  while (idade <18){
  if (idade>=18){
  }else {
    console.log("somento maiores de 18");}
    
    var idade= prompt("digite novamente");
}

console.log("urna eletronica ")
console.log("cadidato a presidente")
console.log("--------------------------------");
console.log("candidato1");
console.log("--------------------------------");
console.log("candidato2");
console.log("--------------------------------");
console.log("candidato3");

var candidato1 = 13;
console.log("--------------------------------");
var candidato2 = 17;
console.log("--------------------------------");
var candidato3 = 51;

do{

var expr = prompt("digite o número do candidato")

if (candidato1 == expr || candidato2 == expr || candidato3 == expr){
  console.log("voto efetuado com sucesso");
} else // if(candidato1 != "13" && candidato2 != "17" && candidato3 != "51")
{
  console.log("candidatos incorreto");
} 

switch(expr){
  case '13':
  console.log("candidato1")
  break
  case '17':
  console.log("candidato2")
  break
  case '51':
  console.log("candidato3")
break
}
} while (expr != "13" && expr != "17" && expr != 51 );


