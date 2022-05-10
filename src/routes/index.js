const route = require('express').Router();

const usersroute = require('./users')

route.use('/users', usersroute)

module.exports = route