const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')


router.post('/register', (req,res) => {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    
    res.send(user.save())
})

module.exports = router;