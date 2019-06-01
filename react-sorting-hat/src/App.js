import React, { Component } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Questions from "./components/Questions/Questions";

class App extends Component {
  state = {
    home: false,
    question: true,
    questions: [
      {
        ques: "Newt Scamander belonged to what house in Hogwart",
        ans: ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"],
        correct: "Gryffindor"
      },
      {
        ques: "Slytherin Emblematic is ?",
        ans: ["Serpent", "Lion", "Eagle", "Badger"],
        correct: "Serpent"
      },
      {
        ques: "Is the sorting hat song different every year",
        ans: ["No", "Yes"],
        correct: "Yes"
      }
    ],
    questionNumber: 0,
    noOfCorrectAnswer: 0
  };
  answerCheckerHandler=()=>{
    
  }
  homeScreenHandler = () => {
    this.setState(prevState => ({
      home: !prevState.home,
      question: !prevState.question
    }));
  };

  questionsHandler = data => {
    if (data === "next") {
      this.setState(prevState => ({
        questionNumber: prevState.questionNumber + 1
      }));
    }
    if (data === "prev") {
      this.setState(prevState => ({
        questionNumber: prevState.questionNumber - 1
      }));
    }
  };
  render() {
    return (
      <div className="App">
        <Home click={this.homeScreenHandler} display={this.state.home} />
        <Questions
          display={this.state.question}
          questions={this.state.questions[this.state.questionNumber]}
          next={this.questionsHandler}
          no={this.state.questionNumber + 1}
        />
      </div>
    );
  }
}

export default App;
