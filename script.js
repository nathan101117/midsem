// Personalized Greeting
let userName = prompt("Enter your first name:");
if (!userName) {
    userName = "Guest";
}

// Welcome Message
alert("Welcome to EatNow cafe, " + userName + "!");
