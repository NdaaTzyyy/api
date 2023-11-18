var express = require("express")
var scr = require("@xct007/frieren-scraper")
var router = express()
//made by NDaaaaaaa

router.get("/tiktok", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"url invalid!"})
    const ress = await scr.tiktok(url)
    var result = ress
    res.json({
        result
    })
})

module.exports = router;
