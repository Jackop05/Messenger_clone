const express = require('express');
const router = express.Router();
const Group = require('../../models/Group'); // Adjust the path as necessary

const getGroupData = async (req, res) => {
    const { groupId } = req.body;

    try {
        // Find group by groupId
        const groupData = await Group.findById(groupId);
        if (!groupData) {
            return res.status(404).json({ message: 'Group not found' });
        }

        res.status(200).json({ groupData });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching group data: ' + error.message });
    }
};

module.exports = getGroupData;
