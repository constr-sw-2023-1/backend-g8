const Reservation = require('../models/Reservation')
const ErrorResponse = require('../utils/errorResponse')

//@desc     Lista todas as reservas
//@route    GET /reservations
//@access   Public
exports.getReservations = async (req, res, next) => {
  const reservations = await Reservation.find()

  res.status(200).json({ success: true, data: reservations })
}

//@desc     Obtém uma reserva específica
//@route    GET /reservations/:id
//@access   Public
exports.getReservation = async (req, res, next) => {
  const reservation = await Reservation.findById(req.params.id)

  if (!reservation) {
    next(
      new ErrorResponse(
        `Nenhuma reserva com o id ${req.params.id} encontrado`,
        404
      )
    )
  }

  res.status(200).json({ success: true, data: reservation })
}

//@desc     Cria uma reserva
//@route    POST /reservations
//@access   Public
exports.createReservation = async (req, res, next) => {
  const reservation = await Reservation.create(req.body)

  res.status(201).json({ success: true, data: reservation })
}

//@desc     Atualiza todos os atributos de uma reserva
//@route    PUT /reservations/:id
//@access   Public
exports.updateReservation = async (req, res, next) => {
  let reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, 
    { new: true, runValidators: true })

  if (!reservation) {
    next(
      new ErrorResponse(`Nenhuma reserva com o id ${req.params.id} encontrado`, 404)
    )
  }

  const reservationUpdate = await Reservation.findById(req.params.id)

  res.status(200).json({ success: true, data: reservationUpdate })
}

//@desc     Atualiza alguns atributos de uma reserva
//@route    PATCH /reservations/:id
//@access   Public
exports.patchReservation = async (req, res, next) => {
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
      new ErrorResponse(`Nenhuma reserva com o id ${req.params.id} encontrada`, 404)
    );
  }

  const reservationUpdate = await Reservation.findById(req.params.id)

  res.status(200).json({ success: true, data: reservationUpdate });
};


//@desc     Exclui uma reserva
//@route    DELETE /reservations/:id
//@access   Public
exports.deleteReservation = async (req, res, next) => {
  const reservationDelete = await Reservation.findByIdAndRemove(req.params.id)

  if (!reservationDelete) {
    next(
      new ErrorResponse(
        `Nenhuma reserva com o id ${req.params.id} encontrado`,
        404
      )
    )
  }

  res.status(200).json({ success: true, data: {} })
}
