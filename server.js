const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swaggerFile.json");
const { errorHandler, errorStack } = require("./middleware/errorHandler");
const { configureServer } = require("./config/server-config");

dotenv.config({ path: "./config/config.env" });

connectDB();

const reservations = require("./routes/reservations");

const PORT = process.env.PORT || 8088;

const app = express();

app.use(express.json());

configureServer(app);

app.use("/reservations", reservations);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
