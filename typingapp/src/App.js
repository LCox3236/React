import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Timer from "./Components/Timer";
import { useState, useEffect } from "react";

function App() {
  const [timerActive, setTimerActive] = useState(false);
  const [timer, setTimer] = useState(() => {
    return 0;
  });
  const [backspaceCounter, setBackspaceCounter] = useState(() => {
    return 0;
  });
  const [listening, setListening] = useState(false);
  const [targetString, setTargetString] = useState(() => {
    return "test string";
  });
  const [inputString, setInputString] = useState(() => {
    return "";
  });
  const [formattedString, setFormattedString] = useState(() => {
    return "";
  });
  const [resultsString, setResultsString] = useState(() => {
    return "";
  });

  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerActive]);

  useEffect(() => {
    check();
    setFormattedString(formatInputString(inputString));
  }, [inputString]);

  useEffect(() => {
    if (listening == true) {
      document.addEventListener("keydown", processInput);

      return () => document.removeEventListener("keydown", processInput);
    }
  }, [listening]);

  function formatInputString() {
    //console.log(inputString);
    if (inputString.length > 0 || listening == true) {
      let comparedStringsArray = [];

      for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].toLowerCase() == targetString[i].toLowerCase()) {
          comparedStringsArray[i] = [
            { key: i, character: inputString[i], result: "correct" },
          ];
        } else {
          comparedStringsArray[i] = [
            { key: i, character: inputString[i], result: "incorrect" },
          ];
        }
      }
      return comparedStringsArray.map((data) => (
        <span id="input-display-inner" className={data[0].result}>
          {data[0].character.replace(" ", "_")}
        </span>
      ));
    }
  }

  const processInput = (value) => {
    if ((value.keyCode >= 65 && value.keyCode <= 90) || value.keyCode === 32) {
      setInputString((inputString) => inputString + value.key);
    } else if (value.keyCode == 8) {
      setBackspaceCounter((backspaceCounter) => {
        return backspaceCounter + 1;
      });

      setInputString((inputString) => inputString.slice(0, -1));
    }
  };

  function calculateAccuracy(results) {
    let correct = 0;
    let incorrect = 0;
    results.forEach((result) => {
      if (result.props.className === "correct") {
        correct += 1;
      } else {
        incorrect += 1;
      }
    });
    let percentage = (correct / (correct + incorrect)) * 100;
    return `correct=${correct}, 
    incorrect=${incorrect}, 
    percentage=${Math.round(percentage)}, 
    backspaceCount=${backspaceCounter}`;
  }

  function check() {
    //console.log(`inp = ${inputString.length} tar = ${targetString.length}`);
    if (inputString.length == targetString.length) {
      setListening(false);
      setTimerActive(false);
      setResultsString(calculateAccuracy(formattedString));
    }
  }

  function startTimer() {
    document.getElementById("start-button").blur();
    //console.log("start pressed");
    document.getElementById("start-button").disabled = true;
    //document.getElementById("timer-container").style.paddingBottom = "60px";
    setListening(true);
    setTimerActive(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2 id="timer-display"></h2>
      <Timer time={timer} />
      <button id="start-button" onClick={startTimer}>
        START
      </button>
      <div id="target-display">{targetString}</div>

      <div id="input-display-container">{formattedString} </div>
      <h4 id="results-display">{resultsString}</h4>
    </div>
  );
}

export default App;
