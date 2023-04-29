
var email= document.getElementById('email')
var btnreg =document.querySelector('.btn4')
var users =[]

btnreg.addEventListener('click',function(){
    if(  validationEmail()==true ){
        var userData = {
            email:email.value,
        }
        users.push({ email}=userData)
        localStorage.setItem('footer',JSON.stringify(users))
        document.getElementById('error').innerHTML = ``
        email.style.display="none"
    }
})


function validationEmail(){
    var regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(regx.test(email.value)==true){
        email.style.display="none"
        btnreg.style.display="none"
        document.getElementById('text88').innerHTML=`<p class="ph-9">Thanks for signing up for the newsletter! We'll be in touch soon.</p>`
        return true

    }
    else{
        document.getElementById('error').innerHTML = `<div class="alert alert-danger">Please enter a valid email address.</div>`

}
}


var palata=document.querySelector('.palata')
var colores=document.querySelector('.colores')
palata.addEventListener('click',function () {
    colores.style.right='0'
    close44.style.opacity='1'
    
})
var close44 =document.querySelector('.close44')
close44.addEventListener('click',function () {
    colores.style.right='-380px'
    close44.style.opacity='0'


    
})

email.getElementById('email')
email.addEventListener('click',function(){
    email.style.borderColor='-red'
})


