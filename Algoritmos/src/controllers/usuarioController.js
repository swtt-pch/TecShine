var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function mostrarCondominio(req, res){
    var usuario = req.body.usuario
    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {
        usuarioModel.mostrarCondominio(usuario)
            .then(function(resultado){
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(function(erro){
                console.log(erro)
            })
    }
    
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    if (resultado.length == 1) {
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
<<<<<<< HEAD
    var razaoSocial = req.body.razaoSocial;
    var cnpj = req.body.cnpj;
    var telefone = req.body.telefone;
    var email = req.body.email;
    var senha = req.body.senha;

    if (razaoSocial == undefined) {
        res.status(400).send("Seu razaoSocial está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    }else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {
        
        usuarioModel.cadastrar(razaoSocial, cnpj, telefone, email, senha)
=======
    var razao_social = req.body.razao_socialServer;
    var cnpj = req.body.cnpjServer;
    var resp = req.body.respServer;
    var telefone = req.body.telefoneServer;
    var cep = req.body.cepServer;
    var endereco = req.body. enderecoServer;
    var numero = req.body.numeroServer;
    var email= req.body.emailServer;
    var senha = req.body.senhaServer;

    if (razao_social == undefined) {
        res.status(400).send("Sua razão social está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else if (resp == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu CEP está undefined!");
    } else if (endereco == undefined) {
        res.status(400).send("Seu endereço está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu CEP está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else {
        
        usuarioModel.cadastrar(razao_social, cnpj, resp, telefone, cep, endereco, numero, email, senha)
>>>>>>> origin
            .then(
                function () {
                    usuarioModel.entrar(email, senha)
                        .then(
                            function(resultado){
                                res.json(resultado[0]);
                            }
                        ).catch(
                            function (erro){
                                console.log(erro)
                                res.status(500).json(erro.sqlMessage);
                            }
                        )
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    mostrarCondominio
}