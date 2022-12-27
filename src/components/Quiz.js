import React from 'react'
import {useState} from 'react'
import './quizstyle.css'
const Quiz = () => {
    
    var Question=[
        {
            Question: "What is the capital of India ?",
            Answers:[
                {Answer:"Delhi", isCorrect: true},
                {Answer:"Mumbai", isCorrect: false},
                {Answer:"Neemuch", isCorrect: false},
                {Answer:"Rajasthan", isCorrect: false}   

            ]
        },
        {
            Question: "Who is the Prime Minister of India ?",
            Answers:[
                {Answer:"Rahul Gandhi", isCorrect: false},
                {Answer:"Narendra Modi", isCorrect: true},
                {Answer:"Rajnath Singh", isCorrect: false},
                {Answer:"Ashok Gehlot", isCorrect: false}   

            ]
        },
        {
            Question:"Rahul Gandhi Konsi Machine Bnayega ?",
            Answers:[
                {Answer:"Pesa Chapne ki", isCorrect: false},
                {Answer:"EVM Machine ", isCorrect: false},
                {Answer:"Aloo se sona bnane ki", isCorrect: true},
                {Answer:"kch nhi ", isCorrect: false}   

            ]
        },
        {
            Question:"Halhi me konsi bimari vaps aa rhi h ?",
            Answers:[
                {Answer:"Corona ", isCorrect: true},
                {Answer:"Dangu", isCorrect: false},
                {Answer:"Maleriya", isCorrect: false},
                {Answer:"Inme se koi nhi  ", isCorrect: false}   

            ]
        }
    ]
    
    //useState Hooks
    const[currentQuestion,setcurrentQuestion]= useState(0);
    const[score,setScore]= useState(0);
    const[showScore,setShowScore]= useState(false);

    const handelAnsweResponse = (isCorrect) =>
    {
        if(isCorrect){
            setScore(score+1);
        }
        const nextQuestion = currentQuestion +1;
        if(nextQuestion<Question.length){
            setcurrentQuestion(nextQuestion)
        }
        else{
            setShowScore(true)
        }
    }
    
  const resetQuiz=() =>{
        setcurrentQuestion(0);
        setScore(0);
        setShowScore(false);
  }
  

  return (
    <>
    
        <div className='app'>
            {showScore? (
                <div className='Scored'>
                    You have scored {score} out of {Question.length}
                    <div>
                        <button type="submit" onClick={resetQuiz}  className="again-btn">Play Again!</button>
                    </div>
                </div>
            ):
            (
                <>
                    <div className=''>
                        <div className='num-1'>
                            <span>{currentQuestion+1}</span>/{Question.length}
                        </div>
                        <div className='Questions'>
                            {Question[currentQuestion].Question}
                        </div>
                    </div>
                    <div>
                        {Question[currentQuestion].Answers.map((answer)=>
                        (
                            <button onClick={()=> handelAnsweResponse(answer.isCorrect)} className="btn">{answer.Answer}</button>
                        )
                        
                        )}
                    </div>
                </>
            )
            }
        </div>
    </>
  )
}

export default Quiz
