import React, { useContext, useState } from 'react';
import TrueFalseQuestion from '../trueFalseQuestion/trueFalseQuestion';
import MultipleChoiceQuestion from '../multipleChoiceQuestion/multipleChoiceQuestion';
import FreeResponseQuestion from '../freeResponseQuestion/freeResponseQuestion';
import { GlobalStateContext } from '../../context/globalState';
import NavBar from '../navBar/navBar';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import './exam.css';
const Exam = () => {
  // const [answers, setAnswers] = useState(examData.answers ? examData.answers : {});
  const { answers, fileName, examData, initStates } = useContext(GlobalStateContext);
const {isChanged, setIsChanged} = useState(false);
console.log(answers===examData.answers);
  const handleFileEdit = () => {
    examData.answers = answers;
    try {
      const fileContent = JSON.stringify(examData, null, 2);
      if (fileName) {
        // Create a new Blob with the updated content
        const blob = new Blob([fileContent],{ type: 'application/x-exm'  });

        // Create a new File object with the updated Blob
        const updatedFile = new File([blob], fileName,{ type: 'application/x-exm'  });

        // Simulate a file download
        const url = URL.createObjectURL(updatedFile);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.log(error);
      console.error('Error parsing JSON:', error);
    }
  };
  const handleCloseExam = () => {
    initStates(null, null);
  }
  return (
    // <div className="exam">
    //   <NavBar saveFile={handleFileEdit} closeExam={handleCloseExam} examName={examData.title} />

    //   <div className='content'>
    //     {examData.groups.map((group) => (
    //       <div key={group.title}>
    //         <h2>{group.title}</h2>
    //         {
    //         group.items.map((item) => (
    //           <div key={item.id}>
    //             {/* Render the question based on the item type */}
    //             {item.type === 'tf' && <TrueFalseQuestion item={item} />}
    //             {item.type === 'mcq' && <MultipleChoiceQuestion item={item} />}
    //             {item.type === 'frq' && <FreeResponseQuestion item={item} />}
    //           </div>
    //         ))
    //         }

    //       </div>
    //     ))}
    //   </div>

    // </div>
    <>
      <NavBar saveFile={handleFileEdit} closeExam={handleCloseExam} examName={examData.title} />
      <div className='mt-5 overflow-y-auto  p-3 ' style={{ height: 'calc(100vh - 50px)' }}>
        {examData.groups.map((group, index) => (


          <Card key={index} >
            <Card.Header >{group.title}</Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              {/* <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text> */}
              {group.items.map((item,index) => (
               <div key={item.id}>
                 {/* Render the question based on the item type */}
                 {item.type === 'tf' && <TrueFalseQuestion item={item} index={index} />}
                 {item.type === 'mcq' && <MultipleChoiceQuestion item={item} index={index}/>}
                 {item.type === 'frq' && <FreeResponseQuestion item={item} index={index}/>}
               </div>
             ))
             }
            </Card.Body>
          </Card>


        ))}
      </div>



    </>
  );
};

export default Exam;