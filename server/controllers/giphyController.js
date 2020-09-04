const axios = require('axios');

class GiphyController {
    static async generate(req, res, next) {
        try {
            let { activity } = req.query
            console.log(activity)
            // console.log(req.params, req.body, req.headers, req.query, "<<<<<<<<<<giphycontroller")
            // let activity = 'cheeseburger'
            const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${activity}&limit=50&rating=g&lang=en`)
            console.log(response.data.pagination, "<<<<<<<<<<giphycontroller")
            res.status(200).json(response.data)
        } catch (error) {
            next(error);
        }
    }
}

module.exports = GiphyController