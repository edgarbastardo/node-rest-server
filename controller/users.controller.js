const { response, request } = require('express');

const usersGet = (req = request, res = response) => {

    const { q, nombre = "no name", apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get api from controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usersPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'Put api from controller',
        id
    });
}

const usersPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post api from controller',
        nombre,
        edad
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch api from controller'
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete api from controller'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersPatch,
    usersDelete
}