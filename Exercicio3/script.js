window.onLoad = function () {
    //Quanfo a página for carregada
};
function vibrar1() {
    console.log("Chamei a função vibrar")
    navigator.vibrate('200');
}
function vibrar2() {
    navigator.vibrate(['200', '300', '500']);
}
function vibrar3() {
    navigator.vibrate(['500', '300', '300', '200']);
}