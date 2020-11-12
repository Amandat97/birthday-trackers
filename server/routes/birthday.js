const router = require('express').Router(),
{
    getAllBirthdays,addNewBirthday,getBirthdayById, updateBirthday, deleteBirthday
} = require('../controllers/birthday');
  
router.get('/birthdays', getAllBirthdays);

router.post('/birthdays', addNewBirthday);

router.get('birthdays/:id', getBirthdayById);

router.put('birthdays/:id', updateBirthday);

router.delete('birthdays/:id', deleteBirthday);

module.exports = router;