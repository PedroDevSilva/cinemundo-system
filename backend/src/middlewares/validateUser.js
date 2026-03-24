function validateUser(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Campos obrigatórios: name, email e password"
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      error: "Email inválido"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: "Password deve ter no mínimo 6 caracteres"
    });
  }

  next();
}

export default validateUser;