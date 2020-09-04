const axios = require('axios');

class GiphyController {
    static async generate(req, res, next) {
        try {
            console.log(req.body, "<<<<<<<<<<giphycontroller")
            let { activity } = req.body
            const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${activity}&rating=g&lang=en`)
            console.log(response.data, "<<<<<<<<<<<<from giphycontroller")
            res.status(200).json(response.data)
        } catch (error) {
            next(error);
        }
    }
}

module.exports = GiphyController