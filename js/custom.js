
$(document).ready( assignClickHandler);

function assignClickHandler(){
    $("#submit").on('click', sendMessageToServer);    
}

function sendMessageToServer(){

 
   const message = {
       name:  $("#name").val(),
       email:   $('#email').val(),
       message: $('#message').val()
   }
   const API = "localhost:5000/send"
   fetch(API, {
       method: getComputedStyle,
       body: JSON.stringify(message),
       header: {
           'Contact-Type': 'application/json',
           'Accept': 'application/json'
       }
   }).then(response => response.json()).then(()=> console.log('data sent'))
}