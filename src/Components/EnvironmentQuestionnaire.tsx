import Questionnaire from './Questionnaire';

function EnvironmentQuestionnaire() {
    return (
        <Questionnaire
            questionnaireData="/environment_questions"
            questionnaireType="environment"
            linkTo="/mitigation-questionnaire"
            linkText="Passe un autre quiz pour découvrir comment tu peux aider à protéger l'environnement"
        />
    );
}

export default EnvironmentQuestionnaire;