
// Function to validate input amount
const isValidAmount = amount => {
    // Check if the input is a valid number and greater than zero
    return !isNaN(amount) && parseFloat(amount) > 0;
};

const transferAmount = event => {
    event.preventDefault();
    try {
        const getBalance = parseFloat(window.localStorage.getItem('Balance'));
        const transferInput = document.getElementById('amttra').value;
        
        // Validate the input amount
        if (!isValidAmount(transferInput)) {
            throw new Error('Invalid amount. Please enter a valid number greater than zero.');
        }

        const transfer = parseFloat(transferInput);
        
        // Check if the balance is sufficient for the transfer
        if (getBalance >= transfer) {
            const remainingBalance = getBalance - transfer;
            window.localStorage.setItem('Balance', remainingBalance);
            alert('Transaction successful');
            window.location.href="home.html"
        } else {
            alert('Insufficient funds');
        }
    } catch (error) {
        console.error(error.message);
        alert('Transaction failed: ' + error.message);
    }
};

document.getElementById('transferbtn').addEventListener('click', transferAmount);
