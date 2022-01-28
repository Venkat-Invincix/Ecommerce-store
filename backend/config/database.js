const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect(process.env.LOCAL_DB_URI)
        .then((con) => {
            console.log(`Connected to MongoDB on host ${con.connection.host}`)
        }).catch((err) => {
            console.log(err.message)
        })
}

module.exports = configureDB