document.getElementById('calculet-btn').addEventListener('click',function(){
/* **********************Total expenses part********************** */

const foodExpenses = document.getElementById('food-expen');
const foodExpensesText = foodExpenses.value;

const rentExpenses = document.getElementById('rent-expen');
const rentExpensesText = rentExpenses.value;

const clothesExpenses = document.getElementById('clothes-expen');
const clothesExpensesText = clothesExpenses.value;
/* **********************Total expenses part********************** */

/* **********************Total expenses calculate***************** */
const totalExpenses = document.getElementById('total-expen');
const totalExpensesText = totalExpenses.innerText;

totalExpenses.innerText = parseFloat(foodExpensesText) + parseFloat(rentExpensesText) + parseFloat(clothesExpensesText);
/* **********************Total expenses calculate***************** */

/************************************ totalIncome***************** */
 const incomeMoney = document.getElementById('salary');
const incomeMoneytext = incomeMoney.value;
const totalIncome = parseFloat(incomeMoneytext);


/************************** totalIncome*************************** */

/* *********************remaing balance************************** */
const remaingBalance = document.getElementById('total-balance');
const remaingBalanceText = remaingBalance.innerText;
const remaingBalanceAmount = parseFloat(remaingBalanceText);

remaingBalance.innerText = totalIncome - totalExpenses.innerText;

/* *********************remaing balance************************** */

})

document.getElementById('save-btn').addEventListener('click',function(){
/*********************** totalIncome***************************/
const incomeMoney = document.getElementById('salary');
const incomeMoneytext = incomeMoney.value;
const totalIncome = parseFloat(incomeMoneytext);
/************************ totalIncome**************************/

/********************saving calculation***********************/
  const saveMoney = document.getElementById('save-money');
  const saveMoneytext = saveMoney.value;

  const savecalculet = saveMoney.value / 100;
  const savecalculetAmount = parseFloat(savecalculet);

  const savingAmount = document.getElementById('saving_account');
  const savingAmountTotal = savingAmount.innerText;
  const savingtext = parseFloat(savingAmountTotal);

savingAmount.innerText = totalIncome * savecalculetAmount;


/*********************saving calculation******************** */

const newBalance = document.getElementById('total-balance');
const newBalanceText = newBalance.innerText;
const newBalanceAmount =parseFloat(newBalanceText);

const finisedBalance = document.getElementById('finis-balance');
const finisedBalancetext = finisedBalance.innerText;
finisedBalance.innerText = newBalanceAmount -savingAmount.innerText


})
