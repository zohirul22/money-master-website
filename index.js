document.getElementById('calculet-btn').addEventListener('click',function(){

const foodExpenses = document.getElementById('food-expen');
const foodExpensesText = foodExpenses.value;


const rentExpenses = document.getElementById('rent-expen');
const rentExpensesText = rentExpenses.value;


const clothesExpenses = document.getElementById('clothes-expen');
const clothesExpensesText = clothesExpenses.value;



const totalExpenses = document.getElementById('total-expen');
const totalExpensesText = totalExpenses.value;

totalExpenses.value = parseFloat(foodExpensesText) + parseFloat(rentExpensesText) + parseFloat(clothesExpensesText);


 const incomeMoney = document.getElementById('salary');
const incomeMoneytext = incomeMoney.value;

const totalIncome = parseFloat(incomeMoneytext);

const remaingBalance = document.getElementById('total-balance');
const remaingBalanceText = remaingBalance.value;
const remaingBalanceAmount = parseFloat(remaingBalanceText);

remaingBalance.value = totalIncome - totalExpenses.value;







})

















/* document.getElementById('calculet-btn').addEventListener('click',function(){

   
   
 const foodExpenses = document.getElementById('food-expen').innerText;
   const rentExpenses = document.getElementById('rent-expen').innerText;
   const clothesExpenses = document.getElementById('clothes-expen').innerText;

 const expensesValue = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses);

 const totalExpenses = document.getElementById('total-expen');

totalExpenses.innerText = expensesValue;

const totalSalarytext = document.getElementById('salary').innerText;

const totalSalary = parseFloat(totalSalarytext);

const totalBalanceText = document.getElementById('total-balance');

totalBalanceText.innerText = totalSalary - totalExpenses.innerText;

  
  

}) */