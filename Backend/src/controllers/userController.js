import userModel from '../models/userModel.js';

// Register Controller
export const registerController = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, profilePic, bio } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash the password using the static method from the schema
    const hashedPassword = await userModel.hashPassword(password);

    // Create a new user using `create`
    const newUser = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      profilePic,
      bio,
    });

    // Generate a token for the user
    const token = newUser.generateToken();

    // Send response with user details and token
    res.status(201).json({
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
        profilePic: newUser.profilePic,
        bio: newUser.bio,
        password: newUser.password, // Include password explicitly if needed
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};



// Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if the user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await userModel.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a token for the user
    const token = user.generateToken();

    // Send response with user details and token
    res.status(200).json({
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        profilePic: user.profilePic,
        bio: user.bio,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};