function lutar(){
    const classe  = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

    if(!arma){
        log.innerHTML= "você esqueceu de equipar uma arma"
    }
    let dado = Math.floor(Math.random() * 20) + 1;

    let resultado = `Dado: ${dado} | <strong>${classe}</strong> com <strong>${arma}</strong>`;
    switch(classe){
    case "guerreiro":
        if(arma.toLowerCase()=== "espada"&& dado >5){
            resultado += "<span class= 'sucesso'>SUCESSO: VOCÊ você decapitou o monstro com um golpe!</span"

        }
        
    }


}let dado = Math.floor(Math.random() * 20) + 1;

let resultado = `Dado: ${dado} | <strong>${classe}</strong> com <strong>${arma}</strong>`;
