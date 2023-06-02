import React, {useState} from 'react'

interface AnswersProps {
    answers: any
}

interface Answer {
    id: number,
    answer: string
}

function Answers({ answers } : AnswersProps) {

    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(null)
        const value = parseInt(event.target.value, 10); //Sera considéré comme un number
        setSelectedOption(value)
    }

    return(
        <div>
            {answers.map((answer: Answer) => {
                return <li>
                    <label>
                        <input type="radio" value={answer.id} onChange={handleSelect} checked={selectedOption === answer.id}/>
                    </label>
                    {answer.answer}
                </li>
                })}
        </div>

    )
}

export default Answers