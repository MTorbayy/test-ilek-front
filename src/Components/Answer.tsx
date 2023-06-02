interface AnswerProps {
    answer: any
}

function Answer({ answer } : AnswerProps) {
    return(
        <div>{answer.answer}</div>
    )
}

export default Answer