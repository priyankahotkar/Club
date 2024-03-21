function calculateTax() {
    var income = document.getElementById("income").value;
    var tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
        tax = 12500 + (income - 500000) * 0.2;
    } else {
        tax = 112500 + (income - 1000000) * 0.3;
    }

    document.getElementById("taxAmount").innerText = "₹" + tax.toFixed(2);
}
