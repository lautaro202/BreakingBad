
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

module.exports = router;