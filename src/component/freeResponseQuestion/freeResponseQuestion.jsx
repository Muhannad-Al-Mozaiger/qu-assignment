import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../../context/globalState';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import numeral from 'numeral';
import './freeResponseQuestion.css';
const FreeResponseQuestion = ({ item ,index}) => {
  const { answers, handleAnswer } = useContext(GlobalStateContext);
  const [answer, setAnswer] = useState(answers[item.id] ? answers[item.id].value : '');

  const handleAnswerChange = (e) => {
    console.log(e);
    setAnswer(e);
    handleAnswer(item.id, e);
  };

  return (
    <div className="item description mb-3">
      <label className='mb-2' htmlFor="desc">{numeral(index + 1).format('00')} - {item.content}</label>
      <ReactQuill direction="rtl" theme="snow" value={answer} onChange={handleAnswerChange}  />
    </div>
  );
};

export default FreeResponseQuestion;