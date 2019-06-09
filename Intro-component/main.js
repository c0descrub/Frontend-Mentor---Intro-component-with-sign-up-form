const validateEmail = email => {
    var re = /.*@.*\..*/;
    return re.test(String(email).toLowerCase());
}

const inputIsInvalid = (element, customMessage = null) => {
  customMessage = customMessage ? customMessage : 'Required field'
  element.classList.add('form_invalid');
  element.classList.remove('form_valid');
  element.setAttribute('placeholder', customMessage);
}

const inputIsValid = element => {
  element.classList.add('form_valid');
  element.classList.remove('form_invalid');
}

function validateForm(){
    const elements = document.querySelectorAll('.form_input');
    for(element of elements) {
      let value = element.value;
      
      if(element.classList.contains('form_input--email')) {
        if(validateEmail(value)) {
          inputIsValid(element)
        } else {
          inputIsInvalid(element, 'Valid email required')
        }
      } else {
        if(value != ""){
          inputIsValid(element)    
        } else {
          inputIsInvalid(element)    
        } 
      }
    }
}

document.querySelector('.form_body').addEventListener('submit', e => {
  e.preventDefault()
  validateForm()
})