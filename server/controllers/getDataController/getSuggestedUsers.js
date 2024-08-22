const express = require('express');
const router = express.Router();
const User = require('../../models/User'); 



const getSuggestedUsers = async (req, res) => {
    const { userId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const friends = user.friendsIdList;
        const maxDirectFriends = Math.min(friends.length, 5);
        const selectedDirectFriends = shuffleArray(friends).slice(0, maxDirectFriends);

        const friendsOfFriends = [];
        for (let friendId of selectedDirectFriends) {
            const friend = await User.findById(friendId);
            if (friend) {
                const friendsFriends = friend.friendsIdList.filter(f => f !== userId && !friends.includes(f));
                friendsOfFriends.push(...friendsFriends);
            }
        }

        const maxFriendsOfFriends = Math.min(friendsOfFriends.length, 5);
        const selectedFriendsOfFriends = shuffleArray(friendsOfFriends).slice(0, maxFriendsOfFriends);
        const suggestedUserIds = shuffleArray([...selectedDirectFriends, ...selectedFriendsOfFriends]);

        const suggestedUsers = [];
        for (let suggestedUserId of suggestedUserIds) {
            const suggestedUser = await User.findById(suggestedUserId);
            if (suggestedUser) {
                suggestedUsers.push({
                    userId: suggestedUser.userId,
                    profileImage: suggestedUser.profileImage,
                    username: suggestedUser.username
                });
            }
        }

        res.status(200).json({ suggestedUsers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching suggested users: ' + error.message });
    }
};

module.exports = getSuggestedUsers;