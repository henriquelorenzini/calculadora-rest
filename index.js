const express = require('express');
const { sum } = require('./controllers/calculator')

const app = express();

app.get('/sum/:value1/:value2', function (req, res) {
  const val1 = parseFloat(req.params.value1)
  const val2 = parseFloat(req.params.value2)

  const result = sum(val1, val2)

  res.send({ result });
});

app.listen(3000, function () {
  console.log('Calculadora rodando na porta 3000!');
});