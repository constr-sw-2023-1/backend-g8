//@desc     Lista todas as reservas
//@route    GET /reservations
//@access   Public
exports.getReservations = async (req, res, next) => {
  res.status(200).json({ success: true })
}
