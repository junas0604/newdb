const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://junasnazarito:gutib04@cluster0.hogzp7v.mongodb.net/users")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })


const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    }

})

const collection = mongoose.model("AdminAccounts", newSchema)

module.exports = collection