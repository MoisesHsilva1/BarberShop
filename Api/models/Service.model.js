const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
});

const ServiceModel = mongoose.model('Service', serviceSchema)

module.exports = ServiceModel;