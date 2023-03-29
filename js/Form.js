const form = document.getElementById("formulario")
const userName = document.getElementById("userNAme")
const userEmail = document.getElementById("userEmail")

form.addEventListener ("submit", (e) =>{
    e.preventDefault();

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if(!regUserName.test(userName.value)){
        return console.log("Formato no valido")
    }
    if(!regUserEmail.test(userEmail.value)){
        return console.log("Formato no valido")
    }

    console.log("funciona")
})


