export const login = (req, res) => {
    const { email, senha } = req.body;

    if (email === "teste@teste.com" && senha === "123456") {
        return res.json({ token: "fake-jwt-token" });
    }

    return res.status(401).json({ mensagem: "Credenciais inválidas" });
};

export const register = (req, res) => {
    const novoUsuario = { id: Date.now(), ...req.body };
    return res.status(201).json(novoUsuario);
};
