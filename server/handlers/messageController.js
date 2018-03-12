let Message = require('../models').Message;
module.exports = {

    getMessage: (req, res) => {
        console.log(req.body);
        res.json({a:'a'})

    }
};

