const Reservation = require("../models/Reservation");
const ErrorResponse = require("../utils/errorResponse");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const resourceMock = require("../mocks/resourceMock");
const classMock = require("../mocks/classMock");

const handleExternalError = (err, res) => {
  const externalErrorStack = err.response?.data?.errorStack || [];

  res.locals.externalError = externalErrorStack;
};

//@desc     Lista todas as reservas
//@route    GET /reservations
//@access   Public
exports.getReservations = async (req, res, next) => {
  try {
    let reqQuery = { ...req.query };

    // Create query string
    let queryStr = JSON.stringify(reqQuery);

    // Create query operators
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|like|ne)\b/g,
      (match) => `$${match}`
    );

    const reservations = await Reservation.find(JSON.parse(queryStr));

    res.status(200).json({ success: true, data: reservations });
  } catch (err) {
    next(
      new ErrorResponse(
        "G8-400/1",
        "Não foi possível retornar reservas com seus parametros de pesquisa",
        400
      )
    );
    handleExternalError(err, res);

    next(ErrorResponse);
  }
};

//@desc     Obtém uma reserva específica
//@route    GET /reservations/:id
//@access   Public
exports.getReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return next(
        new ErrorResponse(
          "G8-404/0",
          `Nenhuma reserva com o id ${req.params.id} encontrado`,
          404
        )
      );
    }

    res.status(200).json({ success: true, data: reservation });
  } catch (err) {
    handleExternalError(err, res);

    next(ErrorResponse);
  }
};

//@desc     Cria uma reserva
//@route    POST /reservations
//@access   Public
// prettier-ignore
exports.createReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.create(req.body);
    //resourceMocks.onAny().passThrough();
    //classMocks.onAny().passThrough();

    //const resources = await axios.get(`http://localhost:8084/resources/${resource}`);
    //const classes = await axios.get(`http://localhost:8086/classes/${classId}`);

    res.status(201).json({ success: true, data: reservation });
  } catch (err) {
    next(
      new ErrorResponse(
        "G8-400/0",
        "Não foi possível criar sua reserva, verifique o json",
        400
      )
    );
    handleExternalError(err, res);

    next(ErrorResponse);
  }
};

//@desc     Atualiza todos os atributos de uma reserva
//@route    PUT /reservations/:id
//@access   Public
exports.updateReservation = async (req, res, next) => {
  try {
    let reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    if (!reservation) {
      return next(
        new ErrorResponse(
          "G8-404/0",
          `Nenhuma reserva com o id ${req.params.id} encontrado`,
          404
        )
      );
    }

    const reservationUpdate = await Reservation.findById(req.params.id);

    res.status(200).json({ success: true, data: reservationUpdate });
  } catch (err) {
    handleExternalError(err, res);

    next(ErrorResponse);
  }
};

//@desc     Atualiza alguns atributos de uma reserva
//@route    PATCH /reservations/:id
//@access   Public
exports.patchReservation = async (req, res, next) => {
  try {
    let reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      {
        dateReservationBegin: req.body.dateReservationBegin,
        dateReservationEnd: req.body.dateReservationEnd,
        //dateSchedule: req.body.dateSchedule
      },
      { new: true, runValidators: true }
    );

    if (!reservation) {
      return next(
        new ErrorResponse(
          "G8-404/0",
          `Nenhuma reserva com o id ${req.params.id} encontrada`,
          404
        )
      );
    }

    const reservationUpdate = await Reservation.findById(req.params.id);

    res.status(200).json({ success: true, data: reservationUpdate });
  } catch (err) {
    handleExternalError(err, res);

    next(ErrorResponse);
  }
};

//@desc     Exclui uma reserva
//@route    DELETE /reservations/:id
//@access   Public
exports.deleteReservation = async (req, res, next) => {
  try {
    const reservationDelete = await Reservation.findByIdAndRemove(
      req.params.id
    );

    if (!reservationDelete) {
      return next(
        new ErrorResponse(
          "G8-404/0",
          `Nenhuma reserva com o id ${req.params.id} encontrado`,
          404
        )
      );
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    handleExternalError(err, res);

    next(ErrorResponse);
  }
};
