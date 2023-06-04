interface QuestionProps {
    question: QuestionInterface,
    handleAnswer: (questionId: number, answerId: number) => void
}

interface QuestionInterface {
    answers: Answer[],
    id: number,
    question: string
}

interface Answer {
    id: number,
    answer: string,
    selected: boolean
}

function Question ({ question, handleAnswer }: QuestionProps) {

    return(
        <div>
            <p>{question.question}</p>
            {question.answers.map((answer: Answer) => {
                return <li key={answer.id}>
                    <label>
                        <input
                            type="radio"
                            value={answer.id}
                            onChange={() => handleAnswer(question.id, answer.id)}
                            checked={answer.selected}
                        />
                    </label>
                    {answer.answer}
                </li>
            })}
        </div>
    )
}

export default Question