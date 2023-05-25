const ErrorResponse = require("../utils/errorResponse");

// Array para armazenar a pilha de erros
const errorStack = [];

const errorHandler = (err, req, res, next) => {
  let errorCode = "G8-500";
  let statusCode = 500;
  let message = "Erro no servidor";
  let errorSource = "API";

  if (err instanceof ErrorResponse) {
    errorCode = err.errorCode;
    statusCode = err.statusCode;
    message = err.message;
    errorSource = err.errorSource || "API";
  } else if (err.name === "MongoError") {
    errorCode = "G8-400/1";
    statusCode = 400;
    message = "Erro do MongoDB";
    errorSource = "MongoDB";
  }

  // Adicionar erro à pilha
  errorStack.push({
    errorCode,
    statusCode,
    message,
    errorSource,
  });

  res
    .status(statusCode)
    .json({ success: false, errorCode, error: message, errorSource });
};

module.exports = { errorHandler, errorStack };
