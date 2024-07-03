async function listaProdutos() {
    const conexao = await fetch("http://localhost:3030/produtos"); 
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function insereProduto(nome, valor, imagem) {
    const conexao = await fetch("http://localhost:3030/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function excluiProduto(id) {
    const conexao = await fetch(`http://localhost:3030/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    return conexao;
}

export const conectaApi = {
    listaProdutos,
    insereProduto,
    excluiProduto
}
