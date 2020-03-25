const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const groups = require('./routes/api/groups');
const votes = require('./routes/api/votes')
const path = require("path");
const app = express();

//Body parser middlware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));


//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err))


//Test server
app.get('/test', (req, res)=>{
    res.send("Alright!!!")
})

//Use Route
app.use('/api/groups', groups)
app.use('/api/votes', votes)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})


