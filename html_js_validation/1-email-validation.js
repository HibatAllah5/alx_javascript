var emailvalidation = document.getElementById('form')
function ValidateEmail(inputText) 
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else
    {
        alert("Please enter a valid email address.");
        document.form1.text1.focus();
        return false;
    }
}
