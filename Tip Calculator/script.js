const cal = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("percent");
const totalSpan = document.getElementById("total");

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (tipValue/100);
    totalSpan.innerText = totalValue.toFixed(2);
}
cal.addEventListener("click",calculateTotal);