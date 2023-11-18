var express = require("express")
var scr = require("@xct007/frieren-scraper")
var router = express()
//made by NDaaaaaaa

router.get("/instagram", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"url invalid!"})
    const ress = await scr.instagram.v1(url)
    var result = ress
    res.json({
        result
    })
})
router.get("/tiktok", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"url invalid!"})
    const ress = await scr.tiktok.v1(url)
    var result = ress
    res.json({
        result
    })
})
router.get("/ip", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"query invalid!"})
    const ress = await fetch(`https://ipapi.co/${query}/json`);
    const rez = await ress.json()
    var result = rez
    res.json({
        result
    })
})

module.exports = router;
