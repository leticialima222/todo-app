const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('viem engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (requisicao, resposta) => {
    resposta.render('home.handlebars')
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})