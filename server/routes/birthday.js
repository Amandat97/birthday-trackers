const router = require('express').Router(),
  const Birthday = require('../models/birthday.model');

router.get('/', birthdays, async(req,res) => {
    try{
        const birthdays =await Birthday.find()
        res.json(birthdays)
    } catch(error) {
        console.log(error)
    }
});
router.post('/birthdays', async (req, res) => {
    try{
        const birthday = await new Birthday (req.body);
        await birthday.save();
        res.json(birthday);
    }catch(error) {
        console.log(error);
    }
});

router.get('birthdays/:id', async (req, res) => {
    try{
        const birthday= await Birthday.findById(req.params.id);
        res.json(birthday);
    }catch(error) {
        console.log(error)
    }
});

router.put('birthdays/:id', async (req, res) => {
    try{
        const birthday= await Birthday.findByIdandUpdate(req.params.id, req.body, {
            new: true,
            runValidators:true
        });
        res.json(birthday);
    }catch(error) {
        console.log(error)
    }
});

router.delete('birthdays/:id', async (req, res) => {
    try{
        const birthday= await Birthday.findByIdAndDelete(req.params.id);
        res.json('Birthday deleted.');
    }catch(error) {
        console.log(error)
    }
});

module.exports = router;