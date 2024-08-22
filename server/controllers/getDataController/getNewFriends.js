const User = require('../../models/User');



const getNewFriends = async (req, res) => {
    const { description } = req.params;
    if (!description) {
        return res.status(400).json({ message: 'Description is required' });
    }

    try {
        const regex = new RegExp(description, 'i');
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