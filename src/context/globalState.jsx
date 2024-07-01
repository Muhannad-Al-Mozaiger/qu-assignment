import {  createContext, useState } from "react";

export const GlobalStateContext = createContext()

export const GlobalStateContextProvider = ({ children }) => {
    const [examData, setExamData] = useState(null);
    const [answers, setAnswers] = useState();
    const [fileName, setFileName] = useState();
    const handleAnswer = (questionId, answer) => {
        console.log("answers", questionId, answer);
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [questionId]: {"value":answer},
        }));
    
      };
      const initStates = (_examData,_fileName) => {
        setExamData(_examData);
        setFileName(_fileName);
        if(_examData && _examData.answers)
            setAnswers(_examData.answers);
          else
            setAnswers({});
        
      }
    return (<GlobalStateContext.Provider value={{  answers,setAnswers,handleAnswer, initStates,examData,fileName}}>
        {children}
    </GlobalStateContext.Provider>);
}