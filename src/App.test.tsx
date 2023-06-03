import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders questionnaire", () => {
  render(<App />);
  const linkElement = screen.getByText(/Teste tes connaissances/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders link to another questionnaire", () => {
  render(<App />);
  const linkElement = screen.getByText(/Passe un autre quizz pour découvrir comment tu peux aider à protéger l'environnement/i);
  expect(linkElement).toBeInTheDocument();
});

test("displays loading message when questions are not loaded", () => {
  render(<App />);
  const loadingMessage = screen.getByText("Loading...");
  expect(loadingMessage).toBeInTheDocument();
});



