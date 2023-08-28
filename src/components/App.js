import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:4000/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
  }, [])

  function bruh(ques) {
    setQuestions([...questions, ques])
  }

  function removeQuestion(removedQuestion) {
    const updatedQuestions = questions.filter(question => {
      return question.id !== removedQuestion.id
    })
    setQuestions(updatedQuestions);
  }

  function updateChange(updatedQuestion) {
    questions[updatedQuestion.id - 1].correctIndex = updatedQuestion.correctIndex;
    setQuestions([...questions])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm newQuestion={bruh}/> : <QuestionList questions={questions} removeQuestion={removeQuestion} updateChange={updateChange}/>}
    </main>
  );
}

export default App;
