import leia from 'readline-sync'


export default function atividade04() {  
  console.log('Atividade 04');

let num_oculto : number = Math.floor(Math.random()*100);
let chute : number = -1;
while(num_oculto != chute){

  chute = leia.questionInt('Chute um numero de 1-100: ');
  if(chute<num_oculto){
    console.log('O Numero Oculto é maior.');
  }
  if(chute>num_oculto){
    console.log('O Numero Oculto é menor.');
  }
}

console.log(`Parabens voce acertou o Numero Oculto: ${num_oculto}`);



}

// Crie um programa de adivinhação de números. O computador deve escolher aleatoriamente um número entre 1 e 100, e o usuário deve tentar adivinhar. Após cada tentativa, o programa deve informar se o número correto é maior ou menor que a tentativa. O jogo termina quando o usuário acertar o número.