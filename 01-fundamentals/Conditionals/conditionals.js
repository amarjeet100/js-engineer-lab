 let rainyDay = true;

if (rainyDay) {
    console.log("It's raining, take an umbrella!");
} else {
    console.log("It's not raining, no need for an umbrella!");
}

// ATM machine example
let accountBalance = 1000;
let withdrawalAmount = 1200;

if (withdrawalAmount <= accountBalance) {
    accountBalance -= withdrawalAmount;
    console.log(`Withdrawal successful! Your new balance is $${accountBalance}.`);
} else {
    console.log("Insufficient funds. Withdrawal denied.");
}


// User login example
const userName = "Tony Stark";
const password = "76700@abc";

if (userName === "Tony Stark" && password === "76700@abc") {
    console.log("Login successful! Welcome, Tony Stark.");
} else {
    console.log("Login failed! Incorrect username or password.");
}

const user = {
  name: "Robin",
  age: 22,
  isVerified: true,
  subscription: "Premium",
  role: "Admin",
  balance: 2500,
};

// Q.1 check user is eligible for voting or not ?
if (user.age >= 18) {
  console.log(`${user.name} is eligible for voting.`);
} else {
    console.log(`${user.name} is not eligible for voting.`);
}

// Q.2 Is the user eligible for premium features?
if (user.subscription === "Premium") {
    console.log("HD Streaming Enabled");
} else {
    console.log("Standard Streaming Enabled");
}

// Q.3 Can the user purchase an item costing ₹3000?
if (user.balance >= 3000) {
    console.log("Purchase successful!");
} else {
    console.log("Insufficient balance for purchase.");
}