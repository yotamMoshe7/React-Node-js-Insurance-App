const userInputValidation = (zipCode, gender, birthdate, income) => {
  let errors = [];

  // Zipcode validation
  if (zipCode.length !== 5) {
    errors.push('Zipcode can contain exacly 5 digits');
  }

  // Check gender
  if (gender === null) {
    errors.push('Please select gender');
  }

  // Check income
  if (parseInt(income) < 25000) {
    errors.push('Min annual income 25000$');
  }

  // Date validation
  let date = new Date(birthdate);
  if (isNaN(date)) {
    errors.push('Please enter a valid date');
  }
  // Check age
  else {
    let today = new Date();
    let birthdateTemp = new Date(birthdate);
    let age = today.getFullYear() - birthdateTemp.getFullYear();
    let m = today.getMonth() - birthdateTemp.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdateTemp.getDate())) {
      age--;
    }

    if (age < 18 || age > 80) {
      errors.push('Age must be between 18 to 80');
    }
  }

  return errors;
};

module.exports = userInputValidation;
