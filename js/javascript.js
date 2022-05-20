function trafficLight(cor) {
    const semaforo = document.querySelector('#img_traffic_light') ;
    if (cor == 'red') {
        semaforo.setAttribute('src', 'img/red_light.png');
    }
    else if (cor == 'yellow') {
        semaforo.setAttribute('src', 'img/yellow_light.png');
    }
    else if (cor == 'green') {
        semaforo.setAttribute('src', 'img/green_light.png');
    }
    else {
        semaforo.setAttribute('src', 'img/all_off_light.png');
    }
}

function toFahrenheit() {
    const inputCelcius = document.querySelector("#inputCelcius");
    const valorCelcius = inputCelcius.value;
    
    document.querySelector("#inputFahrenheit").setAttribute('value', valorCelcius * 9/5 + 32)

}

function toCelcius() {
    const inputFahrenheit = document.querySelector("#inputFahrenheit");
    const valorFahrenheit = inputFahrenheit.value;
    document.querySelector('#inputCelcius').setAttribute('value', (valorFahrenheit - 32) * 5/9);
}

function imc() {
    const peso = document.querySelector('#inputPeso').value;
    const altura = document.querySelector('#inputAltura').value;
    let inputIMC = document.querySelector('#inputIMC');
    
    inputIMC.setAttribute('value', peso/(altura**2));

}

let carros  = {marca: 'chevrolet', cor: 'azul', marca: 'honda', cor: 'branco'};
let nomes = ['adam', 'marry', 'joana', 'chris']

for (let i of carros) {
    document.writeln(i)
}
for (let i of nomes) {
    document.writeln(i)
}