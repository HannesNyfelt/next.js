import React, { useState } from 'react'

const Quizgenerator = ({ question, onSubmit }: any) => {
    const [userAnswer, setUserAnswer] = useState('')

    const handleAnswerChange = (e: any) => {
        setUserAnswer(e.target.value)
    }
}