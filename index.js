
let userArray=JSON.parse(localStorage.getItem("userDataOfSignup"))||[]
  
document.querySelector("#user").addEventListener("click",showUserEntry)
document.querySelector("#firstL").addEventListener("click",showUserLogin)
document.querySelector("#secondL").addEventListener("click",showUserSignup)


let flag=true
function showUserEntry(){    
  if(flag){
    document.querySelector("#userEntry").style.display="block"
    // console.log("yes")
    flag=false
  }else{
    document.querySelector("#userEntry").style.display="none"
    document.querySelector("#signup").style.display="none"
    document.querySelector("#login").style.display="none"
    // console.log("no")  
    flag=true
  }

}

let flag1=true
function showUserLogin(){
  if(flag1){ 
    flag1=false  
    document.querySelector("#signup").style.display="none"
    document.querySelector("#login").style.display="flex"
    // console.log("log")      
  }else{
    flag1=true
    document.querySelector("#login").style.display="none"
//   console.log("nolog")   
  }

} 


let flag2=true
function showUserSignup(){
  if(flag2){ 
    flag2=false  
    document.querySelector("#login").style.display="none"
    document.querySelector("#signup").style.display="flex"   
      }else{
    document.querySelector("#signup").style.display="none"
    // console.log("hellzvsvdsvo")
    flag2=true
  }

} 


document.querySelector(".signupform").addEventListener("submit",displaySignupForm)

function displaySignupForm(e){
e.preventDefault()
if(
    document.querySelector("#emails2").value==""||
    document.querySelector("#mob").value==""  ||
    document.querySelector("#name").value==""  ||
    document.querySelector("#pass2").value==""
){
    alert("Please fill all required input")
} else{
let obj={
    emailsignup:document.querySelector("#emails2").value,
    mobile:document.querySelector("#mob").value,
    names:document.querySelector("#name").value,
    passwordsignup:document.querySelector("#pass2").value
}
alert("Signup sucessful")
userArray.push(obj)
}
localStorage.setItem("userDataOfSignup",JSON.stringify(userArray))

}


document.querySelector(".loginform").addEventListener("submit",displayLoginForm)

function displayLoginForm(e){
  
e.preventDefault()
let flag=false
console.log(userArray)
userArray.map(function(elem){
if(elem.passwordsignup==document.querySelector("#pass1").value && elem.emailsignup==document.querySelector("#email1").value){
  flag=true 
}
})

if(flag){
  alert("sucessful")
}else{
  alert("TryAgain")
}

}



document.querySelector("#hamberg").addEventListener("click",hambergSection)

let flag3=true
function hambergSection(){
  // console.log("hello")
  if(flag3){ 
    flag3=false  
    document.querySelector("#ham").style.display="block"   
      }else{
    document.querySelector("#ham").style.display="none"
    flag3=true
  }


}









