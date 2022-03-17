const express = require('express');
const User = require('../modles/User');
const router = express.Router();
//Create a user using : Post "/api/auth". Dosen't require auth


router.post('/', (req,res)=>{
   console.log(req.body);
   res.send(req.body)
   const user = User(req.body);
   user.save()
})
module.exports =router