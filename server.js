const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Carrega variáveis de ambiente
dotenv.config({ path: './config/config.env' })

// Conecta no banco
connectDB()

// arquivos de rotas
const reservations = require('./routes/reservations')

const PORT = process.env.PORT || 8088

// App
const app = express()

// body parser
app.use(express.json())

// monta rotas
app.use('/reservations', reservations)

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})
