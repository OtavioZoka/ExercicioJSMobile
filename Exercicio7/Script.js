window.onload = function () {

};


const URL_TO_FETCH = 'http://api.ipapi.com/186.206.254.170?access_key=26c8106cb8cfd5de731914d06268f1a9';

fetch(URL_TO_FETCH)
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            document.getElementById("ip").innerHTML = data.ip;
        });
    })
    .catch(function (err) {
        console.error('Failed retrieving information', err);
    });