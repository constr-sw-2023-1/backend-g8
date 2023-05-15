const Reservation = require('../models/Reservation')

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
  const reservations = await Reservation.findById(req.params.id)

  if (!reservations) {
    next(
      new ErrorResponse(`Nenhuma reserva com o id ${req.params.id} encontrado`, 404)
    )
  }

  res.status(200).json({ success: true, data: reservations })
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
  res.status(200).json({ success: true })
}

//@desc     Atualiza alguns atributos de uma reserva
//@route    PATCH /reservations/:id
//@access   Public
exports.patchReservation = async (req, res, next) => {
  res.status(200).json({ success: true })
}

//@desc     Exclui uma reserva
//@route    DELETE /reservations/:id
//@access   Public
exports.deleteReservation = async (req, res, next) => {
  res.status(200).json({ success: true })
}
