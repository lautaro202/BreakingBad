
const { Router } = require ('express');
const router = Router()
const fetch = require('node-fetch')
const base = {
    url:'https://www.breakingbadapi.com/api/'
}

router.get('/api/search/random', async (req, res) => {
    const response = await fetch(`${base.url}character/random`)
    const json = await response.json()
    res.json(json)
})

router.get('/api/search/characters', async (req, res) => {
    const response = await fetch(`${base.url}characters?name=${req.query.q}`)
    const json = await response.json()
    res.json(json)
})
router.get('/api/search/random/quote', async (req, res) => {
    const response = await fetch(`${base.url}quote/random`)
    const json = await response.json()
    res.json(json)
})

router.get('/api/search/quotes', async (req, res) => {
    const response = await fetch(`${base.url}quote/random?author=${req.query.q}`)
    const json = await response.json()
    res.json(json)
})

router.get('/api/search/random/dead', async (req, res) => {
    const response = await fetch(`${base.url}random-death`)
    const json = await response.json()
    res.json(json)
})


module.exports = router;