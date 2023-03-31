function submitForm(event){
    event.preventDefault();

    // USER INFO
    let userName = document.getElementById("userName").value;
    let userSurname = document.getElementById("userSurname").value;
    let userAge = document.getElementById("userAge").value;
    let userKilometers = document.getElementById("userKilometers").value;

    // INPUT VALIDATION
    let isUserAgeANumber = !isNaN(userAge);
    let isUserKilometersANumber = !isNaN(userKilometers);

    // PRICE PER KILOMETER
    userAge = parseInt(userAge);
    userKilometers = parseInt(userKilometers);

    let pricePerKilometer = 0.21;
    let userTicketPrice = (userKilometers * pricePerKilometer);

    if (isUserAgeANumber && isUserKilometersANumber) {

        if (userAge > 65) {
            // 40% Discount if age > 65
            let userTicketPrice40Discount = (userTicketPrice * 60 / 100);
            console.log("Il prezzo standard è di : " + userTicketPrice);
            console.log("Applicando lo sconto del 40% per gli over 65: " + userTicketPrice40Discount);
        
            document.getElementById("discountedprice").innerHTML = "Scontato per gli over 65: " + userTicketPrice40Discount.toFixed(2) + "&euro;";
        } else if (userAge < 18) {
            // 20% Discount if age < 18
            let userTicketPrice20Discount = (userTicketPrice * 80 / 100);
            console.log("Il prezzo standard è di : " + userTicketPrice);
            console.log("Applicando lo sconto del 20% per i minorenni: " + userTicketPrice20Discount);
            
            document.getElementById("discountedprice").innerHTML = "Scontato per minorenni: " + userTicketPrice20Discount.toFixed(2) + "&euro;";
        } else {
            console.log("Non hai sconti attivi: " + userTicketPrice);
            document.getElementById("discountedprice").innerHTML = "Non hai sconti attivi";
        }
            
        
    } else {
        console.log("Inserisci informazioni con i numeri");
    }

    document.getElementById("name").innerHTML = userName;
    document.getElementById("surname").innerHTML = userSurname;
    document.getElementById("age").innerHTML = userAge;
    document.getElementById("normalprice").innerHTML = "Prezzo: " + userTicketPrice.toFixed(2) + "&euro;";
}

