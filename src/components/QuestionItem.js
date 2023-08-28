import React from "react";

function QuestionItem({ question, removeQuestion, updateChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(event) {
    console.log(event.target.value)

    fetch(`http://127.0.0.1:4000/questions/${id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        correctIndex: event.target.value
      })
    })
    .then(response => response.json())
    .then(data => {
      updateChange(data);
    })
  }

  function handleDelete() {
    fetch(`http://127.0.0.1:4000/questions/${id}`, {
      method: "DELETE"
    })
    removeQuestion(question)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
