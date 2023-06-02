import Answers from './Answer'

interface QuestionProps {
    question: {
        answers: [],
        id: number,
        question: string
    }
}

function Question ({ question }: QuestionProps) {
    console.log(question.answers)
    return(
        <div>
            <p>{question.question}</p>
            {question.answers != undefined ? (<Answers answers={question.answers} />) : ("Loading...")}
        </div>
    )
}

export default Question