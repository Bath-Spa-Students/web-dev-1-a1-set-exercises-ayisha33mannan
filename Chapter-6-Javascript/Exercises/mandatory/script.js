// Get references to elements
const petrolCostInput = document.getElementById('petrol-cost');
const litersPurchasedInput = document.getElementById('liters-purchased');
const calculateBtn = document.getElementById('calculate-btn');
const totalCostDisplay = document.getElementById('total-cost');
const moneyInput = document.getElementById('money-input');
const messageDisplay = document.getElementById('message');

// Calculate total cost function
function calculateTotalCost() {
    const petrolCost = parseFloat(petrolCostInput.value);
    const litersPurchased = parseFloat(litersPurchasedInput.value);
    const totalCost = petrolCost * litersPurchased;

    totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;

    // Show money input field
    moneyInput.style.display = 'block';
}

// Event listener for calculate button
calculateBtn.addEventListener('click', calculateTotalCost);

// Function to handle money input
moneyInput.addEventListener('change', function() {
    const totalCost = parseFloat(totalCostDisplay.textContent.replace('Total Cost: $', ''));
    const money = parseFloat(moneyInput.value);
    if (money < totalCost) {
        messageDisplay.textContent = 'Amount is not enough.';
    } else {
        const change = money - totalCost;
        messageDisplay.textContent = `Here is your change: $${change.toFixed(2)}. Thank you for purchasing. Have a good day!`;
    }
});
