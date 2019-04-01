
//ADDING NEW ELEMENT - TODO 

// function addElement () {

// const lastDiv = document.createElement('div');
// lastDiv.className = 'lastDiv'
// document.querySelector('form').insertBefore(lastDiv, )
// const dob = document.createElement('input');
// dob.id = 'dateOfBirth'
// dob.setAttribute('type', 'text');
// const textNode = document.createTextNode('Data urodzenia');
// dob.appendChild(textNode);
// document.querySelector('div.lastDiv').appendChild(dob); }

//


//Creating User object 
function User(name, lastname, email) {
  this.name = name;
  this.lastName = lastname;
  this.email = email;
  this.printName = function() {
    console.log(name)
  }
}

var newUser = new User("test", "test1", "test2")

//Function to validate names
function validateNames (inputElem, errorElem) {

  if (inputElem.value.length >=2 && inputElem.value.length <=25) {
    inputElem.classList.add('validated');
    errorElem.classList.remove('active');
  } else {
    inputElem.classList.remove('validated');
    errorElem.classList.add('active');
  }
  checkAll() 
}

//Function to check if all input fields are fielled in 
function checkAll() {
  if(document.querySelectorAll('.validated').length == 3){
    document.querySelector('#register').disabled = false;
  } else {
    document.querySelector('#register').disabled = true;
  }
}


document.querySelector('#firstName').addEventListener('keyup', function() {
  let firstName = document.querySelector('#firstName');
  let errorName = document.querySelector('.firstname-error');
 
  validateNames(firstName, errorName)

});

document.querySelector('#lastName').addEventListener('keyup', function() {
  
  let lastName = document.querySelector('#lastName');
  let errorName = document.querySelector('.lastname-error');

  validateNames(lastName, errorName)

});

//Function to validate email
document.querySelector('#email').addEventListener('keyup', function() {
  let email = document.querySelector('#email').value;
  let emailName = email.split('@')[0];
  let emailDomain = email.split('@')[1];
  if (email.indexOf("@") > -1 && emailDomain.indexOf(".")> -1 && emailName.length > 0) {
    this.classList.add('validated');
    document.querySelector('.email-error').classList.remove('active')
  } else {
    this.classList.remove('validated');
    document.querySelector('.email-error').classList.add('active')

  
  }
  checkAll() 

});

document.querySelector('#register').addEventListener('click', function() {
  let firstName = document.querySelector('#firstName').value;
  let lastName = document.querySelector('#lastName').value;
  let email = document.querySelector('#email').value
  let newUser = new User(firstName, lastName, email);
  console.log(newUser)

} )

