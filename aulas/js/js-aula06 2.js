/* Manipular Matriz via objeto;
Autor: Gustavo Barros;
Licença: GNU;
Data: 2024/04/10;
Versão: v1.0;
*/

//Criando objeto para manipular a matriz dentro do JS
// Criar uma função para objeto - matrizGrupo
// Esta função só para o Objeto - matrizGrupo
// codigo | nome | dataNascimento
function matrizGrupo(codigo,nome,dataNascimento){
    // O objeto irá ser ele mesmo "this + a instancia e recebe a variavel"
    this.codigo = codigo;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
}
// Criar a matriz de manipulação 'dados' e a variavel de controle de linha "i"
let dados = new Array();// pode criar de outro jeito //esse let dados [];
let i = 0;
// criar as variaveis de entrada
let nome, codigo, dataNascimento;

// Recebendo os dados: codigo, nome , dataNascimento
do{
codigo = i + 1;
nome  = prompt('Digite o nome:');
dataNascimento = prompt('Digite a data de nascimento:');
// Gravando os dados na matriz com uso do objeto
dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
// Incremento de 1 na variavel de controle "i"
i++;
resp = prompt("Digite (1) para colocar um novo úsuario ou (2) para sair")
}while (resp ==1) 

/*
codigo = 2;
nome = "Anderson";
dataNascimento = "11/04/2023";

dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
i++;

codigo = 3;
nome = 'Fabiano';
dataNascimento = '21/03/2023';

dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
i++;
*/
//console.log(dados)

//criar variavel para pegar a quantidade de linhas da matriz "dados"
let j = dados.length;

//criar uma função "exibaDados" para impressão da matriz de uma tabela em html

function exibaDados(){
    let dataGrid;
    dataGrid = 
    "<table><tr><td>Código</td><td>Nome</td>"+
    "<td>Data de Nascimento</td></tr>";
    //Loop de repetição para carregar as linhas da matriz
    for(i=0;i<j;i++){
        dataGrid += ("<tr><td>" + dados[i].codigo + "</td>");
        // Outra forma de atribuir o valor dele mesmo + o proximo
        dataGrid += ('<td>' + dados[i].nome + '</td>');
        dataGrid += ("<td>" + dados[i].dataNascimento + "</td></tr>");
    }
    dataGrid +="<table>";

    let resp = document.getElementById("result");
    //Inserindo o dataGrid na resp para imprimir no HTML
    resp.innerHTML = dataGrid;
}
