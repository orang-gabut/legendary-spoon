//user controller here
const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {

    static async login(req, res, next){
        try {
            const { email, password } = req.body

            let user = await User.findOne({
                where: {
                    email
                }
            })

            if(!user) throw { msg: "invalid email or password"}
            let comparePass = comparePassword(password, user.password)
            if(!comparePass) throw { msg: "invalid email or password"}
            
            let payload = {
                id: user.id,
                email: user.email
            }

            let token = generateToken(payload)
            res.status(200).json({ token })

        } catch (err) {
            next(err)
        }
    }

    static async register(req, res, next){
        try {
            const { email, password } = req.body

            let data = await User.create({
                email, password
            })

            res.status(201).json({
                id: data.id,
                email: data.email
             })

        } catch (err) {
            next(err)
        }
    }

    static async googleSign(req, res, next){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = UserController