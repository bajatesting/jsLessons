

document.querySelector('#register').addEventListener('click', function() {
  let firstName = document.querySelector('#firstName').value;
  let lastName = document.querySelector('#lastName').value;
  let email = document.querySelector('#email').value;
  
  // firstName - 2-25 znaków
  if (firstName.length >=2 && firstName.length <=25) {
    alert('Name accepted');
  } else {
    alert('Name is too long');
  }
  
  if (typeof lastName == 'string') {
//     alert('Podana wartosc jest stringiem');
  }
  
  if (typeof email == 'string') {
//     alert('Podana wartosc jest stringiem');
  }
  
});