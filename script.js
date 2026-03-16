import { calcularImc } from './calculo.js'              //aqui é importado as funções dos calculos realizados com o arquivo calculo.js
import { definirClassificacao } from './calculo.js'     //aqui é importado as funções dos calculos realizados com o arquivo calculo.js

let trs = document.querySelectorAll('tbody tr')         //Seleciona toda as tr - linha que está dentro da tag pai tbody.

for (let index = 0; index < trs.length; index++) {      //aqui é realizado o laço de repetição, que percorre todas as linhas da tabela  

    let colunas = trs[index].children                   //aqui pega todas as colunas(td) de linha atual.

    let altura = parseFloat(colunas[2].textContent)     //aqui é guardado o valor da variavel trasnformado em numero com o parseFloat, no vetor em posicao [2]= altura na tabela.
    let peso = parseFloat(colunas[3].textContent)       //aqui é guardado o valor da variavel trasnformado em numero com o parseFloat, no vetor em posicao [3]= peso na tabela.

    let tdImc = colunas[4]                              //aqui é definido que o valor do Imc será guardado na coluna 4.
    let tdClassificacao = colunas[5]                    //aqui é definido que os dados da Classificação será guardado na coluna 5.

    let calculo = calcularImc(altura, peso)             //aqui é realizado o calculo do imc onde foi importado a função do calculo para este arquivo, e o valor é armazenado na variavel calculo.

    tdImc.textContent = calculo.toFixed(2)              //aqui é printado na coluna imc o resultado do calculo com 2 casas decimais (toFixed(2)).

    definirClassificacao(calculo, tdClassificacao)      //aqui é chamado a função definirClassificacao, e os valores para realização da condição que é realizada no arquivo calculo.js, com auxílio do laço if-Else.
}