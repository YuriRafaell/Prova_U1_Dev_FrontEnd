const express = require('express');
const bodyParser =require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    //Testando
    const processedData = 'Olá, ${name}. Seu email é (${email}), aguarde nosso contato para mais informações.'

    res.json({ message: processedData });
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:${port}");
})