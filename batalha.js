function lutar(){
    const classe  = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

    if(!arma){
        log.innerHTML= "você esqueceu de equipar uma arma"
    }
    let dado = Math.floor(Math.random() * 20) + 1
    









}