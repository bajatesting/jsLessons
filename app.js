//VALIDATION ON SUBMIT

  //Input fields locators
  let firstName = document.querySelector('#firstName');
  let lastName = document.querySelector('#lastName');
  
  
  //Input field errors locators
  let errorLastName = document.querySelector('.lastname-error')
  let errorFirstName = document.querySelector('.firstname-error')
  let errorMail = document.querySelector('.email-error')
  
//Function to validate last and first name input fields 
function validateNames (inputElem, errorElem) {
  if (inputElem.value.length >=2 && inputElem.value.length <= 25) {
       inputElem.classList.add('validated');
       errorElem.classList.remove('active');    
  } else {
       inputElem.classList.remove('validated');
       errorElem.classList.add('active');
  }}
 
  //Function to validate email input field 
  function validateEmail (errorElem) {

  let email = document.querySelector('#email')
  let emailName = email.value.split('@')[0];
  let emailDomain = email.value.split('@')[1];

    if (email.value.indexOf("@") > -1 && emailDomain.indexOf(".") > -1 && emailName.length > 0) {
         
          email.classList.add('validated');
          errorElem.classList.remove('active')
        } else {
          email.classList.remove('validated');
          errorElem.classList.add('active')
    }}

  function checkAll() {
    if(document.querySelectorAll('.validated').length == 3){
    return true;
  } else {
    return false;
  }
}
  //Adding event on submitting form
  function checkForm () {
      validateNames(lastName, errorLastName)
      console.log("last name validated")
      validateNames(firstName, errorFirstName)
      console.log("first name validated")
      validateEmail(errorMail)
      console.log("email validated")
      checkAll()
      console.log("checked all")
      console.log(checkAll())
     } 