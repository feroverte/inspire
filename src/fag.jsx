// fag.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Faq() {
  const [topics, setTopics] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [expandedTopicIndex, setExpandedTopicIndex] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/faq").then((response) => {
      setTopics(response.data);
    });
  }, []);

  const addQuestion = () => {
    if (newQuestion.trim()) {
      axios
        .post("http://localhost:5000/faq/question", {
          username: "anonymous",
          question: newQuestion,
        })
        .then(() => {
          setNewQuestion("");
          axios.get("http://localhost:5000/faq").then((response) => {
            setTopics(response.data);
          });
        });
    }
  };

  const addAnswer = (index) => {
    if (newAnswer.trim()) {
      axios
        .post("http://localhost:5000/faq/answer", {
          questionIndex: index,
          answer: newAnswer,
        })
        .then(() => {
          setNewAnswer("");
          axios.get("http://localhost:5000/faq").then((response) => {
            setTopics(response.data);
          });
        });
    }
  };

  const toggleTopic = (index) => {
    setExpandedTopicIndex(expandedTopicIndex === index ? null : index);
  };

  return (
    <div>
      <header className="shadow-md border-2 border-gray-200 flex justify-center items-center p-4">
        <h1 className="text-xl font-bold">FAQ</h1>
      </header>
      <div className="p-4">
        {topics.map((topic, index) => (
          <div key={index} className="border-b border-gray-300 py-2">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleTopic(index)}
            >
              <span className="mr-2 text-xl">
                {expandedTopicIndex === index ? "-" : "+"}
              </span>
              <h2 className="font-medium text-lg">{topic.question}</h2>
            </div>
            {expandedTopicIndex === index && (
              <div className="pl-8 mt-2">
                <p className="mb-2 font-semibold">Answers:</p>
                <ul className="list-disc pl-4">
                  {topic.answers.map((answer, answerIndex) => (
                    <li key={answerIndex}>{answer}</li>
                  ))}
                </ul>
                <input
                  type="text"
                  className="border p-1 mt-2"
                  placeholder="Write an answer..."
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-2 py-1 ml-2"
                  onClick={() => addAnswer(index)}
                >
                  Add Answer
                </button>
              </div>
            )}
          </div>
        ))}
        <div className="mt-4">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Ask a question..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 mt-2"
            onClick={addQuestion}
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}
