//  local storage is a concept in js that provides a way to store key and value pairs 
// in a web browser
// web storage api : browser -> localstorage 

// storing data 
// setItem() 
// when a user is logged in on click of the login button the user data , or pieces of data may be
// saved inside localstorage 
localStorage.setItem('userid', data.userID);
// retrieve data we use the method ,
// getItem 
localStorage.getItem('userid');
// remove data 
// logout -> 
// removeItem 
localStorage.removeItem('userid');
// super remove to remove any piece of info from localstorage
localStorage.clear();

//  check if data is in localstorage
if(localStorage.getItem('userid') !== null){
    // we can get the value 
} else {
    // we can set message that the value is not present 
}