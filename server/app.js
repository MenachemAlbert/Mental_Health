const express = require('express');
const cors = require('cors');
const User = require('./models/user');
const Doctor = require('./models/doktors')

const { default: mongoose } = require('mongoose');

const mongoURI = 'mongodb+srv://menachem:Aa123456@cluster0.zx2epvv.mongodb.net/kodkod';

async function connectToDB() {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
}

connectToDB();

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {

    res.send("this is response from server")
})

app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username, password: req.body.password })
    console.log(user);
    if (user) {
        return res.send(user);
    }
    res.status(401).json({ error: 'user not found' });
})

app.get('/doktors' , async(req , res )=>{
    let doktors = await Doctor.find()
    console.log(doktors);
    res.send(doktors)

})



app.listen(8080, () => {
    console.log("server is listening on port 8080");
})
