const converters = require('./converters.js');

const pCongelCelsius = 0;
const pEbulicaoCelsius = 100;

const pCongelFahrenheit = converters.celsiusToFahrenheit(pCongelCelsius);
const pEbulicaoFahrenheit = converters.celsiusToFahrenheit(pEbulicaoCelsius);
console.log(`O ponto de congelamento da água em Fahrenheit é: ${pCongelFahrenheit}`);
console.log(`O ponto de ebulição da água em Fahrenheit é: ${pEbulicaoFahrenheit}`);