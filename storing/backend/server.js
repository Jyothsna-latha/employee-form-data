const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://bjyothsnalatha:RSPDjrEmC8lL52os@cluster0.bilmpo6.mongodb.net/').then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  employeeId: String,
  fullName: String,
  email: String,
  phoneNumber: String
});

const User = mongoose.model('User', UserSchema);
console.log("schema created");

app.post('/api/users', async (req, res) => {
  console.log("Received data:", req.body);
  try {
    const newUser = new User(req.body);
    /*Create new document
        const newData = new DataModel({
            employeeId,
            fullName,
            email,
            phone
        });*/
    await newUser.save();
    res.status(201).json({data:newUser});
    console.log('stored')
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(7000, () => console.log(`Server running on port 7000`));


