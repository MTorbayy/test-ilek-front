import React, {useEffect, useState} from "react";
import Question from './Question'
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

interface Question {
    answers: Answer[],
    id: number,
    question: string
}

interface Answer {
    id: number,
    answer: string,
    isCorrect: boolean,
    selected: boolean
}

function Questionnaire () {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [showScore, setShowScore] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        fetch("/environment_questions")
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data)
            })
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        calculateScore();
        setShowScore(true);
    }

    const calculateScore = () => {
        let totalScore = 0;
        questions.forEach(question => {
            const selectedAnswer = question.answers.find(answer => answer.selected);
            if(selectedAnswer && selectedAnswer.isCorrect) {
                totalScore++
            }
        })
        setScore(totalScore)
    }

    const handleAnswer = (questionId: number, answerId: number) => {
        const updatedQuestions = questions.map((question) => {
            if(question.id === questionId) {
                const updatedAnswers = question.answers.map(answer => {
                    if(answer.id === answerId) {
                        return {...answer, selected: true}
                    }
                    return {...answer, selected: false}
                });

                return {...question, answers: updatedAnswers};
            }

            return question;
        })

        setQuestions(updatedQuestions)
    }

    return (
        <form className="App" onSubmit={handleSubmit}>
            <h1>Teste tes connaissances</h1>
            {questions.length > 0 ? (questions.map((question: Question) => {
                return <Question
                    key={question.id}
                    question={question}
                    handleAnswer={handleAnswer}
                />
            })) : ("Loading...")}
            <button type="submit">Valider</button>
            {showScore && <p>Votre score est de {score}</p>
            }
        </form>
    );
}

export default Questionnaire;
