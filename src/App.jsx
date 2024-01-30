import React, { useState } from 'react';

const BudgetApp = () => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [totalBudget, setTotalBudget] = useState(0);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setItemAmount(e.target.value);
  };

  const handleAddItem = () => {
    if (itemName.trim() === '' || isNaN(itemAmount) || +itemAmount <= 0) {
      alert('Please enter a valid item name and amount.');
      return;
    }

    const newItem = {
      id: Date.now(),
      name: itemName,
      amount: +itemAmount,
    };

    setBudgetItems([...budgetItems, newItem]);
    setTotalBudget((prevTotal) => prevTotal + +itemAmount);
    setItemName('');
    setItemAmount('');
  };

  const handleRemoveItem = (id, amount) => {
    const updatedBudgetItems = budgetItems.filter((item) => item.id !== id);
    setBudgetItems(updatedBudgetItems);
    setTotalBudget((prevTotal) => prevTotal - amount);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Budget App</h1>

      <div className="mb-4">
        <label
          htmlFor="itemName"
          className="block text-sm font-medium text-gray-600"
        >
          Item Name:
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={handleNameChange}
          className="mt-1 p-2 border rounded w-1/2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="itemAmount"
          className="block text-sm font-medium text-gray-600"
        >
          Item Amount:
        </label>
        <input
          type="number"
          id="itemAmount"
          value={itemAmount}
          onChange={handleAmountChange}
          className="mt-1 p-2 border rounded w-1/2"
        />
      </div>

      <button
        type="button"
        onClick={handleAddItem}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Budget Items</h2>
        <ul>
          {budgetItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-2 my-1"
            >
              <span>{item.name}</span>
              <span>${item.amount}</span>
              <button
                onClick={() => handleRemoveItem(item.id, item.amount)}
                className="text-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Total Budget: ${totalBudget}</h2>
      </div>
    </div>
  );
};

export default BudgetApp;
