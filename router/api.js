var express = require("express")
var scr = require("@xct007/frieren-scraper")
var router = express()
//made by NDaaaaaaa
//
router.get("/pinterest", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"url invalid!"})
    const ress = await scr.pinterest.v1(url)
    var result = ress
    res.json({
        result
    })
})
router.get("/storywa-search", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"query invalid!"})
    const ress = await scr.storyWa.search(query)
    var result = ress
    res.json({
        result
    })
})
router.get("/anoboy-search", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"query invalid!"})
    const ress = await scr.anoboy.search(query)
    var result = ress
    res.json({
        result
    })
})
router.get("/anoboy-latest", async (req, res, next) => {
    const ress = await scr.anoboy.latest()
    var result = ress
    res.json({
        result
    })
})
//
router.get("/otakudesu-detail", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"url invalid!"})
    const ress = await scr.otakudesu.detail(url)
    var result = ress
    res.json({
        result
    })
})
router.get("/otakudesu-search", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"query invalid!"})
    const ress = await scr.otakudesu.search(query)
    var result = ress
    res.json({
        result
    })
})
router.get("/otakudesu-latest", async (req, res, next) => {
    const ress = await scr.otakudesu.latest()
    var result = ress
    res.json({
        result
    })
})
//
router.get("/komiku-detail", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"url invalid!"})
    const ress = await scr.komikuId.detail(url)
    var result = ress
    res.json({
        result
    })
})
router.get("/komiku-search", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"query invalid!"})
    const ress = await scr.komikuId.search(query)
    var result = ress
    res.json({
        result
    })
})
router.get("/komiku-latest", async (req, res, next) => {
    const ress = await scr.komikuId.latest()
    var result = ress
    res.json({
        result
    })
})
router.get("/storywa-popular", async (req, res, next) => {
    const ress = await scr.storyWa.popular()
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
