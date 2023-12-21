const calculadora = require("../models/calculadora.js")

test ("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(4, 4);
  expect(resultado).toBe(8);
});

test ("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test ("somar 'banana' + 100 deveria retornar Error", () => {
  const resultado = calculadora.somar('banana', 100);
  expect(resultado).toBe("Error");
});