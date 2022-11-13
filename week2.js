function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function clearError() {
    errors = document.getElementsByClassName('formerror')
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function validateForm() {
    clearError();
    var returnval = true;

    var userid = document.forms['myForm']["fuserid"].value;
    if (userid.length < 5 || userid.length > 12) {
        setError("userid", "*The User Id should be of length between 5 and 12 ");
        returnval = false;
    }
    var password = document.forms['myForm']["fpassword"].value;
    if (password.length < 7 || password.length > 12) {
        setError("password", "*The password should be of length between 7 and 12 ");
        returnval = false;
    }
    var name = document.forms['myForm']["fname"].value;
    for (let b of name) {
        if (b == '1' || b == '2' || b == '3' || b == '4' || b == '5' || b == '6' || b == '7' || b == '8' || b == '9' || b == '$' || b == '@' || b == '!') {
            setError("name", "*The name should not contain numbers and special characters");
            returnval = false;
            break;
        }
    }

    var country = document.forms['myForm']["fcountry"].value;
    if (country == '0') {
        setError("country", "*Please select a valid country");
        returnval = false;
    }

    var Zipcode = document.forms['myForm']["fZipcode"].value;
    for (let b of Zipcode) {
        if (b != '1' || b != '2' || b != '3' || b != '4' || b != '5' || b != '6' || b != '7' || b != '8' || b != '9') {
            setError("Zipcode", "*The Zipcode should contain only numeric value");
            returnval = false;
            break;
        }
    }
    var sex = document.forms['myForm']["fsex"].value;
    if (sex != 'm' && sex != 'f') {
        setError("sex", "*Please select a Gender");
        returnval = false;
    }


    var language = document.forms['myForm']["flanguage"].value;
    for (let b of language) {

        if (b != 'm' || b != 'f') {
            setError("language", "*Please select a language");
            returnval = false;
        }
    }

    return returnval;
}