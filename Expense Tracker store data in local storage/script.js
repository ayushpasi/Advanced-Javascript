const form = document.getElementById("my-form");
const expensesList = document.getElementById("expenses");

form.addEventListener("submit", saveData);

function saveData(e) {
  e.preventDefault();
  let expenseAmount = document.getElementById("expenseAmount").value;
  let expenseDescription = document.getElementById("expenseDescription").value;
  let expenseCategory = document.getElementById("expenseCategory").value;
  let expense = {
    expenseAmount: expenseAmount,
    expenseDescription: expenseDescription,
    expenseCategory: expenseCategory,
  };

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));
  displayExpenses();
}

function displayExpenses() {
  expensesList.innerHTML = "";

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  expenses.forEach((expense, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item mb-3";
    listItem.textContent = `Expense ${index + 1}: 
      Amount: ${expense.expenseAmount}, 
      Description: ${expense.expenseDescription}, 
      Category: ${expense.expenseCategory}`;
    const btn = document.createElement("button");
    btn.textContent = "delete";
    btn.className = "btn btn-danger mx-2";
    btn.addEventListener("click", () => removeExpense(index));
    const update = document.createElement("button");
    update.textContent = "update";
    update.className = "btn btn-primary";
    update.addEventListener("click", () => updateExpense(index));
    listItem.appendChild(btn);
    listItem.appendChild(update);
    expensesList.appendChild(listItem);
  });
}

function removeExpense(index) {
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  displayExpenses();
}

function updateExpense(index) {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  document.getElementById("expenseAmount").value =
    expenses[index].expenseAmount;
  document.getElementById("expenseDescription").value =
    expenses[index].expenseDescription;
  document.getElementById("expenseCategory").value =
    expenses[index].expenseCategory;

  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  displayExpenses();
}

displayExpenses(); // Call the displayExpenses function to initially display any stored expenses
