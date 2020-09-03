const axios = require('axios')

class JokesController {
    static async getJoke(req,res,next) {
        try {
          const response = await axios.get('https://jokes.p.rapidapi.com/jod?category=%3Crequired%3E');
          console.log(response);
          res.status(200).json({data:response.data})
        } catch (err) {
          console.error(err);
          next(err)
        }
      }
}

module.exports = JokesController