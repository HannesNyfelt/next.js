"use client"
import React, { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';

const ExpenseForm = ({ addExpense }: any) => {
    const [participants, setParticipants] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (participants && amount) {
            addExpense({ participants, amount: parseFloat(amount) });
            setParticipants('');
            setAmount('');

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row">
                <TextField
                    label="Name"
                    type='text'
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
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