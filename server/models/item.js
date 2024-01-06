const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
});
// const Item = mongoose.model("Item", ItemSchema);
module.exports = mongoose.model("Item", ItemSchema);