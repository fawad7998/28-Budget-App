import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorageHook';

const BudgetsContext = React.createContext();

export function useBudget() {
    return useContext(BudgetsContext);
}

// {
//     id:
//     name:
//     max:
// }
// {
//     id:
//     budgetId:
//     amount:
//     description:
// }

export const BudgetProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])


    function getBudgetsExpenses(budgetId) {
        return expenses.filter(expensex => expenses.budgetId === budgetId)
    }
    function addExpenses({ description, amount, budgetId }) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
        })
    }
    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets
            }
            return [...prevBudgets, { id: uuidV4(), name, max }]
        })
    }
    function deleteBudget({ id }) {
        // hadle ucategorized budget
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }
    function deleteExpens({id}) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }


    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetsExpenses,
            addExpenses,
            addBudget,
            deleteBudget,
            deleteExpens
        }}>
            {children}
        </BudgetsContext.Provider>
    )
}