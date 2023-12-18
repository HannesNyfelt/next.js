"use client"
import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const ExpenseSplitCalculator = ({ expenses }: any) => {

    const totalExpense = expenses.reduce((total: any, expense: any) => total + expense.amount, 0)

    const individualShare = totalExpense / expenses.length

    const calculatedAmounts = expenses.map((participant: any) => {
        return {
            participant: participant.participants,
            amount: participant.amount - individualShare
        }
    })


    return (
        <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Expense Split Calculator
            </Typography>
            {expenses.length > 0 ? (
                <List>
                    {calculatedAmounts.map((calculation: any, index: any) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={calculation.participant}
                                secondary={`Owes: $ ${calculation.amount.toFixed(2)}`}
                            />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body2"></Typography>
            )}
        </Paper>
    )
}

export default ExpenseSplitCalculator