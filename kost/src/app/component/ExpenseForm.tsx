"use client"
import React, { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';

const ExpenseForm = ({ addExpense }: any) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (name && amount) {
            addExpense({ name, amount: parseFloat(amount) });
            setName('');
            setAmount('');
            console.log(name, amount);

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row">
                <TextField
                    label="Name"
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Amount"
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <Button variant="contained" type="submit">
                    Add Expense
                </Button>
            </Stack>
        </form>
    );
};

export default ExpenseForm;