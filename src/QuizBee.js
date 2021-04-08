import React, { Component } from "react";
import "../src/assets/style.css";
import quizService from "../src/quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "../src/components/Result";

export default class QuizBee extends Component {
  state = {
    questions: [],
    score: 0,
    response: 0,
  };

  getQuestion = () => {
    quizService().then((question) => {
      this.setState({
        questions: question,
      });
    });
  };

  computeAnswer = (answer, correct) => {
    console.log(`text>>> ${answer} >> correct ${correct}`);
    if (answer === correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5,
    });
  };

  playAgain = () => {
      this.getQuestion();
      this.setState({
          score: 0,
          response: 0
      })
  }

  componentDidMount() {
    this.getQuestion();
  }

  render() {
    const { questions, score } = this.state;
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {questions.length > 0 &&
          this.state.response < 5 &&
          questions.map(({ question, answers, correct, questionId }) => (
            <QuestionBox
              question={question}
              options={answers}
              key={questionId}
              selected={(answer) => {
                this.computeAnswer(answer, correct);
              }}
            />
          ))}
        {this.state.response === 5 ? (
          <Result score={score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}
