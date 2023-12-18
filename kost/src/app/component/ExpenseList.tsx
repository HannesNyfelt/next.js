"use client"
import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const ExpenseList = ({ expenses }: any) => {
    return (
        <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Expenses
            </Typography>
            {expenses.length > 0 ? (
                <List>
                    {expenses.map((expense: any, index: any) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={expense.participants}
                                secondary={`$ ${expense.amount.toFixed(2)}`}
                            />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body2">No expenses added yet.</Typography>
            )}
        </Paper>
    );
};

export default ExpenseList;
