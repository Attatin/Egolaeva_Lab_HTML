function checkFirst() {
    let first = document.getElementById("first").value;
    let regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Данные введены корректно";
        return true;
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "!!!Введите от 2 до 20 символов!!!";
        return false;
    }
}



function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/; 

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Данные введены корректно";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "!!! Введите телефон в формате +7-ХХХ-ХХХ-ХХ-ХХ !!!";
        return false;
    }
}

function checkEmail() {
    let product = document.getElementById("email").value;
    let regex = /^^\S+@\S+\.\S+$/;

    if (regex.test(product)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Данные введены корректно";
        return true;
    }
    else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "!!! Введите больше 8 символов с использованием  @ !!!";
        return false;
    }
}

function checkNumber() {
    let number = document.getElementById("number").value;
    let regex = /^[0-9]{1,12}$/;

    if (regex.test(number)) {
        document.getElementById("number_Check").style.color = "green";
        document.getElementById("number_Check").innerHTML = "Данные введены корректно";
        return true;
    }
    else {
        document.getElementById("number_Check").style.color = "red";
        document.getElementById("number_Check").innerHTML = "!!! Введите от 1 числового символа !!!";
        return false;
    }
}

function outputData() {
    let name = document.getElementById("name").value;
    
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let number = document.getElementById("number").value;

    if (name != "" && email != "" && phone != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML += "<p>Ваша заявка принята к рассмотрению.</p>";
        document.getElementById("summary").innerHTML += "<p>Ваш телефон: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "<p>Ваш E-mail: " + email + ".</br>";
        
        document.getElementById('sendOrder').style.color = "rgb(248, 146, 38)";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Заполните все поля";
        
    }
}