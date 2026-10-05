const {model, Schema} = require('mongoose')

const authSchema = new Schema({
    name: {
        type: String,
        required: true},

    email: {
        type: String,
        required: true,
        unique: true},

        password: {
        type: String,
        required: true}
        role: {
        type: String,
        required: true
    }
    image : {

        type: String,
       default: "https://res.cloudinary.com/dxjv7gq3f/image/upload/v1690590910/blank-profile-picture-973460_1280_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1.png"
    }
    category: {
        type: String,
        required: true,
    }


} ,{timestamps: true}) 

module.exports = model("authors", authSchema)