import React, { useContext, useState } from 'react';
import Exam from '../exam/exam.jsx';
import { GlobalStateContext } from '../../context/globalState.jsx';
import json5 from 'json5';
const FileContent = () => {
    const [jsonData, setJsonData] = useState(null);
    const [file, setFile] = useState(null);
    const { answers, setAnswers } = useContext(GlobalStateContext);


    const handleFileChange = (event) => {
        const _file = event.target.files[0];
        setFile(_file);
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const fileContent = event.target.result;
            try {
                const jsonData = json5.parse(fileContent);
                // const jsonData = JSON.parse(fileContent);
                // const jsonData = JSON.stringify(fileContent, null, 2);
                console.log(jsonData);
                setJsonData(jsonData);
                if (jsonData.answers) {
                    setAnswers(jsonData.answers);
                }
            } catch (error) {
                console.log(error);
                console.error('Error parsing JSON:', error);
                // if (error instanceof SyntaxError) {
                //     // If the error is a SyntaxError, it means the JSON format is invalid
                //     console.log('Invalid JSON format detected. Attempting to fix...');
                
                //     // Replace the invalid characters with the correct ones
                //     const fixedContent = fileContent.replace(/(\$?\$?\w+)\s*:/g, '"$1":');
                // console.log(fixedContent);
                //     // Try to parse the fixed content
                //     try {
                //       const fixedData = JSON.parse(fixedContent);
                //       console.log(fixedData);
                //     } catch (fixedError) {
                //         console.log(fixedError);
                //       console.error('Error parsing the fixed JSON:', fixedError);
                //     }
                //   } else {
                //     console.error('Error parsing the JSON:', error);
                //   }
            }
        };
        fileReader.readAsText(_file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {jsonData && (
                // <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                <Exam examData={jsonData} file={file} />
            )}
        </div>
    );
};

export default FileContent;