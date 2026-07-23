const mongoose = require('mongoose');
const favoriteSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true},
    placeId: {type: String, required: true, },
    name: {type: String, required: true, },
    address: {type: String, default: "" },
    category: {type: String, required: true, },
    lat: {type: Number, required: true, },
    lon: {type: Number, required: true, },

    },
    {
        timestamps: true
    }
)
favoriteSchema.index = ({user:1, placeId: 1});
module.exports = mongoose.model("Favorite", favoriteSchema);