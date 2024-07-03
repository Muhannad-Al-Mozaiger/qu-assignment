import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import './filePicker.css'
import { GlobalStateContext } from '../../context/globalState'
import json5 from 'json5'
const FilePicker = () => {
    const {initStates} = useContext(GlobalStateContext);
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        const _file = acceptedFiles[0];
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const fileContent = event.target.result;
            try {
                const jsonData = json5.parse(fileContent);
                
                console.log(jsonData);
                initStates(jsonData,_file.name);
                
            } catch (error) {
                console.log(error);
                console.error('Error parsing JSON:', error);
                
            }
        };
        fileReader.readAsText(_file);
    }, [])
    const { getRootProps, acceptedFiles, getInputProps, isDragActive } = useDropzone({ onDrop })
const uploadImg=process.env.PUBLIC_URL+(isDragActive? "/upload.gif":"/upload.png");
    return (
        <div className='vh-100' {...getRootProps()}>
            
            <input  {...getInputProps()} />
            {
                <label for="file" class="labelFile">
                    <span><img className='uploadImage' src={uploadImg} alt="" /></span>
                    <p>اسحب الملف هنا او انقر لاختيار ملف</p>
                </label>
            }

        </div>
    )
}

export default FilePicker;