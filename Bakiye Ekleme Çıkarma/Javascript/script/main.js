var balanceText = document.getElementsByClassName("balance-text")[0];
var balanceGet = document.getElementsByClassName("balance-get")[0];
var balanceSet = document.getElementsByClassName("balance-set")[0];
var balanceInput = document.getElementsByClassName("balance-input")[0];

var total=0;

balanceSet.addEventListener("click", function (e) {
   total = total + Number(balanceInput.value)
   balanceText.innerHTML = total;

});

balanceGet.addEventListener("click", function (e) {
   total = total - Number(balanceInput.value)
   balanceText.innerHTML = total;

});
