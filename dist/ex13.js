"use strict";
function filtrarProdutosDisponiveis(produtos) {
    return produtos.filter(produto => produto.emEstoque);
}
// Exemplo de uso:
const listaDeProdutos = [
    { nome: 'Mouse', emEstoque: false },
    { nome: 'Notebook', emEstoque: true },
    { nome: 'Teclado', emEstoque: true },
    { nome: 'monitor', emEstoque: true }
];
const produtosDisponiveis = filtrarProdutosDisponiveis(listaDeProdutos);
console.log(produtosDisponiveis);
