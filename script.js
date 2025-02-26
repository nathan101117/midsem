// Personalized Greeting
let userName = prompt("Enter your first name:");
if (!userName) {
    userName = "Guest";
}

// Welcome Message
alert("Welcome to EatNow cafe, " + userName + "!");

// Display Menu Items
let menu = ["Grilled Chicken", "Pasta Alfredo", "Veggie Burger", "Caesar Salad", "Tomato Soup"];
console.log("EatNow Cafe Menu:");
menu.forEach((dish, index) => {
    console.log((index + 1) + ". " + dish);
});
