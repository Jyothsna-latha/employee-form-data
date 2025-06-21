const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://bjyothsnalatha:RSPDjrEmC8lL52os@cluster0.bilmpo6.mongodb.net/test');
console.log("db connected");
const Employee = mongoose.model('users', {
  employeeId: String,
  fullName: String,
  email: String,
  phoneNumber: String
});

app.get('/api/employees', async (req, res) => {
  const data = await Employee.find();
  res.json(data);
});

app.listen(8000, () => console.log('Server running on port 8000'));
