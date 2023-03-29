// USER INFO
let userName = prompt("Scrivi il tuo nome:");
let userSurname = prompt("Scrivi il tuo cognome:");
let userAge = prompt("Quanti anni hai?");
let userKilometers = prompt("Per quanti kilometri devi viaggiare?");

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
    

    } else if (userAge < 18) {
        // 20% Discount if age < 18
        let userTicketPrice20Discount = (userTicketPrice * 80 / 100);
        console.log("Il prezzo standard è di : " + userTicketPrice);
        console.log("Applicando lo sconto del 20% per i minorenni: " + userTicketPrice20Discount);
    
    } else {
        console.log("Non hai sconti attivi: " + userTicketPrice);
    }
        
    
} else {
    console.log("Inserisci informazioni con i numeri");
}


document.getElementById("name").innerHTML = userName;
document.getElementById("surname").innerHTML = userSurname;
document.getElementById("age").innerHTML = userAge;
document.getElementById("normalprice").innerHTML = "Prezzo: " + userTicketPrice.toFixed(2) + "&euro";
document.getElementById("discountedprice").innerHTML = "Scontato per over 65: " + userTicketPrice40Discount.toFixed(2) + "&euro";
document.getElementById("discountedprice").innerHTML = "Scontato per minorenni: " + userTicketPrice20Discount.toFixed(2) + "&euro";