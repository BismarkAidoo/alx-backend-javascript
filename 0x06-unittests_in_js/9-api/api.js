const express = require('express');

<<<<<<< HEAD
const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`Payment methods for cart ${request.params.id}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
=======
const HOST = '127.0.0.1';
const PORT = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]*)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is live at ${HOST}:${PORT}`);
>>>>>>> refs/remotes/origin/main
});

module.exports = app;
