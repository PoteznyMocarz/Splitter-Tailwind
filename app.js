let billAmountInput = document.getElementById("billAmount");
let percTip = document.querySelectorAll(".tipPerc");
let percTipCustomInput = document.getElementById("percTipCustom");
let peopleNumberInput = document.getElementById("peopleNumber");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let resetBtn = document.getElementById("resetBtn");
let officialPercTip;
let officialBillAmount;
let officialPeopleNumber;

// billAmountInput.addEventListener("keyup", function() {
//     if(billAmountInput.value === '') {
//         tipAmount.innerText = "0.00";
//         totalAmount.innerText = "0.00";
//         console.log("lol");
//     }
//     else {
//         officialBillAmount = billAmountInput.value;
//         console.log(officialBillAmount);
//     }
// })

percTip.forEach((percTip) => {
    percTip.addEventListener("click", function() {
        officialPercTip = percTip.innerText.substr(0, percTip.innerText.length - 1) / 100;
        let active = document.querySelector(".tipActive");
        if(active) {
            active.classList.remove("tipActive");
        }
        percTip.classList.add("tipActive");
        percTipCustomInput.value = "";
        console.log(officialPercTip);
        calculateAll()
    })
});

percTipCustomInput.addEventListener("keyup", function() {
    let active = document.querySelector(".tipActive");
    if(active) {
        active.classList.remove("tipActive");
    }
    officialPercTip = percTipCustomInput.value / 100;
    console.log(officialPercTip);
    calculateAll()
});

// peopleNumberInput.addEventListener("keyup", function() {
//     if(peopleNumberInput.value === "") {
//         tipAmount.innerText = "0.00";
//         totalAmount.innerText = "0.00";
//     }
//     else {
//         officialPeopleNumber = peopleNumberInput.value;
//         console.log(officialPeopleNumber);
//     }
// })


function calculateTotalAmount() {
    let tipAmountOff = (billAmountInput.value * officialPercTip);
    let totalAmountOff = (billAmountInput.value / peopleNumberInput.value + (tipAmountOff / peopleNumberInput.value));
    if(peopleNumberInput.value === "" || billAmountInput.value === "") {
        totalAmount.innerText = "0.00"
    }
    else {
        totalAmount.innerText = (totalAmountOff).toFixed(2);
    }
}

billAmountInput.addEventListener("keyup", calculateAll);
peopleNumberInput.addEventListener("keyup", calculateAll);

function calculateTipAmount() {
    let tipAmountOff = (billAmountInput.value * officialPercTip / peopleNumberInput.value);
    if(peopleNumberInput.value === "" || billAmountInput.value === "") {
        tipAmount.innerText = "0.00"
    }
    else {
        tipAmount.innerText = (tipAmountOff).toFixed(2);
    }
}

function calculateAll() {
    calculateTipAmount();
    calculateTotalAmount();
    BtnClass();
    let active = document.querySelector(".tipActive");
    if(!officialPercTip) {
        tipAmount.innerText = "0.00";
        totalAmount.innerText = "0.00";
    }
}

function BtnClass() {
    if(tipAmount.innerText === "0.00") {
        resetBtn.classList.remove("reset-active");
    }
    else {
        resetBtn.classList.add("reset-active");
    }
}

function resetAmounts() {
    if(!(tipAmount.innerText === "0.00")) {
        tipAmount.innerText = "0.00";
        totalAmount.innerText = "0.00";
        billAmountInput.value = "";
        peopleNumberInput.value = "";
        percTipCustomInput.value = "";
        resetBtn.classList.remove("reset-active");
        document.querySelector(".tipActive").classList.remove("tipActive");
    };
};

resetBtn.addEventListener("click", resetAmounts);