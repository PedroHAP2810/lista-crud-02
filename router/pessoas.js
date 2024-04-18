const express = require("express");
const router = express.Router()

const listaPessoas = [
    {
        "id": 1,
        "nome": "Pedro Alves" ,
        "idade": 20,
        "email":"pedro.pessoa@iesb.edu.br",
        "telefone":61983131073
    },
    {   "id": 2,
        "nome": "Aline Alves" ,
        "idade":23,
        "email": "aline2000_sg@hotmail.com",
        "telefone": 61994136271
    }
]

router.get('/pessoas', (req, res) =>{

    res.json(listaPessoas)
})

router.get("/pessoas/:id", (req, res) => {
    const id = req.params.id
    const cadastro = listaPessoas.find (cadastro => cadastro.id == id);
    res.json(cadastro)
})


//Adicionar pessoa

router.post("/pessoas/", (req, res) => {
    const dadosPessoas = req.body

    const novaPessoa = {
        id: listaPessoas.length + 1,
        nome: dadosPessoas.nome,
        idade: dadosPessoas.idade,
        email: dadosPessoas.email,
        telefone: dadosPessoas.telefone
    }
        listaPessoas.push(novaPessoa)
            res.json("Você adicionou uma(s) pessoa(s")

}) 

router.put("/pessoas/:id", (req , res) => {
    const id = req.params.id
    const atualizarPessoa = req.body

    const index =  listaPessoas.findIndex(pessoa => pessoa.id == id);

    const novaPessoa = {
        id:Number(id),
        nome: atualizarPessoa.nome,
        idade: atualizarPessoa.idade,
        email: atualizarPessoa.email,
        telefone: atualizarPessoa.telefone
    }

    listaPessoas[index] = novaPessoa

    res.json({mensagem: "Cadastro Atualizado!"})
})

router.delete("/pessoas/:id", (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);

    listaPessoas.splice(index, 1) //o número é a quantidade que você quer excluir
    res.json({mensagem: "Pessoa excluída com sucesso"})
})
module.exports = router