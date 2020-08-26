
function formValidator(form) {
    let inputFields = document.querySelectorAll("input");
    let success = true;
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        inputFields.forEach(function(input){
            input.style.borderBottom = "";
            form.querySelector(".statusMessage." + input.name).innerText = "";
        });
    
        inputFields.forEach(function(input){
            if (input.type == "number" && !/^[0-9]+$/.test(input.value) && input.value != "") {
                input.style.borderBottom = "solid 2px red";
                input.focus();
                form.querySelector(".statusMessage." + input.name).innerText = "der må kun være tal.";
                success = false;
                
            }

            if(input.hasAttribute("required") && input.value == ""){
                input.style.borderBottom = "solid 2px red";
                input.focus();
                form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt.";
                success = false;
                
            }


        });
        if(!success) return
    });
}

export default formValidator;

    /* let statusUsername = document.querySelector(".statusMessage.username")
    let statusPassword = document.querySelector(".statusMessage.password")
    let statusFornavn = document.querySelector(".statusMessage.fornavn")
    let statusEfternavn = document.querySelector(".statusMessage.efternavn")
    let statusAdresse = document.querySelector(".statusMessage.adresse")
    let statusPostnummer = document.querySelector(".statusMessage.postnummer")
    let statusBy = document.querySelector(".statusMessage.by")
    let statusEmail = document.querySelector(".statusMessage.email")

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let status = true;

        statusUsername.innerHTML = "";
        statusPassword.innerHTML = "";
        statusEmail.innerHTML = "";
        statusBy.innerHTML = "";
        statusAdresse.innerHTML = "";
        statusPostnummer.innerHTML = "";
        statusFornavn.innerHTML = "";
        statusEfternavn.innerHTML = "";

        if (form.username.value == "") {
            statusUsername.innerHTML = "du skal vælge et brugernavn"
            status = false;
        }

        if (form.password.value == "") {
            statusPassword.innerHTML = "du skal skrive en adgangskode"
            status = false;
        }
        if (form.fornavn.value == "") {
            statusFornavn.innerHTML = "Skriv dit navn her"
            status = false;
        }
        if (form.efternavn.value == "") {
            statusEfternavn.innerHTML = "Skriv dit efternavn her"
            status = false;
        }
        if (form.adresse.value == "") {
            statusAdresse.innerHTML = "Skriv din adesse her"
            status = false;
        }

        if (form.postnummer.value == "") {
            statusPostnummer.innerHTML = "Skriv dit postnummer her"
            status = false;
        }

        if (form.by.value == "") {
            statusBy.innerHTML = "Skriv by her"
            status = false;
        }
        if (form.email.value == "") {
            statusEmail.innerHTML = "Skriv din E-mail her"
            status = false;
        }


        if (status == false) {
            return
        }
    }); */
    /* 
    
        let form = document.querySelector("form");
        let inputFields = document.querySelectorAll("input");
        let succes = true;
    
        form.addEventListener("submit", function(event){
            event.preventDefault();
            inputFields.forEach(function(input){
                input.style.border="none";
                form.querySelector("statusMessage").innerHTML("");
            })
        }
        
        
        if (input, type == "number" && typeof input.value == NaN) {
            input.style.borderbuttom = "2px red solid";
            input focus();
            form.querySelector("statusMessage").innerHTML = "du skal skrive et tal";
            succes = false;
        } */