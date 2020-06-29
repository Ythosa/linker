const { Router } = require('express')
const Link = require('../models/Link')
const router = Router()

router.post('/generate', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: "Something went wrong. Try again. :(" })
    }
})

router.get('/', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: "Something went wrong. Try again. :(" })
    }
})

router.get('/:id', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: "Something went wrong. Try again. :(" })
    }
})

module.exports = router
