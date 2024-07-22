const User = require('../../models/User');

const getNewFriends = async (req, res) => {
    const { description } = req.params;

    // Validate input
    if (!description) {
        return res.status(400).json({ message: 'Description is required' });
    }

    try {
        // Create a regular expression for case-insensitive partial matching
        const regex = new RegExp(description, 'i');

        // Find users with usernames similar to the description
        const users = await User.find({ username: regex }).limit(20).exec();

        const array = users.map((user) => {
            return user.username;
        })
        res.status(200).json(array);
    } catch (error) {
        res.status(500).json({ message: 'Error finding users: ' + error.message });
    }
};

module.exports = getNewFriends;
