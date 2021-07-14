const body = document.querySelector('body');
const modalActivator = document.getElementById('contact-form');
const modalDeactivator = document.getElementById('success-close');
const modalContainer = document.getElementById('modal-container');
const modalObject = document.getElementById('modal-object');

modalActivator.addEventListener('submit', async (e) => {
  e.preventDefault();
  e.stopPropagation();

  // change button text to Sending...
  const sendButton = document.querySelector('#contact-form input[type=submit]');
  sendButton.value = 'Sending...';

  // api endpoint requirements
  const endpoint = 'https://abdronespecialists.ca/abdrone_api/public/api/sendemail';
  const contactData = getContactData();

  // send data to server
  await fetch(endpoint, {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contactData)
  })
  .then((response) => { 
    // activate success modal if everything went well
    if (response.status === 200) {
      body.classList.remove('modal-close');
      body.classList.add('modal-open', 'modal-init');
    }
  })
  .catch((error) => {
    console.log('error: ', error);
  });

  // change button text back to Send
  sendButton.value = 'Send';
});

modalDeactivator.addEventListener('click', (e) => {
  e.stopPropagation();
  body.classList.replace('modal-open', 'modal-close');
  console.log('close');
});

modalContainer.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target === modalContainer) {
    body.classList.replace('modal-open', 'modal-close');
    console.log('container close');
  }
});


const getContactData = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const contactJson = {
    "name": name,
    "sender": email,
    "subject": subject,
    "body": message
  }

  return contactJson;
};