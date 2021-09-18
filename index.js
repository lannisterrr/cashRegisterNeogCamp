let billAmount = document.getElementById('bill-amount');
let cashAmount = document.getElementById('cash-amount');
let checkButton = document.getElementById('btn-1');
let errorMessage = document.getElementById('error-message');

const validateAmount = () => {
  if (billAmount.value > 0) {
    if (cashAmount.value >= billAmount.value) {
      const amountReturned = cashAmount.value - billAmount.value;
      calculateChange(amountReturned);
    } else {
      showMessage('DO you wanna wash plates?');
    }
  } else {
    errorMessage.innerText = 'Invalid Bill amount';
  }
};

function hideMessage() {
  errorMessage.style.display = 'none';
}

function showMessage() {
  errorMessage.style.display = 'block';
  errorMessage.innerText = msg;
}

checkButton.addEventListener('click', validateAmount);
