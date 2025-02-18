import leia from 'readline-sync'


export default function atividade03() {
  console.log('Atividade 03');

  var jokenpo = leia.keyInSelect(['Pedra', 'Papel', 'Tesoura']) +1;

  var jokenpobot = Math.floor(Math.random()*3) +1
  
  if(jokenpo == jokenpobot){
    console.log('Empate');
  }else{
  if(jokenpo == 1 && jokenpobot == 2){
    console.log('Papel vence pedra!');
    console.log('Vencedor: Bot');
  }
  if(jokenpo == 2 && jokenpobot == 3){
    console.log('Tesoura vence papel!');
    console.log('Vencedor: Bot');
  }
  if(jokenpo == 3 && jokenpobot == 1){
    console.log('Pedra vence Tesoura!');
    console.log('Vencedor: Bot');
  }
  if(jokenpobot == 1 && jokenpo == 2){
    console.log('Papel vence pedra!');
    console.log('Vencedor: Player');
  }
  if(jokenpobot == 2 && jokenpo == 3){
    console.log('Tesoura vence papel!');
    console.log('Vencedor: Player');
  }
  if(jokenpobot == 3 && jokenpo == 1){
    console.log('Pedra vence Tesoura!');
    console.log('Vencedor: Player');
  }
  }

console.log(jokenpobot)

}

// Escreva um programa que simule o jogo "Pedra, Papel e Tesoura". O usuário deve informar sua escolha, e o computador deve fazer uma escolha aleatória. O programa deve determinar o vencedor com base nas seguintes regras:

// Pedra vence Tesoura.
// Tesoura vence Papel.
// Papel vence Pedra.
