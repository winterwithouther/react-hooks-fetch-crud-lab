import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, removeQuestion, updateChange}) {

  const questionsDisplay = questions.map(question => {
    return <QuestionItem key={question.id} question={question} removeQuestion={removeQuestion} updateChange={updateChange}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsDisplay}</ul>
    </section>
  );
}

export default QuestionList;
