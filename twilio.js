require('dotenv').config()
const express = require('express')
const cors = require('cors')

const port = 4000;

const app = express()
app.use(cors())


const client = require('twilio')(process.env.AccountSID, process.env.AuthToken)

app.get('/enviarmensagem', (req, res) => {
    // ENVIAR MENSAGEM
    client.messages.create({
        from: 'whatsapp:+14155238886',
        body: '',
        /* to: 'whatsapp:+5512981182262', */
        to: 'whatsapp:+5512992150459',
        /*  to: 'whatsapp:+5512996818930', */
    }).then(data => console.log(data.body))
    console.log('zap')
    res.json('enviado')
})

app.listen(port, () => {
    console.log(`A twilio está rodando na porta ${port}!`);
})