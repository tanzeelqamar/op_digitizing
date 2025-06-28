document.getElementById('register').addEventListener('submit', function(e){
    e.preventDefault()

    let email = document.getElementById('email').value.trim()
     let password = document.getElementById('password').value.trim()

     if(email=="" || password == ""){
        alert("Please fill in the given fields")
     }else{
        window.location.href='./index.html'
     }
})