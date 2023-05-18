
var SetaDireita = window.document.getElementById('seta-direita');
var Leonardo = window.document.getElementById('leonardo');
var Samantha = window.document.getElementById('samantha');
var Bruna = window.document.getElementById('bruna');
var SetaEsquerda = window.document.getElementById('seta-esquerda');

function RolarParaDireita(){

    Leonardo.style = "display:none";
    Samantha.style = "display:flex; margin-left: -10%; margin-right:4%";
        Bruna.style = "display:flex; margin-left: -10%; margin-right: 68%; margin-bottm: 4%";
        SetaDireita.style = "display: none";
        SetaEsquerda.style = "display: flex; margin-top: 69%; margin-left: 33%; margin-right: -40%";
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex; margin-left: -10%; margin-right:20%";
    Samantha.style = "display:flex; margin-left:-10%; margin-right:30%";
    Bruna.style = "display:none";
    SetaDireita = "display:flex";  
    SetaEsquerda = "display:none";
}
