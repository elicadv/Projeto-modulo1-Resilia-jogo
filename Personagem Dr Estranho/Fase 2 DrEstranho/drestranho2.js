
function respostaCerta(){
while(opcao !=1 || opcao!=2 ){
var opcao = prompt("Digite a resposta certa!")
    if(opcao == 2){
    window.location.href = "file:///C:/Users/Resilia/OneDrive/Documentos/Projeto%20jogo%20Resilia/Personagem%20Dr%20Estranho/Fase%203%20DrEstranho/drestranho3.html"
    break;
}else if (opcao == 1){
    window.location.href = "file:///C:/Users/Resilia/OneDrive/Documentos/Projeto%20jogo%20Resilia/Personagem%20Dr%20Estranho/Fase%202%20DrEstranho/gameover.html"
    break;
}else { 
        alert("Digite uma opção válida, 1 ou 2!")
}
}
}
