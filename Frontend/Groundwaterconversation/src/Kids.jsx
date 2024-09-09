import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Kids() {
    const quizData=[
        {
            questionText:"Wat_r",
            answerOption:[
                {answerText:"r",isCorrect:false},
                {answerText:"e",isCorrect:true},
                {answerText:"a",isCorrect:false},
                {answerText:"p",isCorrect:false}
            ]
        },
        {
            questionText:"W_ll",
            answerOption:[
                {answerText:"g",isCorrect:false},
                {answerText:"j",isCorrect:false},
                {answerText:"s",isCorrect:false},
                {answerText:"e",isCorrect:true}
            ]
        },
        {
            questionText:"Oce_n",
            answerOption:[
                {answerText:"z",isCorrect:false},
                {answerText:"a",isCorrect:true},
                {answerText:"y",isCorrect:false},
                {answerText:"c",isCorrect:false}
            ]
        },
        
        {
            questionText:"Eco_ystem",
            answerOption:[
                {answerText:"g",isCorrect:false},
                {answerText:"j",isCorrect:false},
                {answerText:"s",isCorrect:true},
                {answerText:"e",isCorrect:false}
            ]
        },
        {
            questionText:"Irri_ation",
            answerOption:[
                {answerText:"f",isCorrect:false},
                {answerText:"j",isCorrect:false},
                {answerText:"y",isCorrect:false},
                {answerText:"g",isCorrect:true}
            ]
        },
        {
            questionText:"Eva_oration",
            answerOption:[
                {answerText:"p",isCorrect:true},
                {answerText:"d",isCorrect:false},
                {answerText:" l",isCorrect:false},
                {answerText:"z",isCorrect:false}
            ]
        },
        {
            questionText:"Aqui_er",
            answerOption:[
                {answerText:"t",isCorrect:false},
                {answerText:"f",isCorrect:true},
                {answerText:" y",isCorrect:false},
                {answerText:"z",isCorrect:false}
            ]
        },
        {
            questionText:"Stre_m",
            answerOption:[
                {answerText:"e",isCorrect:false},
                {answerText:"a",isCorrect:true},
                {answerText:"b ",isCorrect:false},
                {answerText:"j",isCorrect:false}
            ]
        },
        {
            questionText:"Conde_sation",
            answerOption:[
                {answerText:"n",isCorrect:true},
                {answerText:"p",isCorrect:false},
                {answerText:"h",isCorrect:false},
                {answerText:"z",isCorrect:false}
            ]
        },
        {
            questionText:"Reser_oir",
            answerOption:[
                {answerText:"r",isCorrect:false},
                {answerText:"q",isCorrect:true},
                {answerText:"v ",isCorrect:false},
                {answerText:"n",isCorrect:false}
            ]
        },
       
    ]
    const [currentquestion,setCurrentquestion]=useState(0);
    const [score,setscore]=useState(0);
    const handleAnswer=(isCorrect)=>{
        if(isCorrect){
            setscore(score+1);
        }
        setCurrentquestion(currentquestion+1)
    }
  return (
    <div>
<div style={{height:"100vh",width:"100vw",backgroundColor:"#EDEADE"}}>
        <h1 style={{textAlign:"center"}}>Missing Word</h1>
        {currentquestion<quizData.length?(
            <>
            <div className="main">
            <div className="question">
                {quizData[currentquestion].questionText}
            </div>
            <div className="answer">
                {quizData[currentquestion].answerOption.map((answerOption,index)=>(
                    <button style={{ height: "70px",width: "250px",marginLeft:"160px"}} key={index} onClick={()=>{handleAnswer(answerOption.isCorrect)}}>{answerOption.answerText}</button>
                ))}
            </div>
            </div>
            
            </>
        ):(
            <>
            <div className="mainc" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}}>
            <div className="score">
                <h1>Your score is {score} out of {quizData.length}</h1>
                <h1>{score}/{quizData.length}</h1>
                <button style={{backgroundColor:"greenyellow"}}><Link style={{color:"black"}} to='/'>Home</Link></button>

            </div>
            </div>
            </>
        )}
    </div>
    </div>
  )
}

export default Kids