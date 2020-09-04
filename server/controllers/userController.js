//user controller here
const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

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
            console.log('here')
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
            let { id_token } = req.body
            const client = new OAuth2Client(process.env.CLIENT_ID)

            let ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.CLIENT_ID
            })

            const payload = ticket.getPayload()
            let email = payload.email

            let user = await User.findOne({ where: { email} })
            console.log(user)
            if(user) return user
            else{
                let newUser = User.create({
                    email, password: 'googleSign'
                })

                const token = generateToken({
                    id: newUser.id,
                    email: newUser.email
                })

                res.status(201).json({ token })
            }


        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController