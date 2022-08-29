const express = require("express");
const { checkJwt } = require("../authz/check-jwt");
const connection = require('../../utilities/connect');
const { cloudinary } = require('../../utilities/cloudinary')
const router = express.Router();

router.post('/gallery', async (req, res) => {
    let id = req.body.user_id
    const { resources } = await cloudinary.search.expression
        (`folder:bullseye_challenge/${id}`)
        .sort_by('public_id', 'desc')
        .max_results(30)
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
        res.json({ msg: "YEYEAH" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ err: 'Somethign went wrong' })
    }
})

module.exports = router;