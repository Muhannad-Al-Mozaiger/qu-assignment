import React, { useContext, useState } from 'react';
// import './multipleChoiceQuestion.css';
import { GlobalStateContext } from '../../context/globalState';
import numeral from 'numeral';
const MultipleChoiceQuestion = ({ item, index }) => {

  const { answers, handleAnswer } = useContext(GlobalStateContext);
  const [answer, setAnswer] = useState(answers[item.id] ? answers[item.id].value : '');
  const _handleAnswer = (choiceId) => {
    setAnswer(choiceId);
    handleAnswer(item.id, choiceId);
  };


  return (
    <div >
      <div class="card fw-bold mb-2">
        <div class="card-body">
        {numeral(index + 1).format('00')} - {item.content}
        </div>
      </div>
      
      {item.choices.map((choice, _index) => (

        <div className=' row mb-2 align-items-center ' key={choice.id}>
          <div class="col-sm-1 w-auto ">
            <input type="radio" class="btn-check" checked={answer === choice.id} name={item.id} id={choice.id} onChange={() => _handleAnswer(choice.id)} autocomplete="off" />
            <label class="btn btn-outline-secondary" for={choice.id}>{numeral(_index + 1).format('00')}</label>
          </div>
          <div className='col fw-300'>{choice.content}</div>
        </div>

        // <div class="container" key={choice.id}>
        //   <label><input className='btn-check' checked={answer === choice.id} name={`question-${item.id}`} type="radio" value={choice.id} onChange={() => _handleAnswer(choice.id)} /> {choice.content}</label>

        // </div>


        // <div key={choice.id}>
        //   <input
        //     type="radio"
        //     name={`question-${item.id}`}
        //     value={choice.id}

        //     onChange={() => handleAnswer(choice.id)}
        //   />
        //   <label>{choice.content}</label>
        // </div>
      ))}


    </div>
  );
};

export default MultipleChoiceQuestion;