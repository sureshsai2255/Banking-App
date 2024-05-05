const accountJson = window.localStorage.getItem('user');
const user = JSON.parse(accountJson);


const getUserDetails = ()=>{

    var details = document.getElementById('Account-details');


    for(key in user){
        details.innerHTML+=   key+"&nbsp"+" : "+ "&nbsp"+user[key] + "<br>"; 
    }



}

getUserDetails();