import React, { useContext, useState } from 'react';
import './trueFalseQuestion.css';
import { GlobalStateContext } from '../../context/globalState';
import numeral from 'numeral';
const TrueFalseQuestion = ({ item,index }) => {
  const {answers,handleAnswer} = useContext(GlobalStateContext);
  const [answer, setAnswer] = useState(answers[item.id] ? answers[item.id].value : '');

  const _handleAnswer = (_answer) => {
    setAnswer(_answer);
    handleAnswer(item.id, _answer);
  };

  return (
    <form className='true-false mb-3  ' >
      
      <div className="index fw-bold ">{numeral(index+1).format('00')} -</div>
      
        <div class="pane ">
          <label class="label ">
            <span>صح</span>
            <input id="left" checked={answer === item.trueId} class="input" name="radio" type="radio" onClick={() => _handleAnswer(item.trueId)} />
          </label>
          
          <label class="label">
            <span>خطأ</span>
            <input id="right" checked={answer === item.falseId}  class="input" name="radio" type="radio" onClick={() => _handleAnswer(item.falseId)}/>
          </label>
          <span class="selection"></span>
        </div>
      <div className="col q-title">{item.content}</div>
      
    </form>
  );
};

export default TrueFalseQuestion;