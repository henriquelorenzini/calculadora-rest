const express = require('express');
const { sum } = require('./controllers/calculator')

const app = express();
const PORT = process.env.PORT || 3000

app.get('/sum/:value1/:value2', (req, res) => {
  const val1 = parseFloat(req.params.value1)
  const val2 = parseFloat(req.params.value2)

  const result = sum(val1, val2)

  res.send({ result });
});

app.listen(PORT, () => {
  console.log(`Calculadora rodando na porta ${PORT}!`);
});