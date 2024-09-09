import React, { useState } from 'react';



const Level2 = () => {
    const quizData = [
        {
          question: 'What is a key benefit of maintaining ground cover crops?',
          options: [
            'Increased soil erosion',
            'Enhanced soil moisture and reduced erosion',
            'Decreased soil fertility',
            'Greater soil compaction'
          ],
          correctAnswer: 'Enhanced soil moisture and reduced erosion',
        },
        {
          question: 'Which of the following practices can lead to soil degradation?',
          options: [
            'Excessive irrigation',
            'Sustainable land management',
            'Reforestation',
            'Proper crop rotation'
          ],
          correctAnswer: 'Excessive irrigation',
        },
        {
          question: 'Which method helps to manage stormwater runoff and prevent flooding?',
          options: [
            'Green infrastructure',
            'Urbanization',
            'Intensive farming',
            'Deforestation'
          ],
          correctAnswer: 'Green infrastructure',
        },
        {
          question: 'What is the main purpose of soil erosion control structures, such as check dams?',
          options: [
            'To increase soil erosion',
            'To slow and capture runoff water',
            'To promote urban development',
            'To clear land for agriculture'
          ],
          correctAnswer: 'To slow and capture runoff water',
        },
        {
          question: 'Which practice is essential for preventing desertification?',
          options: [
            'Overgrazing',
            'Deforestation',
            'Excessive irrigation',
            'Sustainable land management'
          ],
          correctAnswer: 'Sustainable land management',
        },
        {
          question: 'What is the primary benefit of using mulch in soil conservation?',
          options: [
            'To reduce soil moisture loss and suppress weeds',
            'To enhance soil salinity',
            'To increase soil erosion',
            'To promote soil compaction'
          ],
          correctAnswer: 'To reduce soil moisture loss and suppress weeds',
        },
        {
          question: 'Which practice is aimed at reducing the impact of agriculture on soil and water resources?',
          options: [
            'Monoculture',
            'Clear-cutting',
            'Land reclamation',
            'Conservation tillage'
          ],
          correctAnswer: 'Conservation tillage',
        },
        {
          question: 'What is the main benefit of using riparian buffers along waterways?',
          options: [
            'Increased soil erosion',
            'Decreased water quality',
            'Improved water filtration and habitat protection',
            'Enhanced agricultural runoff'
          ],
          correctAnswer: 'Improved water filtration and habitat protection',
        },
      ];
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderOptions = () => {
    return quizData[currentQuestion].options.map((option, index) => (
      <button
        key={index}
        onClick={() => handleAnswerClick(option)}
      >
        {option}
      </button>
    ));
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <>
                <h1 style={{textAlign:"center"}} >Beginner Level</h1>
                <div className="quiz-container">
      {currentQuestion < quizData.length ? (
        <>
          <h2>{quizData[currentQuestion].question}</h2>
          {renderOptions()}
        </>
      ) : (
        <div className="quiz-result">
          <p>Your score: {score}/{quizData.length}</p>
          <button onClick={handleShowAnswers}>Show Correct Answers</button>
          {showAnswers && (
            <div className="correct-answers">
              <h3>Correct Answers:</h3>
              <ul>
                {quizData.map((question, index) => (
                  <li key={index}>
                    {question.question}: {question.correctAnswer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
    </>
    
  );
};

export default Level2;
