/* Crie um código Javascript que solicite a localização de um usuário e imprima no
HTML dentro de uma div chamada Map -->*/

window.onload = function () {

};
function Localizar() {
    navigator.geolocation.getCurrentPosition(posiDoElemento);
    //console.log é feito para imprimir
}
function posiDoElemento(position) {
    console.log(position);
}
