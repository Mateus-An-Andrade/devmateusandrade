const express = require('express');
const sendEmail = require('./sendEmail');
const app = express()

app.use (express.json());

app.post ('/send-form', async (req,res) =>{
    const {name, email, message} = req.body;

    try{
        await sendEmail(process.env.MAIL_USER, 'Novo Formulário enviado',
            `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`)
            res.status(200).send('E-mail enviado com sucesso!')
    }catch (error){
        res.status(500).send('Erro ao enviar o formulário')
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });