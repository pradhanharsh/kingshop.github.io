function pqr()
{
var pwd=document.forms[0].txtpass.value;
var cpwd=document.forms[0].txtConfirmpass.value;
if(pwd==cpwd)
{
return true;
}
else
{
alert("Password Not Matched. Please Check Again.");
return false;
}
}