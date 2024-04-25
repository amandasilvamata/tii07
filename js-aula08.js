/* Criando programa com JQuery */

let pontos = 0;

$(document).ready(function(){
    let divPontos = document.getElementById('recorde');
    divPontos.innerHTML = '<p>Olá o seu recorde é de ' + pontos + ' pontos. </p>';

    $("#addPontos").click(function(){
        pontos++;
        divPontos.innerHTML = '<p> Olá seu recorde subiu para <b>' + pontos + '</b> pontos</p>';
    });
});