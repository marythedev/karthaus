const bcrypt = require("bcrypt");
const User = require("../models/User");

const min = 12;
const max = 18;

function validatePassword(password){
 
    if (password.length < min) {
        return false
      }
    if (password.length > max){
        return false
    }
    
    return true
      
}

async function createUser(req, res) {
    const { username, email, password } = req.body;
  try {
    // Check if username and email are provided
    
    if (!username || !email || !password) {

        return res.status(400).json({ message: "Username, email, and password are required" });
    }

    // Check if username is already taken
    let existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    // Check if email is already registered
    existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Validate password (minimum length)
    valid = validatePassword(password);
    if (valid == false){
        return res.status(400).json({ message: "Password must be between "+ min + " and "+ max + " characters long" });
    }

    const hashedPW = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPW,
    });

    //save to DB
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  createUser,
};

