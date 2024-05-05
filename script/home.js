const logOut = () => {
    // Redirect to login page
    window.location.href = "index.html";
}

document.getElementById('logout').addEventListener('click', logOut);
