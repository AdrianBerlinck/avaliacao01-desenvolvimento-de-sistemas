import leia from 'readline-sync'

const jogador : Jogador[] = [];
class Jogador {
  nome_jogador: string;

  quantidade_de_gols: number;
  passes_certos: number;
  passes_errados: number;
  pontos: number
  constructor(nome_jogador: string, quantidade_de_gols: number, passes_certos: number, passes_errados: number, pontos : number) {
    this.nome_jogador = nome_jogador;
    this.quantidade_de_gols = quantidade_de_gols;
    this.passes_certos = passes_certos;
    this.passes_errados = passes_errados;
    this.pontos = pontos;

  }

  public nivel_de_jogo(){
    if(this.pontos<50){
      return console.log('Pessima partida');
    }
    if(this.pontos >=50 && this.pontos<100){
      return console.log('Pessima ruim');
    }
    if(this.pontos >=100 && this.pontos<150){
      return console.log('Fez o Basico');
    }
    if(this.pontos >=150 && this.pontos<200){
      return console.log('Foi bem na partida');
    }
    if(this.pontos >200){
      return console.log('Jogou demais');
    }
  }
}





export default function atividade05() {
  console.log('Atividade 05');

let nome = leia.question('Nome do jogador: ');
let quantidade_de_gols = leia.questionInt('Quantidade de gols:');
let passes_certos = leia.questionInt('Quantidade de passes certos: ');
let passes_errados = leia.questionInt('Quantidade de passes errados: ');
let pontos = (quantidade_de_gols*50)+(passes_certos*10)+(passes_errados*-10);

let novo_jogador = new Jogador(nome, quantidade_de_gols, passes_certos, passes_errados, pontos);
jogador.push(novo_jogador);
console.table(jogador);
novo_jogador.nivel_de_jogo();

}
// Você precisa desenvolver um algoritmo para calcular a pontuação de todos os jogadores de um time de futebol. Nesse momento será analisada apenas a quantidade de gols, passes certos e passes errados. (Utilize Vetor e Objeto)

// Cada Gol: 50 Pontos
// Cada Passe Certo: 10 Pontos
// Cada Passe Errado: -5 Pontos
// Você deve solicitar o nome do jogador, quantidade de gols, numero de passes certos e quantidade de passes errados. O algoritmo deve calcular a pontuação de cada jogador e informar se o jogador foi bem ou mal na partida, levando como base a seguinte tabela. No final, deve apresentar o jogador com melhor pontuação. Lembre-se que um time de futebol tem 10 jogadores de linha.

// Pontuação < 50 - Péssima partida.
// Pontuação de 50 até 100 - Partida ruim.
// Pontuação de 100 até 150 - Fez o básico
// Pontuação de 150 até 200 - Foi bem na partida
// Pontuação acima de 200 - Jogou demais
