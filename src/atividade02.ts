import leia from 'readline-sync'


export default function atividade02() {
  console.log('Atividade 02');
  var idade: number;

  idade = leia.questionInt('Informe a Idade: ');

  if (idade < 12) {
    console.log('Crianca')
  }
  if (idade >= 12 && idade <= 17) {
    console.log('Adolescente')
  }
  if (idade >= 18 && idade <= 59) {
    console.log('Adulto')
  }
  if (idade >= 60) {
    console.log('Idoso')
  }



}


// Escreva um programa que peça ao usuário a idade de uma pessoa e determine sua categoria com base nas seguintes regras:

// Menor de 12 anos: "Criança"
// De 12 a 17 anos: "Adolescente"
// De 18 a 59 anos: "Adulto"
// 60 anos ou mais: "Idoso"