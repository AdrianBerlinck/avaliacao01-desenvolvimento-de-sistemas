import leia from 'readline-sync'


export default function atividade01() {
  console.log('Atividade 01');
  var nota: number;

  nota = leia.questionInt('Informe a nota (0-100): ');

  if (nota >= 90 && nota <= 100) {
    console.log('Nota A')
  }
  if (nota >= 80 && nota <= 89) {
    console.log('Nota B')
  }
  if (nota >= 70 && nota <= 79) {
    console.log('Nota C')
  }
  if (nota >= 60 && nota <= 69) {
    console.log('Nota D')
  }
  if (nota >= 0 && nota <= 59) {
    console.log('Nota F')
  }
  if (nota > 100 || nota < 0) {
    console.log('Erro');
  }
}

// Escreva um programa que solicite ao usuário uma nota de 0 a 100. O programa deve imprimir o conceito correspondente com base na tabela abaixo:

// Nota entre 90 e 100: "A"
// Nota entre 80 e 89: "B"
// Nota entre 70 e 79: "C"
// Nota entre 60 e 69: "D"
// Nota abaixo de 60: "F"
// Se a nota inserida for inválida (menor que 0 ou maior que 100), o programa deve imprimir uma mensagem de erro.

