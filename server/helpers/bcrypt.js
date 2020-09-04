//bcrypt here
const bcrypt = require('bcryptjs')

function hashPassword(password){
    let salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function comparePassword(password, hashPassword){
    return bcrypt.compareSync(password, hashPassword)
}

module.exports = { hashPassword, comparePassword }