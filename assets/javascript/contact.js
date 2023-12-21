function validate()
{

    var name= document.getElementById('entername').value;
    var email= document.getElementById('enteremail').value;
    var phone= document.getElementById('enterphone').value;
    var msg =document.getElementById('message').value;
    

    if (name == '') {
        alert("Enter the name");
        return false;
      }
      if (name.length <= 2 || name.length > 10) {
        alert("Name is Invalid");
        return false;
      }

      if (email == '') {
        alert("Enter the email");
        return false;
      }
      

      if (phone == '') {
        alert("Please enter the phone number");
        return false;
      }

      if (phone.length != 10) {
        alert("Phone number should be 10 digi");
        return false;
      }


      if(msg=='')
      {
        alert("Please enter some message");
        return false;
      }


     



    //   if (name === '' || email === '' || phone === ''|| msg ==='') {
    //     alert('Please fill in all required fields.');
        
    //     return false; 
    //   }

      

    //   return true;
      
}