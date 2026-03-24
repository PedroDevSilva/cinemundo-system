function validateSession(req, res, next) {
  const { movieId, room, date } = req.body;

  if (!movieId || !room || !date) {
    return res.status(400).json({
      error: "Campos obrigatórios: movieId, room e date"
    });
  }

  if (typeof room !== "number") {
    return res.status(400).json({
      error: "room precisa ser número"
    });
  }

  next();
}

export default validateSession;