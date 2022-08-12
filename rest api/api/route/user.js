const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'user get request'
    })
})

router.post('/signup', (req, res, next) => {

    bcrypt.hash((req.body.password, req.body.confirmPassword), 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                email: req.body.email,
                password: hash,
                confirmPassword: hash,
                phone: req.body.phone
            })
            user.save()
                .then(result => {
                    console.log(result);
                    res.status(200).json({
                        newUser: result
                    })
                })

                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                })

        }
    })

})



router.post('/login', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'user not exist'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (!result) {
                    return res.status(401).json({
                        msg: 'Password matching failed'
                    })
                }

                if (result) {
                    const token = jwt.sign({
                        email : user[0].email,
                        phone : user[0].phone
                    },
                    'this is secret key',{expiresIn:"24h"
                }
                    );
                    res.status(200).json({
                        email:user[0].email,
                        phone:user[0].phone,
                        token:token
                    })
                }
            })
        })
        .catch(err=>{
            res.status(500).json({
                err:err
            })
        })
})

module.exports = router;