const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swaggerFile.json'
const reservationsFiles = ['./routes/reservations.js']

const doc = {
    info: {
      version: '1.0.0',
      title: 'API de reservas'
    },
    host: 'localhost:8088', // O host onde sua API está sendo executada
    basePath: '/reservations',
    schemes: ['http', 'https'], // Protocolos utilizados (http, https)
    consumes: ['application/json'],
    produces: ['application/json'],
  };

swaggerAutogen(outputFile, reservationsFiles, doc).then(() => {
    require('./server.js')
})