function validateMovie(req, res, next) {
  const { title, year, genre } = req.body;

  if (!title || !year || !genre) {
    return res.status(400).json({
      error: "Campos obrigatórios: title, year e genre"
    });
  }

  if (typeof title !== "string") {
    return res.status(400).json({
      error: "title precisa ser string"
    });
  }

  if (typeof year !== "number") {
    return res.status(400).json({
      error: "year precisa ser número"
    });
  }

  next();
}

export default validateMovie;