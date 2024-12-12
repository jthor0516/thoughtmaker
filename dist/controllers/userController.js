import { User, Thought } from '../models/index.js';
// Get all users
export const getUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Get a single user
export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');
        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }
        res.json(user);
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
export const getFriend = async (req, res) => {
    try {
        const friend = await User.findOne({ _id: req.params.userId, 'friends.userId': req.params.friendId }, { $pull: { friends: { friendId: req.params.friendId } } })
            .select('-__v');
        if (!friend) {
            return res.status(404).json({ message: 'No user with that ID' });
        }
        res.json(friend);
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
// create a new user
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// Delete a user and associated apps
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        res.json({ message: 'User and associated thoughts deleted!' });
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
