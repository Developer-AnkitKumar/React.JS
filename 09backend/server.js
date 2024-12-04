import express from "express";// module.js in Asynchronous process
import mongoose from "mongoose";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/userDB',{
    userNewUrlParser: true,
    useUnifieldTopology: true,
})

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifyCode: { type: String, required: true },
  });
  
  const User = mongoose.model('User', userSchema);
  
  // Register Endpoint
  app.post('/register', async (req, res) => {
    const { email, password, verifyCode } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const user = new User({ email, password: hashedPassword, verifyCode });
      await user.save();
      res.status(201).send('User registered successfully!');
    } catch (error) {
      res.status(400).send('Error registering user: ' + error.message);
    }
  });
  
  // Login Endpoint
  app.post('/login', async (req, res) => {
    const { email, password, verifyCode } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send('User not found!');
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid && user.verifyCode === verifyCode) {
        res.status(200).send('Login successful!');
      } else {
        res.status(401).send('Invalid credentials!');
      }
    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }
  });
  
  app.listen(5000, () => console.log('Server running on port 5000'));