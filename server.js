const express = require('express')

// arquivos de rotas
const reservations = require('./routes/reservations')

// Constants
const PORT = 8088

// App
const app = express()

// body parser
app.use(express.json())

// monta rotas
app.use('/reservations', reservations)

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})
