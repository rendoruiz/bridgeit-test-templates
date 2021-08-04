const password = document.getElementById('password');
const confirmPassword = document.getElementById('passwordConfirm');
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    alert('both password fields must be equal!');
  }
});


const createNewOption = (optionValue, optionText) => {
  const option = document.createElement('option');
  option.value = optionValue;
  option.innerText = optionText;
  return option;
}

const canadianProvinces = [
  { initial: 'AB', full: 'Alberta' }, 
  { initial: 'BC', full: 'British Columbia' }, 
  { initial: 'MB', full: 'Manitoba' }, 
  { initial: 'NB', full: 'New Brunswick' }, 
  { initial: 'NL', full: 'Newfoundland and Labrador' }, 
  { initial: 'NW', full: 'Northwest Territories' }, 
  { initial: 'NS', full: 'Nova Scotia' }, 
  { initial: 'NU', full: 'Nunavut' }, 
  { initial: 'ON', full: 'Ontario' }, 
  { initial: 'PE', full: 'Prince Edward Island' }, 
  { initial: 'QC', full: 'Quebec' }, 
  { initial: 'SK', full: 'Saskatchewan' }, 
  { initial: 'YT', full: 'Yukon Territory' }
];

const provinceDropdown = document.querySelector('select#province');
canadianProvinces.forEach((province) => {
  document.querySelector('select#province').append(
    createNewOption(province.initial, province.full)
  );
})

// // birthday variables
const currentDate = new Date();
const currentDateYear = currentDate.getFullYear();

// generate birthday years

for (let year = currentDateYear; year >= currentDateYear - 100; year -= 1) {
  document.getElementById('bdayYear').append(
    createNewOption(year, year)
  );
}

// generate birthday months
const englishMonths = [
  { initial: 'Jan', full: 'January', value: '1' },
  { initial: 'Feb', full: 'February', value: '2' },
  { initial: 'Mar', full: 'March', value: '3' },
  { initial: 'Apr', full: 'April', value: '4' },
  { initial: 'May', full: 'May', value: '5' },
  { initial: 'Jun', full: 'June', value: '6' },
  { initial: 'Jul', full: 'July', value: '7' },
  { initial: 'Aug', full: 'August', value: '8' },
  { initial: 'Sep', full: 'September', value: '9' },
  { initial: 'Oct', full: 'October', value: '10' },
  { initial: 'Nov', full: 'November', value: '11' },
  { initial: 'Dec', full: 'December', value: '12' }
]
const bdayMonth = document.getElementById('bdayMonth');
englishMonths.forEach((month) => {
  bdayMonth.append(
    createNewOption(month.value, month.full)
  );
});

const generateDaysInMonth = (monthDropdown) => {
  const daysInMonth = new Date(currentDateYear, monthDropdown.value + 1, 0).getDate();
  const bdayDay = document.getElementById('bdayDay');

  // remove all options in day filed
  [...bdayDay.children].forEach((day) => {
    bdayDay.remove(day);
  });

  // add days in month
  for (let day = 1; day <= daysInMonth; day += 1) {
    bdayDay.append(
      createNewOption(day, day)
    );
  }
}
generateDaysInMonth(bdayMonth);

// generate birthday days based on the value of month
bdayMonth.addEventListener('change', (e) => {
  generateDaysInMonth(bdayMonth);
});