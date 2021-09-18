let billAmount = document.getElementById('bill-amount');
let cashAmount = document.getElementById('cash-given');
let checkButton = document.getElementById('btn-1');
let errorMessage = document.getElementById('error-message');
let noOfNotes = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

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

function calculateChange(amountReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountReturned / availableNotes[i]);
    amountReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = 'none';
}

function showMessage(msg) {
  errorMessage.style.display = 'block';
  errorMessage.innerText = msg;
}

checkButton.addEventListener('click', validateAmount);
