
window.onload = function () {
    function getData() {
        return {
            nome: document.getElementById('campoNome').value,
            email: document.getElementById('campoEmail').value,
            quantidadeCampus: document.getElementById('campoCampus').value,
            dataFundacao: document.getElementById('campoDataFund').value,
            quantidadeAlunoCampos: document.getElementById('campoQtdCampus').value,
        }
    }
    function saveData() {
        var data = getData();

        if ('localStorage' in window || 'sessionStorage' in window) {

            let reloadInputValue = function () {
                console.log("Session Storage: ", sessionStorage.getItem('myKey'));
                valueInputSession.value = sessionStorage.getItem('myKey') || '';
                console.log("Local Storage: ", localStorage.getItem('myKey'));
                valueInputLocal.value = localStorage.getItem('myKey') || '';
            }

            reloadInputValue();

            sessionStorage.setItem('myKey', data);

            localStorage.setItem('myKey', data);
        }
    }
}
