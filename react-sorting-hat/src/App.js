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
        selected: "",
        correct: "Gryffindor"
      },
      {
        ques: "Slytherin Emblematic is ?",
        ans: ["Serpent", "Lion", "Eagle", "Badger"],
        selected: "",
        correct: "Serpent"
      },
      {
        ques: "Is the sorting hat song different every year",
        ans: ["No", "Yes"],
        selected: "",
        correct: "Yes"
      }
    ],
    currentQuestionNumber: 0,
    noOfCorrectAnswer: 0,
    totalQuestion: 0
  };
  componentDidMount() {
    this.setState({ totalQuestion: this.state.questions.length });
  }
  answerCheckerHandler = elem => {
    const updateState = [...this.state.questions];
    let tempState = updateState[this.state.currentQuestionNumber];
    if (elem === tempState.correct && elem !== tempState.selected) {
      this.setState(prevState => ({
        noOfCorrectAnswer: prevState.noOfCorrectAnswer + 1
      }));
    }
    if (
      elem !== tempState.correct &&
      tempState.correct === tempState.selected
    ) {
      this.setState(prevState => ({
        noOfCorrectAnswer: prevState.noOfCorrectAnswer - 1
      }));
    }
    tempState.selected = elem;
    this.setState({ questions: updateState });
  };
  homeScreenHandler = () => {
    this.setState(prevState => ({
      home: !prevState.home,
      question: !prevState.question
    }));
  };

  questionsHandler = data => {
    if (
      data === "next" &&
      this.state.currentQuestionNumber + 1 < this.state.totalQuestion
    ) {
      this.setState(prevState => ({
        currentQuestionNumber: prevState.currentQuestionNumber + 1
      }));
    }
    if (data === "prev" && this.state.currentQuestionNumber + 1 > 1) {
      this.setState(prevState => ({
        currentQuestionNumber: prevState.currentQuestionNumber - 1
      }));
    }
  };
  render() {
    return (
      <div className="App">
        <Home click={this.homeScreenHandler} display={this.state.home} />
        <Questions
          display={this.state.question}
          questions={this.state.questions[this.state.currentQuestionNumber]}
          next={this.questionsHandler}
          no={this.state.currentQuestionNumber + 1}
          answer={this.answerCheckerHandler}
        />
      </div>
    );
  }
}

export default App;
