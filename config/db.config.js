const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

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