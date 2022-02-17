document.getElementById('calculet-btn').addEventListener('click',function(){

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


   

})