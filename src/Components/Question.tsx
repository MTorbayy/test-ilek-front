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
            <div className="card w-50 ms-4 mb-3 mt-3">
                <p className="card-body m-0">{question.question}</p>
            </div>
            {question.answers.map((answer: Answer) => {
                return (
                <li key={answer.id}>
                    <div className = "input-group ms-5 mb-1">
                        <div className = "input-group-prepend">
                            <div className = "input-group-text">
                                <label>
                                    <input
                                        type = "radio"
                                        value={answer.id}
                                        onChange={() => handleAnswer(question.id, answer.id)}
                                        checked={answer.selected}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="mt-2 ms-2">
                            {answer.answer}
                        </div>
                    </div>
                </li>
                )
            })}
        </div>
    )
}

export default Question

{/*<label>*/}
{/*    <input*/}
{/*        type="radio"*/}
{/*        value={answer.id}*/}
{/*        onChange={() => handleAnswer(question.id, answer.id)}*/}
{/*        checked={answer.selected}*/}
{/*    />*/}
{/*</label>*/}
