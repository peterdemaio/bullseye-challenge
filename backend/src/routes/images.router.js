const express = require("express");
const { cloudinary } = require('../../utilities/cloudinary')
const router = express.Router();

router.post('/gallery', async (req, res) => {
    let id = req.body.user_id
    const { resources } = await cloudinary.search.expression
        (`folder:bullseye_challenge/${id}`)
        .sort_by('public_id', 'desc')
        .max_results(12)
        .execute();
    const publicIds = resources.map(file => file.public_id);
    res.send(publicIds);
})

router.post("/upload", async (req, res) => {
    const fileStr = req.body.data
    const user_id = req.body.user_id
    console.log("Here is the user Id", user_id)
    try {
        const uploaded = await cloudinary.uploader.upload(fileStr, {
            upload_preset: `bullseye_challenge`,
            folder: `bullseye_challenge/${user_id}`
        })
        console.log("Uploaded this image: ", uploaded.public_id)
        res.status(200);
        res.json({ msg: uploaded.public_id });
    } catch (e) {
        console.log(e)
        res.status(500).json({ err: 'Somethign went wrong' })
    }
})

router.post("/delete", async (req, res) => {
    imageId = req.body.imageId.replace('bullseye_challenge/', '');
    console.log("You made it to the delete route with", req.body.imageId)
    try {
        const deleted = await cloudinary.uploader.destroy(req.body.imageId)
        console.log("Let's see what this is: ", deleted)
        res.json(deleted)
    } catch (e) {
        console.log(e)
        res.status(500).json({ msg: 'Somethign went wrong', error: e })
    }

})

module.exports = router;