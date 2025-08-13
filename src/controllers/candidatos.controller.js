let candidatos = [];

export const listar = (req, res) => {
    res.json(candidatos);
};

export const cadastrar = (req, res) => {
    const { nome, cpf, email, tipoContratacao } = req.body;

    if (!nome || !cpf || !email || !tipoContratacao) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    // Valida CPF único
    if (candidatos.some(c => c.cpf === cpf)) {
        return res.status(400).json({ error: "CPF já cadastrado" });
    }

    const novoCandidato = {
        id: candidatos.length + 1,
        nome,
        cpf,
        email,
        tipoContratacao,
    };

    candidatos.push(novoCandidato);
    res.status(201).json(novoCandidato);
};

export const excluir = (req, res) => {
    const id = Number(req.params.id);
    const antes = candidatos.length;
    candidatos = candidatos.filter(c => c.id !== id);

    if (candidatos.length === antes) {
        return res.status(404).json({ error: "Candidato não encontrado" });
    }

    res.json({ message: "Conta excluída com sucesso" });
};
