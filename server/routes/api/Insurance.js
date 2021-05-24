const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const userInputValidation = require('../../utility/Utility');
const User = require('../../models/User');

// @route   POST api/users
// @desc    Get life insurance products offers
// @access  Public
router.post('/', async (req, res) => {
  const { zipCode, gender, birthdate, income } = req.body;

  const errors = userInputValidation(zipCode, gender, birthdate, income);

  // In case there are errors
  if (errors.length > 0) {
    console.log(errors);
    return res.status(400).json({ errors: errors });
  }

  try {
    // Check if user exist
    let user = await User.findOne({ zipCode });

    // Update user
    if (user) {
      user.gender = gender;
      user.birthdate = birthdate;
      user.annualIncome = income;
    }
    // Save new user
    else {
      user = new User({
        zipCode,
        gender,
        birthdate,
        income,
      });
    }

    await user.save();

    // Make request to Sproutt server
    let sprouttResult = await axios.post(config.get('sprouttServerURL'), {
      zipcode: zipCode,
      gender: gender,
      birthdate: birthdate,
      income: income,
    });

    res.json({ data: sprouttResult.data });
  } catch (error) {
    res.status(400).send('Server error');
  }
});

module.exports = router;
