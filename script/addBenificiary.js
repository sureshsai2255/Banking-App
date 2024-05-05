
// const addBenificiary = ()=>{
//     try {
//         var benificiaryobj = document.getElementById("benficiaryname").value;
//         if(typeof(benificiaryobj)=== 'string'){
//             return window.localStorage.setItem("Benificiary Name",benificiaryobj);
//         }
//     } catch (error) {
//         console.log(error);
//         throw new Error("Inavlid: enter the correct name")
        
//     }
// }
// const addBenificiaryAccountNumber =()=>{
//     var BenificiaryAccountNumberobj = document.getElementById("benificiaryaccountnumber").value;
//     var reenterBenificiaryAccountNumberobj = document.getElementById("reenterbenificiaryaccountnumber").value;

//     if(BenificiaryAccountNumberobj === reenterBenificiaryAccountNumberobj ){

//         return window.localStorage.setItem("Account Number",BenificiaryAccountNumberobj)
//     }
//     else{
//         alert("Account numbers should be same");
//     }
// }

// const ifsccode = ()=>{
//    try {
//     var ifsccodeobj = document.getElementById("Ifsc").value;
//     return window.localStorage.setItem("IFSC CODE ",ifsccodeobj)
//    } catch (error) {
//     console.log(error);
//     throw new Error("Invalid IFSC code")
//    }
// }
// document.getElementById("submit-btn").addEventListener("click",addBenificiary);
// document.getElementById("submit-btn").addEventListener("click",addBenificiaryAccountNumber);
// document.getElementById("submit-btn").addEventListener("click",ifsccode);


const addBeneficiary =()=>{
    var beneficiary = {};

    // var benficiaryName = document.getElementById('benficiaryname').value;
    // var benficiaryAccountNumber = document.getElementById('benificiaryaccountnumber').value;
    // var reenterBenificiaryAccountNumber  =  document.getElementById('reenterbenificiaryaccountnumber').value;

    var beneficiaryInputs = document.querySelectorAll('#register-beneficiary input')
   

   beneficiaryInputs.forEach((input)=>{
    beneficiary[input.name] = input.value;
   });


   window.localStorage.setItem('beneficiary',JSON.stringify(beneficiary));

   alert('Beneficiary added successfully');

   window.location.href='home.html'



}   


document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('submit-btn').addEventListener('click',addBeneficiary);
})