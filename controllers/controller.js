const User = require('../models/users')
const Questions = require('../models/questions')
const Question = require('../models/questions')
const { v4: uuidv4 } = require('uuid');

const login_user = (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    User.findOne({email: email}, (err,foundUser)=>{
        if(foundUser.password === password){
            res.send("Login Successful")
        }else{
            res.send(err)
        }
    }).clone()
}

const create_user = async(req,res) => {
    const uid = uuidv4()
    const email = req.body.email
    const fname = req.body.fname
    const lname = req.body.lname
    const state = req.body.state
    const password = req.body.password
    const class_n = req.body.class_n
    const age = req.body.age

    const newUser = new User({
        uid: uid,
        fname: fname,
        lname: lname,
        email: email,
        state: state ,
        password: password,
        class_n: class_n,
        age: age
    })

    await newUser.save((err)=>{
        if(err){
            res.send(err)
        }else{
            res.send("Completed")
        }
    }) 
}

const create_question = async(req,res)=>{
    const uid = uuidv4()
    const question = req.body.question
    const opt_1 = req.body.option_1
    const opt_2 = req.body.option_2
    const opt_3 = req.body.option_3
    const opt_4 = req.body.option_4
    const ans = req.body.answer

    const newQuestion = new Question({
        uid: uid,
        question: question,
        option_1: opt_1,
        option_2: opt_2,
        option_3: opt_3,
        option_4: opt_4,
        answer: ans,
    })

    await newQuestion.save((err)=>{
        if(err){
            res.send(err)
        }else{
            res.send("Completed")
        }
    })
}

const get_question = (req,res)=>{
    Question.find((err,foundQuestions)=>{
        if(!err){
            res.send(foundQuestions)
        }else{
            res.send(err)
        }
    }).clone()
}



module.exports = {
    login_user,
    create_user,
    create_question,
    get_question
}