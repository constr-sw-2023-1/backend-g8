const express = require('express')

// Constants
const PORT = 8088

// App
const app = express()

// body parser
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})
