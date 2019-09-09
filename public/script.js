/*
Below is a validation for the form and the following elements are validated:
1. The length of username should be between 5 and 12 characters and should not be left empty
2. The length of the password should be between 7 to 12 characters and should not be left empty.
3. Name must be filled and must be of alphabets only.
4.Address is optional but should not be left empty
5.Country field is must be selected .
6.zip code should be numeric only
7.Email must be a valid one
8. sex must be selected
9. Language must  be selected


*/

//This creates a  Validate function which is activated when a user attempts to submit.
const validate = () => {

//This creates a variable "user" assigns  it the value from the userId input field.
    const user = document.getElementById('userId');
//validation for the user field which should not be left empty and should be 5 to 12 characters
if (user.value =='' ){
    user.style.border = '2px solid red';
    document.getElementById('userIdInvalid').style.visibility = 'visible';
}
else if (user.value.length < 5 && user.value.length <= 12 ){
alert('user name too short')
}

else{

}

//This creates a password variable and assigns it a value from  password input field
const password = document.getElementById('pass');

//This validates password field. should not be left empty. 
if (password.value ==''){
    password.style.border = '2px solid red';
    document.getElementById('passwordInvalid').style.visibility = 'visible';
}

//This creates a namevariable and assigns it  value from the name input field.
    const name1 = document.getElementById('name');

//This validates the name field which should not be left empty and must be alphabets only.
if (name1.value ==''){
    name1.style.border = '2px solid red';
    document.getElementById('invalidName').style.visibility = 'visible';
}
else if (/[^A-Za-z]/.test(name1)){
    document.getElementById('alphabet').style.visibility = 'visible';
};

//This creates an address variable and assigns it a value from the address field.
const address = document.getElementById('address');

//validation for the address field
if (address.value ==''){
    address.style.border = '2px solid red';
    document.getElementById('addressOptional').style.visibility = 'visible';
}

//zip variable assigned to the value from zip input field
const zip= document.getElementById('zip');

//validation for zip(numbers only)

if (zip.value ==''){
    zip.style.border = '2px solid red';
    document.getElementById('zipNeeded').style.visibility = 'visible'
}
else if(!/^[0-9]/.test(zip)){
    zip.style.border = '2px solid red;'
    document.getElementById('zip').style.visibility = 'visible';
}

//variable email assigned to the value from email input field
const email = document.getElementById('email');

//validation of the email(must have "@" and ".")
if (email.value ==''){
    email.style.border = '2px solid red';
    document.getElementById('emailneeded').style.visibility = 'visible';
}
else if(!email.value.includes ('@') || !email.value.includes('.')){
  document.getElementById('emailinvalid').style.visibility = 'visible';
}

//variable country assigned to a value from the country field
    const country = document.getElementById('country');
//validation for country(one of the options must be picked.)
if(country.value ==''){
    document.getElementById('countrySelect').style.visibility = 'visible';
};

//variable sexmale and sex female to pick a value from the radio options 

const sexmale = document.getElementById('sexmale');
const sexfemale = document.getElementById('sexfemale');

//validation for sexfemale(one must be picked)
if(!sexmale.checked && !sexfemale.checked ){
    document.getElementById('gender').style.visibility = 'visible';
}

//variables english and nonenglish used to pick a value from the checkboxes
const english = document.getElementById('english');
const nonenglish = document.getElementById('english');
 
//validation for english and non english options

if(!english.checked && !nonenglish.checked ){
    document.getElementById('language').style.visibility = 'visible';
}


 
}