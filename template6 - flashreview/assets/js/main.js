const password = document.getElementById('password');
const confirmPassword = document.getElementById('passwordConfirm');
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    alert('both password fields must be equal!');
  }
});

// // birthday variables
// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();

// // generate birthday years
// const bdayYear = document.getElementById('bdayYear');
// for (let year = currentYear; year >= currentYear - 100; year -= 1) {
//   const yearOption = document.createElement('option');
//   yearOption.innerText = year;
//   yearOption.value = year;
//   bdayYear.append(yearOption);
// }

// // generate birthday months
// const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const bdayMonth = document.getElementById('bdayMonth');
// shortMonthNames.forEach((monthName, index) => {
//   const monthOption = document.createElement('option');
//   monthOption.innerText = monthName;
//   monthOption.value = index + 1;
//   bdayMonth.append(monthOption);
// });

// // generate birthday days based on the value of month
// bdayMonth.addEventListener('change', (e) => {
//   const daysInMonth = new Date(currentYear, e.target.value + 1, 0).getDate();
//   const bdayDay = document.getElementById('bdayDay');

//   // remove all options in day filed
//   [...bdayDay.children].forEach((day) => {
//     bdayDay.remove(day);
//   });

//   // add days in month
//   for (let day = 1; day <= daysInMonth; day += 1) {
//     const dayOption = document.createElement('option');
//     dayOption.innerText = day;
//     dayOption.value = day;
//     bdayDay.append(dayOption);
//     console.log('added', dayOption);
//   }
// });