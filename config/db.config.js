const { configDotenv } = require('dotenv')
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const dotenv = require('dotenv')

dotenv.config()

const Uri = process.env.MONGODB_URI

// Connects to the database
const connect = (Uri) => {
    mongoose.connect(Uri, {
    dbName: "TechSpace",
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('The database has connected successfully!'))
.catch(err => console.log(err,':', err.message))
}

module.exports = connect