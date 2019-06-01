import React from "react";
import classes from "./Questions.module.scss";
const questions = props => {
  return (
    <div className={classes.Questions} hidden={props.display}>
       <p>Question {props.no}</p>
      <h1>{props.questions.ques}</h1>
      <div className={classes.Answers}>
        {props.questions.ans.map(elem => (
          <p key={elem} onClick={props.answer}>{elem}</p>
        ))}
      </div>
      <div className={classes.Button}>
        <button onClick={()=>props.next('prev')}>Prev</button> <button onClick={()=>props.next('next')}>Next</button>
      </div>
    </div>
  );
};

export default questions;
