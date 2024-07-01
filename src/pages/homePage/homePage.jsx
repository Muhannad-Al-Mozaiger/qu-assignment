import { useContext } from 'react';
// import './homePage.css';
import { GlobalStateContext } from '../../context/globalState';
import FilePicker from '../../component/filePicker/filePicker';
import Exam from '../../component/exam/exam';
const HomePage = () => {
    const { fileName} = useContext(GlobalStateContext);
    return (
        <div className="home">
            {fileName ? <Exam /> : <FilePicker />}
        </div>
    )
}

export default HomePage;