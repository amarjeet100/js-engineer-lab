// A switch statement can replace multiple if checks.

// Food delivery app user choose payment methods

let paymentMethod = 'credit card';
switch (paymentMethod) {
  case 'credit card':
    console.log('You selected credit card. Please enter your card details.');
    break;
  case 'paypal':
    console.log('You selected PayPal. Please log in to your PayPal account.');
    break;
  case 'cash':
    console.log('You selected cash. Please prepare the exact amount for delivery.');
    break;
  default:
    console.log('Invalid payment method selected. Please choose a valid option.');
}

// month number to month name
const month = 3;

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
        default:
        console.log('Invalid month');
}

// traffic light color to action
const trafficLight = prompt('Enter traffic light color (red, yellow, green):');
if(input === null) {
    alert('Input cancelled. Please enter a traffic light color.');
} else {
    trafficLight = input.trim().toLowerCase();
    switch (trafficLight) {
    case 'red':
        alert(`Stop!🛑 The light is ${trafficLight}.`);
        break;
    case 'yellow':
        alert(`Caution! 🟡 The light is ${trafficLight}.`);
        break;
    case 'green':
        alert(`Go!🟢 The light is ${trafficLight}.`);
        break;
    default:
        alert('Invalid traffic light color.');
}
}
