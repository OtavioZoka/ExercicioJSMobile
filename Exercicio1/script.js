/* Crie um código Javascript que solicite a localização de um usuário e imprima no
HTML dentro de uma div chamada Map -->*/

window.onload = function () {

};
function localizar() {
    navigator.geolocation.getCurrentPosition(showPosition);

}
