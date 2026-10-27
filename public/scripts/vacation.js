document.getElementById("vacation-form").onsubmit = () => {
    let isValid = true; 
    clearErrors(); 

    const destination = document.getElementById("dest-choose").value; 
    const departureDate = document.getElementById("departure-date").value;
    const travelerCount = document.getElementById("travelers").value;

    if (destination == "none") {
        document.getElementById("destination-err").style.display = "block";
        isValid = false; 
    }

    if (departureDate === "") {
        document.getElementById("departure-err").style.display = "block";
        isValid = false; 
    }

    if (travelerCount === "" || Number(travelerCount) <= 0) {
        document.getElementById("travelers-err").style.display = "block";
        isValid = false; 
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err"); 

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none"; 
    }
}