const express = require('express');

<<<<<<< HEAD
const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`Payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (request, response) => {
    response.set("Content-Type", "application/json");
    const payMethods = {
	payment_methods: {
          credit_cards: true,
          paypal: false
	}
    }
    response.send(payMethods);
});

app.post('/login', (request, response) => {
    const userName = request.body.userName;
    if (userName) {
	response.send(`Welcome ${userName}`);
    } else {
	response.status(404).send();
    }
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;

=======
const HOST = '127.0.0.1';
const PORT = 7865;

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]*)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is live at ${HOST}:${PORT}`);
});

module.exports = app;
>>>>>>> refs/remotes/origin/main
