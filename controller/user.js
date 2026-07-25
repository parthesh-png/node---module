
const fs = require('fs')
const model = require('../model/user')
const mongoose = require('mongoose')

// const index = fs.readFileSync('index3.html','utf-8') //not usihng as we r doing with mooongse
const path = require('path')

// const dataPath = path.join(__dirname, '..', 'public', 'data.json');

// const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));


//const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'),'utf-8'))
//const users = data.users  //connect with user data only in json /,scva  

const User = model.User;
const jwt = require('jwt'); 

// CREATE
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json(err);
    }
};

// GET ALL
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET ONE
exports.getUsers = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(404).json(err);
    }
};

// REPLACE (PUT)
exports.replaceUsers = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, overwrite: true }
        );

        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

// UPDATE (PATCH)
exports.updateUsers = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

// DELETE
exports.deleteUsers = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};