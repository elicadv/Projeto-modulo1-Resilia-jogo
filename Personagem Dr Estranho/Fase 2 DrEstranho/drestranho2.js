
function respostaCerta(){
    while(opcao !=1 || opcao!=2 ){
    var opcao = prompt("Digite a resposta certa!")
        if(opcao == 2){
        window.location.href = "C:\\Users\\Resilia\\OneDrive\\Documentos\\Projeto jogo Resilia\\Personagem Dr Estranho\\Fase 3 DrEstranho\\drestranho3.html"
        break;
    }else if (opcao == 1){
        window.location.href = "C:\\Users\\Resilia\\OneDrive\\Documentos\\Projeto jogo Resilia\\Personagem Dr Estranho\\Fase 2 DrEstranho\\gameover.html"
        break;
    }else { 
            alert("Digite uma opção válida, 1 ou 2!")
    }
    }
    }
    