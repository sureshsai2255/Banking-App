const initialBalance = 1000;
window.localStorage.setItem('Balance',initialBalance);
const getBalance =(event)=>{
         
    try {
        event.preventDefault();
        var result = document.getElementById('result');
        const balance = window.localStorage.getItem('Balance');
        if(  balance > 0){
            result.textContent = "Balance : "+balance
            return result
        }
        else{
            result.textContent ="Balance : 0";
        }
    } catch (error) {

        console.log(error);
        throw new Error('Invalid data');
        
    }
}

document.getElementById('checkBalance').addEventListener('click',getBalance);