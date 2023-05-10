
const notification=document.querySelector('.notification')
const QRCodeForm=document.getElementById('QR-form')
const userInput=document.getElementById('user-input')
const API_URL='https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='
const wrapper=document.querySelector('.wrapper')
const QRCodeImg=document.querySelector('.QR-code-img')
let userInputData=''










QRCodeForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(userInput.value===''){
        notification.style.display='block'
        return 
    }

    QRCodeImg.innerHTML=`<img src='${API_URL+userInputData}' />`
   

   


})






userInput.addEventListener('change',(e)=>{
  console.log(e.target.value)
  notification.style.display='none'  
  userInputData=e.target.value
})


