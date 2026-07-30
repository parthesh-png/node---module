const jwt = require('jsonwebtoken'); 
const model = require('../model/user')
const User =model.User;
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')

const privateKey = fs.readFileSync(path.resolve(__dirname,'../private.key'),'utf-8')


// CREATE
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);

        var token = jwt.sign({ email: req.body.email }, privateKey,{algorithm:'RS256'});
        const hash = bcrypt.hashSync(req.body.password, 10);
        user.token=token  //Dot (.) means access or create a property on an object.
          
        user.password=hash


        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
};

exports.login = async(req,res)=>{
     try{
       const doc = await User.findOne({email:req.body.email});
       const isAuth = bcrypt.compareSync(req.body.password, doc.password);
         if(isAuth){
            var token = jwt.sign({ email: req.body.email }, privateKey,{algorithm:'RS256'});
             doc.token=token
              await doc.save();
             res.json({ token });
            }else{
                res.sendStatus(401)
            }
  
     }
     catch(err){
        console.log(err)
         res.status(401).json(err)
     }

}