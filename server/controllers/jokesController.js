const axios = require('axios')

class JokesController {
    static getJoke(req,res,next) {
      
axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(response=>{
      console.log(response)
      res.status(200).json(response.data)
    })
    .catch((error)=>{
      console.log(error)
      next(error)
    })
    }
}

module.exports = JokesController