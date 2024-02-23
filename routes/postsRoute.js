const express = require('express');
const { PostsModel } = require('../models/postsModel');

const postsRoute = express.Router();

// POST route to add bulk post data
postsRoute.post('/bulkadd', async (req, res) => {
    try {
        const postData = req.body; 
        const posts = await PostsModel.insertMany(postData);

        return res.status(200).send({ message: "posts added successfully", posts });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
});


postsRoute.get('/checkUserId/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await PostsModel.findOne({ userId });

        if (user) {
            return res.status(200).send({ exists: true, message: "User ID exists in the database" });
        } else {
            return res.status(404).send({ exists: false, message: "User ID does not exist in the database" });
        }
    } catch (error) {
        console.error(error);
        
        return res.status(500).send({ exists: false, message: "Internal Server Error" });
    }
});

module.exports = {postsRoute};
