// Personalized Greeting
let userName = prompt("Enter your first name:"); // Ask for the user's name
if (!userName) {
    userName = "Guest"; //If no name is entered, call them "Guest"
}

// Welcome Message
alert("Welcome to EatNow cafe, " + userName + "!"); // Show a greeting message

// Display Menu Items
let menu = ["Grilled Chicken", "Ugali", "Chapati", "Rice", "Chips"]; // List or Array of 5 dishes
console.log("EatNow Cafe Menu:"); // Title for the menu
menu.forEach((dish, index) => {
    console.log((index + 1) + ". " + dish); // Numbering of menu items
});

// Adding a New Dish (after 10 seconds)
setTimeout(function() {
    let newDish = prompt("Suggest a new dish:"); // Ask the user for a new dish

    if (newDish) {  
        menu.push(newDish); // Add the new dish to the menu
        console.log("Updated Menu:"); // Show the updated menu
        menu.forEach((dish, index) => {
            console.log((index + 1) + ". " + dish); // Print the new and updated menu
        });
    } else {
        console.log("No dish added."); // If it was empty, tell the user nothing was added
    }
}, 10000); // Wait 10 seconds (10,000 milliseconds) before showing the prompt
