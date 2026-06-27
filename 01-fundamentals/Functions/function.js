function calculateTip() {

    let bill = Number(document.getElementById("bill").value);

    let tipPercent = Number(document.getElementById("tip").value);

    let tip = (bill * tipPercent) / 100;

    let total = bill + tip;

    document.getElementById("result").innerHTML =
        `Tip: ₹${tip}<br>Total: ₹${total}`;
}