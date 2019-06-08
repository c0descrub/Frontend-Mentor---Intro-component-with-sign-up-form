function formValidation(){
    const firstName = document.getElementById('fn').Value;
    if(firstName == ""){
        element.classList.add('form_invalid');
        document.getElementById('fn')[0].placeholder='Required field';
    } else {
        element.classList.add('form_valid');

    }
}