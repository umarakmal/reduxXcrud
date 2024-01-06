const Item = require('../models/item')
exports.create = async (req, res) => {

    try {
        const name = req.body.name
        const position = req.body.position
        const newItem = new Item({
            name: name,
            position: position,
        });

        // Save the new issue to the database
        const result = await newItem.save();
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
};


exports.getAll = async (req, res) => {
    try {
        const allItem = await Item.find({})
        return res.status(200).json(allItem);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.getOneById = async (req, res) => {
    try {
        const id = req.body.id
        const itemById = await Item.findOne({ _id: id })
        return res.status(200).json(itemById);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.updateById = async (req, res) => {
    try {
        const id = req.params.id
        const name = req.body.name
        const position = req.body.position
        const itemById = await Item.findByIdAndUpdate(
            id,
            {
                name,
                position,
            },
            {
                useFindAndModify: false,
            }
        );
        // console.log(itemById);
        const itemById1 = await Item.findOne({ _id: id })
        return res.status(200).json(itemById1);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.deleteById = async (req, res) => {
    try {
        const id = req.params.id
        const itemById = await Item.findByIdAndDelete(id);
        return res.status(200).json(id);
    } catch (err) {
        // console.log(err);
        return res.status(500).json(err);
    }
};