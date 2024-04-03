const botoes = document.querySelectorAll(".botoes");

for (let i=0; i<botoes.length; i++){
    botoes[i].onclick = function(){

        for (let j=0; j<botoes.length; j++){
            botoes[j].claslist.remove("ativo");
        }

        botoes[i].claslist.add("ativo");


    }



}