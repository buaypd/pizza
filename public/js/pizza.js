document.getElementById("pizza-form").onsubmit = () => {
    let isVaild = true;
    clearErrors();

    // Vaildate first name
    let fname = document.getElementById("fname").value.trim();
    if(!fname) {
        document.getElementById("err-fname").style.display = "block";
          isVaild = false;
    }
    // Vaildate last name
    let lname = document.getElementById("lname").value.trim();
    if(!lname) {
        document.getElementById("err-lname").style.display = "block";
          isVaild = false;
    }
    // Vaildate email
    let email = document.getElementById("email").value.trim();
    if(!email) {
        document.getElementById("err-email").style.display = "block";
          isVaild = false;
    }
    // Validation for pickup and delivery
    let pickup = document.getElementById("pickup");
    let delivery = document.getElementById("delivery");
    if(!pickup.checked && !delivery.checked ) {
        document.getElementById("err-pickup").style.display = "block";
          isVaild = false;
    }
    // Validation for toppings
let toppings = document.getElementById("toppings").value.trim();
    if(!toppings) {
        document.getElementById("err-toppings").style.display = "block";
          isVaild = false;
    }

// Validation for pizza Size
    let size = document.getElementById("size").value;
    if(size == "none") {
        document.getElementById("err-size").style.display = "block";
          isVaild = false;
    }
    


    return isVaild;
}

function clearErrors () {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
        
    }
}

