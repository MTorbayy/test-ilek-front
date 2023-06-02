import Answer from './Answer'

interface QuestionProps {
    question: {
        answers: [],
        id: number,
        question: string
    }
}

interface Answer {
    id: number,
    answers: []
}

function Question ({ question }: QuestionProps) {
    return(
        <div>
            <p>{question.question}</p>
            {question.answers != undefined ? (question.answers.map((answer: Answer) => {
                return <Answer answer={answer} />
            })) : ("Loading...")}
        </div>
    )
}

export default Question