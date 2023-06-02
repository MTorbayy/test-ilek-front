import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState<any>();
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
      fetch("/environment_questions")
          .then((response) => response.json())
          .then((data) => {
              if (data !== undefined && data.length > 0) {
                  const mixedQuestions = mixArray([...data]);
                  setQuestions(mixedQuestions);
              }
          })
  }, []);

  const mixArray = (array: any[]): any[] => {
      const newArray = [...array];
      const mixedArray: any[] = [];

      while(mixedArray.length <= 5 && newArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * newArray.length); //Génère un index aléatoire entre 0 et newArray.length
          const randomElement = newArray[randomIndex];

          if(!mixedArray.includes(randomElement)) {
              mixedArray.push(randomElement)
          }

          newArray.splice(randomIndex, 1);
      }

      return mixedArray;
  }

  const handleSubmit = () => {
      //Logique pour calculer le score ?
      setScore(100);
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h1>Teste tes connaissances</h1>
      <p>{questions != undefined ? questions[0].question : "loading ..."}</p>
      <button type="submit">Valider</button>
      <p>Votre score est de {score}</p>
    </form>
  );
}

export default App;
