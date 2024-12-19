// Access elements from the DOM 
const arv = document.getElementById('arv');
const purchasePrice = document.getElementById('purchase-price');
const rehabBudget = document.getElementById('rehab-budget');
const holdingCosts = document.getElementById('holding-costs');
const loanInterestRate = document.getElementById('loan-interest-rate');
const otherCosts = document.getElementById('other-costs');
const result = document.getElementById('result');
const calculateButton = document.getElementById('calculate');

// Function to validate inputs
function validateInputs() {
  const arvValue = parseFloat(arv.value);
  const purchasePriceValue = parseFloat(purchasePrice.value);
  const rehabBudgetValue = parseFloat(rehabBudget.value);
  const holdingCostsValue = parseFloat(holdingCosts.value);
  const loanInterestRateValue = parseFloat(loanInterestRate.value);
  const otherCostsValue = parseFloat(otherCosts.value);

  // Check if the inputs are valid numbers
  if (isNaN(arvValue) || isNaN(purchasePriceValue) || isNaN(rehabBudgetValue) || 
      isNaN(holdingCostsValue) || isNaN(loanInterestRateValue) || isNaN(otherCostsValue)) {
    alert('Please enter valid numbers for all fields!');
    return false;
  }

  return true;
}

// Calculation function
function calculateProfit() {
  if (!validateInputs()) return; // If validation fails, stop the calculation

  const arvValue = parseFloat(arv.value);
  const purchasePriceValue = parseFloat(purchasePrice.value);
  const rehabBudgetValue = parseFloat(rehabBudget.value);
  const holdingCostsValue = parseFloat(holdingCosts.value);
  const loanInterestRateValue = parseFloat(loanInterestRate.value);
  const otherCostsValue = parseFloat(otherCosts.value);

  // Calculate total project costs
  const totalProjectCosts = purchasePriceValue + rehabBudgetValue + holdingCostsValue + otherCostsValue + 
                            (purchasePriceValue * (loanInterestRateValue / 100));

  // Calculate profit
  const profit = arvValue - totalProjectCosts;

  // Calculate cash-on-cash return (assuming cash invested is the sum of purchase price and rehab budget)
  const cashInvested = purchasePriceValue + rehabBudgetValue;
  const cashOnCashReturn = cashInvested === 0 ? 0 : ((profit / cashInvested) * 100);

  // Display results
  result.innerHTML = 
    <h3>Total Project Costs: $${totalProjectCosts.toFixed(2)}</h3>
    <h3>Profit: $${profit.toFixed(2)}</h3>
    <h3>Cash-on-Cash Return: ${cashOnCashReturn.toFixed(2)}%</h3>
  ;
}

// Add event listener to the calculate button
calculateButton.addEventListener('click', calculateProfit);
