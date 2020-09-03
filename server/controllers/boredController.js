const axios = require('axios');

class boredController {
  static async randomActivity(req, res, next) {
    try {
      const response = await axios.get('http://www.boredapi.com/api/activity/');
      console.log(response);
      res.status(200).json(response.data);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  static async chooseActivity(req, res, next) {
    try {
      const { type } = req.params;
      const response = await axios.get(`http://www.boredapi.com/api/activity?type=${type}`);
      res.status(200).json(response.data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = boredController;