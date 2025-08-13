let empresas = [];

export const listar = (req, res) => {
    res.json(empresas);
};

export const cadastrar = (req, res) => {
    const { nome, cnpj, email } = req.body;

    if (!nome || !cnpj || !email) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    // Valida CNPJ único
    if (empresas.some(e => e.cnpj === cnpj)) {
        return res.status(400).json({ error: "CNPJ já cadastrado" });
    }

    const novaEmpresa = {
        id: empresas.length + 1,
        nome,
        cnpj,
        email,
    };

    empresas.push(novaEmpresa);
    res.status(201).json(novaEmpresa);
};

export const excluir = (req, res) => {
    const id = Number(req.params.id);
    const antes = empresas.length;
    empresas = empresas.filter(e => e.id !== id);

    if (empresas.length === antes) {
        return res.status(404).json({ error: "Empresa não encontrada" });
    }

    res.json({ message: "Conta excluída com sucesso" });
};
