

// const getAccName=()=>{
//     var accountNameDeatails = document.getElementById('accNAME');
//     accountNameDeatails.textContent = "Benificiary Name :"+window.localStorage.getItem('user.fname') 
//     return accountNameDeatails;
// }


// getAccName();

// const getAccNum=()=>{
//     var accountNumber = document.getElementById('accNum');
//     accountNumber.textContent = "Benificiary Account Number :"+window.localStorage.getItem('Account Number')

//     return accountNumber;
// }

// getAccNum();

const getBeneficiaryDetails = () => {
    var beneficiaryJson = window.localStorage.getItem('beneficiary');

    // Check if JSON is available
    if (beneficiaryJson) {
        try {
            var beneficiary = JSON.parse(beneficiaryJson);
            
            // Check if beneficiary object has required properties
            if (beneficiary && beneficiary.beneficiaryname && beneficiary.beneficiaryaccountnumber) {
                const beneficiaryName = beneficiary.beneficiaryname;
                const beneficiaryAccountNumber = beneficiary.beneficiaryaccountnumber;
                
                var beneficiaryNameElement = document.getElementById('accName');
                beneficiaryNameElement.innerText = "Beneficiary Name : "+beneficiaryName;
                      
                var beneficiaryAccountNumberElement = document.getElementById('accNum');
                beneficiaryAccountNumberElement.innerText = "Beneficiary Account Number : "+beneficiaryAccountNumber;
            } else {
                console.error('Invalid beneficiary data');
            }
        } catch (error) {
            console.error('Error parsing beneficiary JSON:', error);
        }
    } else {

        var noDisplay = document.getElementById('manageBeneficiary-wrapper').style.display='none';
        alert('No Beneficiary added');
        window.location.href='AddBenificiary.html';
    }
}   

getBeneficiaryDetails();
