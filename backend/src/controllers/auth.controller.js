import { User } from "../models/user.model";
export const signup = async (req, res) => {
    const { email, fullname, password } = req.body;
try {
    if(password.length < 8)
    {
        return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }
    const user = await User.findOne({ email });
    if(user)
    {
        return res.status(400).json({ message: 'Email already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    
    res.status(201).json({ message: 'User created successfully', user });
} catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
}
};

export const login = (req, res) => {
  res.send('login');
};

export const logout = (req, res) => {
  res.send('logout');
};