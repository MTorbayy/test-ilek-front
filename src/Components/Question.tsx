import {useState} from 'react'

interface QuestionProps {
    question: any;
}

function Question ({ question }: QuestionProps) {
    return(
        <div>
            <p>{question.question}</p>
        </div>
    )
}

export default Question