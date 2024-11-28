import User from '../models/certifiedModel.js';

export const getUserDetails = async (req, res) => {
  try {
    const { username } = req.params;
    let userName = username.toUpperCase();

    const user = await User.findOne({ username:userName });

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    res.render("userProfile", { user });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'An unexpected error occurred.' });
  }
};


export const createUser = async (req, res) => {
  try {
    const { name, username, email, certificateLink } = req.body;

    let userName = username.toUpperCase();

    // Find the user by username
    const existingUser = await User.findOne({ username:userName });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    // Create a new user
    const newUser = new User({ name, username, email, certificateLink });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully!', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'An error occurred while creating the user.' });
  }
};

