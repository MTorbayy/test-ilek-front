import Questionnaire from './Questionnaire';

function MitigationQuestionnaire() {
    return (
        <Questionnaire
            questionnaireData="/mitigation_questions"
            questionnaireType="mitigation"
            linkTo="/"
            linkText="Revenir au quizz précédent"
        />
    );
}

export default MitigationQuestionnaire;
