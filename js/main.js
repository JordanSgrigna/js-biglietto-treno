let userAge = prompt("Quanti anni hai?");
let userKilometers = prompt("Per quanti kilometri devi viaggiare?");

let isUserAgeANumber = !isNaN(userAge);
let isUserKilometersANumber = !isNaN(userKilometers);

if (isUserAgeANumber && isUserKilometersANumber) {
    userAge = parseInt(userAge);
    userKilometers = parseInt(userKilometers);

    if (userAge > 65) {
        // 60% Discount if age>65
        let userTicketPrice = (userKilometers * 0,21 * 60 / 100);
        
    } else
    
}