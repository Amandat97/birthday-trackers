const Birthday = require('../models/birthday.model');

const getAllBirthdays = async(req,res) => {
    try{
        const birthdays =await Birthday.find()
        res.json(birthdays)
    } catch(error) {
        console.log(error)
    }
};

const addNewBirthday = async (req, res) => {
    try{
        const birthday = await new Birthday (req.body);
        await birthday.save();
        res.json(birthday);
    }catch(error) {
        console.log(error);
    }
};

const getBirthdayById = async (req, res) => {
    try{
        const birthday= await Birthday.findById(req.params.id);
        res.json(birthday);
    }catch(error) {
        console.log(error)
    }
};

const updateBirthday = async (req, res) => {
    try{
        const birthday= await Birthday.findByIdandUpdate(req.params.id, req.body, {
            new: true,
            runValidators:true
        });
        res.json(birthday);
    }catch(error) {
        console.log(error)
    }
};

const deleteBirthday = async (req, res) => {
    try{
        const birthday= await Birthday.findByIdAndDelete(req.params.id);
        res.json('Birthday deleted.');
    }catch(error) {
        console.log(error)
    }
};

module.exports = {getAllBirthdays,addNewBirthday,getBirthdayById, updateBirthday, deleteBirthday}