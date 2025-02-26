// Personalized Greeting
let userName = prompt("Enter your first name:");
if (!userName) {
    userName = "Guest";
}

// Welcome Message
alert("Welcome to EatNow cafe, " + userName + "!");

// Display Menu Items
let menu = ["Grilled Chicken", "Ugali", "Chapati", "Rice", "Chips"];
console.log("EatNow Cafe Menu:");
menu.forEach((dish, index) => {
    console.log((index + 1) + ". " + dish);
});
