import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Question from './Question';

interface QuestionnaireProps {
    questionnaireData: string,
    questionnaireType: string,
    linkTo: string,
    linkText: string
}

interface Question {
    answers: Answer[],
    id: number,
    question: string
}

interface Answer {
    id: number,
    answer: string,
    selected: boolean
}

function Questionnaire({ questionnaireData, questionnaireType, linkTo, linkText }: QuestionnaireProps) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [showScore, setShowScore] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        fetch(questionnaireData)
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data)
            })
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const answersToCheck: any[] = [];

        questions.forEach(question => {
            question.answers.forEach(answer => {
                if (answer.selected) {
                    let checkAnswer = {
                        questionId: question.id,
                        answerId: answer.id
                    }
                    answersToCheck.push(checkAnswer)
                }
            })
        })

        fetch("/check_questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                answersToCheck,
                questionnaire: questionnaireType
            })
        })
            .then((response) => response.json())
            .then((data) => {
                setScore(data)
                setShowScore(true);
            })
    }

    const handleAnswer = (questionId: number, answerId: number) => {
        const updatedQuestions = questions.map((question) => {
            if (question.id === questionId) {
                const updatedAnswers = question.answers.map(answer => {
                    if (answer.id === answerId) {
                        return { ...answer, selected: true }
                    }
                    return { ...answer, selected: false }
                });

                return { ...question, answers: updatedAnswers };
            }

            return question;
        })

        setQuestions(updatedQuestions)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-center display-1">Teste tes connaissances</h1>
            {questions.length > 0 ? (questions.map((question: Question) => {
                return <Question
                    key={question.id}
                    question={question}
                    handleAnswer={handleAnswer}
                />
            })) : (<div>Loading...</div>)}
            <div className="mb-5 ms-4">
                <button className="btn btn-lg btn-outline-success me-2 mt-4" type="submit">Valider</button>
                <Link className="btn btn-outline-info btn-lg mt-4" to={linkTo}>{linkText}</Link>
                {showScore && <h4 className="mt-3">Votre score est de {score}</h4>}
            </div>
        </form>
    );
}

export default Questionnaire;