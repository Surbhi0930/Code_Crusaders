import React, { useState } from 'react';



const Level3 = () => {
    const quizData = [
        {
          question: 'Which of the following is a method to conserve groundwater?',
          options: [
            'Over-extraction of water',
            'Increasing impermeable surfaces',
            'Rainwater harvesting',
            'Deforestation'
          ],
          correctAnswer: 'Rainwater harvesting',
        },
        {
          question: 'What is the primary purpose of constructing recharge wells?',
          options: [
            'To increase surface water storage',
            'To reduce soil erosion',
            'To replenish groundwater levels',
            'To provide drinking water directly'
          ],
          correctAnswer: 'To replenish groundwater levels',
        },
        {
          question: 'Which of the following practices can negatively impact groundwater conservation?',
          options: [
            'Using efficient irrigation methods',
            'Avoiding excessive use of fertilizers and pesticides',
            'Drilling more wells in a small area',
            'Implementing soil conservation techniques'
          ],
          correctAnswer: 'Drilling more wells in a small area',
        },
        {
          question: 'Which type of land cover is most effective in aiding groundwater recharge?',
          options: [
            'Urban areas with concrete surfaces',
            'Agricultural lands with high chemical inputs',
            'Natural forests and grasslands',
            'Areas with heavy machinery and construction'
          ],
          correctAnswer: 'Natural forests and grasslands',
        },
        {
          question: 'What is a key benefit of using drip irrigation in agriculture for groundwater conservation?',
          options: [
            'It increases the amount of water needed for crops.',
            'It allows water to evaporate quickly from the soil.',
            'It delivers water directly to the plant roots, reducing wastage.',
            'It requires more groundwater for irrigation.'
          ],
          correctAnswer: 'It delivers water directly to the plant roots, reducing wastage.',
        },
        {
          question: 'Which of the following methods is commonly used to recharge groundwater?',
          options: [
            'Drilling deep wells',
            'Building large reservoirs',
            'Planting cover crops',
            'Constructing recharge wells'
          ],
          correctAnswer: 'Planting cover crops',
        },
        {
          question: 'Which of the following is a common practice for maintaining soil structure?',
          options: [
            'Tillage',
            'Crop rotation',
            'Excessive fertilization',
            'Monoculture'
          ],
          correctAnswer: 'Crop rotation',
        },
        {
          question: 'What is the primary purpose of using a conservation buffer strip in agriculture?',
          options: [
            'To increase soil erosion',
            'To reduce runoff and improve water quality',
            'To promote monoculture',
            'To expand urban areas'
          ],
          correctAnswer: 'To reduce runoff and improve water quality',
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
    <h1 style={{textAlign:"center"}}>Advance Level</h1>
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

export default Level3;
