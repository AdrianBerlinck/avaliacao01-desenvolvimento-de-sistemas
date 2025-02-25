import leia from 'readline-sync'

class Produto {
    nome: string;
    preco: number;
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}

const produto: Produto[] = [];

export default function atividade06() {
    console.log('Atividade 05');
    let menu;
    while (menu != 0) {
        menu = leia.keyInSelect(['Cadastrar Produto', 'Listar Produtos']) + 1;

        switch (menu) {
            case 1:
                let nome = leia.question('Nome produto: ');
                let preco = leia.questionFloat('Valor produto: ');
                produto.push(new Produto(nome, preco));
                break;
            case 2:

                console.table(produto);
                let preco_total = 0;
                let preco_medio = 0;
                for (var i = 0; i < produto.length; i++) {
                    preco_total += produto[i].preco;
                }

                preco_medio = preco_total/ produto.length;
                console.log(`Preco total dos produtos: ${preco_total}`);
                console.log(`Preco medio dos produtos: ${preco_medio}`);
                break;

        }
    }
}



// Escreva um programa que permita o cadastro de N produtos. Para cada produto, solicite o nome e o preço. Armazene os dados em um vetor de objetos. Ao final, o programa deve:

// Imprimir o nome e o preço de cada produto.
// Calcular e exibir o preço médio dos produtos.
// Calcular e exibir o preço total