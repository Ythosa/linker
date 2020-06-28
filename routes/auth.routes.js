const { Router } = require('express')
const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Invalid email address.').isEmail(),
        check('password', 'Password minimum length is 6.')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data during registration.'
            })
        }

        const { email, password } = req.body

        const candidate = await User.findOne({ email })
        if (candidate) {
            return res.status(400).json({ message: 'This user is exist.' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: 'The user is created.' })

    } catch (e) {
        res.status(500).json({ message: "Something went wrong. Try again. :("})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Enter the correct email address.').normalizeEmail().isEmail(),
        check('password', 'Enter the password.').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data when you log in.'
            })
        }

        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password.' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password.' })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )

        res.json({ token, userId: user.id })

    } catch (e) {
        res.status(500).json({ message: "Something went wrong. Try again :("})
    }
})

module.exports = router
