function randomPinNumber() {
    const randomNumber = Math.floor(Math.random() * 10000);
    const randomNumberText = randomNumber + "";
    if (randomNumberText.length == 4) {
        return randomNumber;
    } else {
        return randomPinNumber();
    }
}
function generatePin() {
    const pin = randomPinNumber();
    const pinInput = document.getElementById('display-pin');
    pinInput.value = pin;
}
// use input
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberInput = document.getElementById('typed-numbers');
    const previousNumber = numberInput.value;
    const newNumber = previousNumber + number;
    // conditon for number
    if (isNaN(number)) {
        if (number == "C") {
            numberInput.value = '';
        }
    } else {
        numberInput.value = newNumber;
    }
})
// tries left
let triesNumberString = document.getElementById('try-left-number');
let triesNumber = parseInt(triesNumberString.innerText);


function varifyPin() {
    const pin = document.getElementById('display-pin').value;
    const useInput = document.getElementById('typed-numbers').value;
    // notifications
    const notifySuccess = document.getElementById('notify-success');
    const notifyFailed = document.getElementById('notify-failed');
    if (pin == useInput) {
        notifySuccess.style.display = 'block'
        notifyFailed.style.display = 'none'
    } else {
        notifyFailed.style.display = 'block'
        notifySuccess.style.display = 'none'
        triesNumber--
        triesNumberString.innerText = triesNumber;
        if (triesNumber == 0) {
            const triesLeft = document.getElementById('try-left-text')
            triesLeft.innerText = "You don't have any tryes left"
        }
    }
}