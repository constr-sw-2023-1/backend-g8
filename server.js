const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swaggerFile.json");
const { errorHandler, errorStack } = require("./middleware/errorHandler");

// Carrega variáveis de ambiente
dotenv.config({ path: "./config/config.env" });

// Conecta no banco
connectDB();

// arquivos de rotas
const reservations = require("./routes/reservations");

const PORT = process.env.PORT || 8088;

// App
const app = express();

// body parser
app.use(express.json());

// monta rotas
app.use("/reservations", reservations);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
