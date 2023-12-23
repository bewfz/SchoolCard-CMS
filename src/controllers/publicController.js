const Card = require('../models/card');
exports.CardQuery = async (req, res) => {
    try {
        if(!req.body.count) {
            req.body.count = 10;
        }
        if(req.body.count < 0) {
            req.body.count = 10;
        }
        if(!req.body.page) {
            req.body.page = 1;
        }
        //debug
        console.log(req.body);
        const limit = req.body.count;
        const offset = (req.body.page - 1) * limit;

        const card = await Card.findAll({
            order: [['createDate', 'DESC']],
            limit: limit,
            offset: offset
        });

        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//query by User

//exports.CardQueryByUser = async (req, res) => {