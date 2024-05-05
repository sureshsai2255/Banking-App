const registerUser = () => {
    var user = {};
    var formInputs = document.querySelectorAll('#register-form input');
    var error = document.getElementById('register-error');

    // Check if all required fields are filled out
    var allFilled = true;
    formInputs.forEach((input) => {
        if (input.value.trim() === "") {
            allFilled = false;
            return; 
        }
        user[input.name] = input.value;
    });

    if (!allFilled) {
        error.textContent = "Please fill out all the fields";
        return;
    }

    window.localStorage.setItem('user', JSON.stringify(user));
    alert('Registered Successfully');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register').addEventListener('click', registerUser);
});
