import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import DisplayAnswers from './DisplayAnswers';



function App() {

  const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
  const QUESTION_URL = 'https://opentdb.com/api.php?amount=1'

  const [TOKEN, SET_TOKEN] = useState("");
  // const [questionData, setQuestionData] = useState([])
  const [question, setQuestion] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState("")
  const [allAnswers, setAllAnswers] = useState([])

  //get the token from the api endpoint
  useEffect(() => {
    const getToken = async (URL) => {
      fetch(URL)
        .then(res => res.json())
        .then(data => SET_TOKEN(data["token"]))
    }
    getToken(TOKEN_URL)
  },[])

  //after getting the token, get a question from the api 
  useEffect(() => {
    if(!TOKEN) return
    getQuestion()
  },[TOKEN])


  useEffect(() => {
    if(!question || !allAnswers) return
    console.log(`question: ${question} \n\ncorrect:${correctAnswer}\n\nall answers: ${allAnswers}`)
  },)
//[question, correctAnswer, allAnswers]

  
  const removehtmlelems = (data) => {
    data = data.replace(/&quot;/g, '"')
    data = data.replace(/&#039;/g, "'")
    data = data.replace(/&amp;/g, "&")
    data = data.replace(/&lrm;/g, "")
    data = data.replace(/&eacute;/g, "é")
    return data
  }



  const getQuestion = async () => {
    if(!TOKEN) return;
    setQuestion("");
    fetch(QUESTION_URL)
      .then(res => res.json())
      .then(data => {

        console.log(data["results"][0])
        
        
        
        let ques = data["results"][0]["question"]
        setQuestion(removehtmlelems(ques))
        
        let corAns = data["results"][0]["correct_answer"]
        setCorrectAnswer(removehtmlelems(corAns))
        
        
        
        let wrAns = data["results"][0]["incorrect_answers"]
        let riAns = data["results"][0]["correct_answer"]
        
        wrAns.forEach((ele, index)=>{
          wrAns[index] = removehtmlelems(wrAns[index])
        })
        let rightAnswer = removehtmlelems(riAns)


        let ans = wrAns.concat(rightAnswer)
        let shuffleone = ans.sort(() => Math.random() -0.5 )
        let shuffletwo = shuffleone.sort(() => Math.random() -0.5 )
        let shufflethree = shuffletwo.sort(() => Math.random() -0.5 )
        setAllAnswers(shufflethree)
        


      })

  }
  
  const checkAnswer = (input) => {
    //console.log(`correct ans = ${correctAnswer} \n\ninput = ${input}`)
    if(correctAnswer === input){
      return "correct";
    } else {
      return "incorrect";
    }
  }

  const nextQuestion = () => {
    setQuestion("")
    setCorrectAnswer("")
    setAllAnswers([])
    getQuestion()
  }


  return (
    <div className="App">
      <header className="App-header">

        <div id="QuestionContainer">
          {question}
        </div>
        
        
        <div id="AnswerContainer" >
          {allAnswers.map((item, index) => (
            <DisplayAnswers 
              ans = {item}
              key={index}
              i={index}
              checkAnswer={checkAnswer}
              
            />
          ))}
        </div>
        

        <div id="nextQuestionContainer">
            <button type="button" id="NextQuestionButton"
            onClick={nextQuestion}
            >
              Next Question
            </button>
        </div>

        
        
       
      </header>
    </div>
  );
}

export default App;
