const checkbox=document.querySelector('#checkbox');
const password=document.querySelector('#pass');



checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        password.setAttribute('type','text');
    }
    else{
        password.setAttribute('type','password');
    }
});
