document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-btn').addEventListener('click', (event) => {
        event.preventDefault();
        var usernameInput = document.getElementById('username').value;
        var passwordInput = document.getElementById('password').value;
        var error = document.getElementById('error');

        // Check if fields are empty
        if (usernameInput === "" && passwordInput === "") {
            error.textContent = "Please provide  username and password";
        } 
        else if(usernameInput===""){
            error.textContent ="Please provide a username"
        }
        
        else if (passwordInput === "") {
            error.textContent = "Please provide a password";
        } else {
            // Check if user exists in localStorage.
            var userJSON = window.localStorage.getItem('user');
            var user = JSON.parse(userJSON);
            if (!user || !user.Email || !user.Password) {
                error.textContent = "Please Register";
            } else {
                // Check if username and password match
                if (usernameInput === user.Email && passwordInput === user.Password) {
                    window.location.href = 'home.html';
                } else {
                    error.textContent = "Invalid username or password";
                }
            }
        }
    });
});
