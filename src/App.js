import './App.css';
import {useState} from "react";
import EditorBox from './components/EditorBox';
import CompileBox from './components/CompileBox';
import Navbar from './components/Navbar';

function App() {

    const [lang, setLang] = useState("javascript");
    const [theme, setTheme] = useState("vs-dark");
    const [fontSize, setFontSize] = useState(15);
    const [userCode, setUserCode] = useState("");
    const [stdin, setStdin] = useState("");
    const [stdout, setStdout] = useState("");

    const versionIdList = {
        "javascript": "4",
        "python": "4"
    };

    const langCodeList = {
        "javascript": "nodejs",
        "python": "python3", 
    };

    const handleRun = () => {


    }

    return (
        <div className="App">
            <Navbar
                className="navbar"
                lang={lang} setLang={setLang}
                theme={theme} setTheme={setTheme}
                fontSize={fontSize} setFontSize={setFontSize}
                handleRun={handleRun}
            />
            <div className='main'>
            <EditorBox
                theme={theme}
                fontSize={fontSize}
                lang={lang}
                setUserCode={setUserCode}
            />
            <CompileBox
                stdin={stdin} setStdin={setStdin}
                stdout={stdout}
            />
            </div>
        </div>
    );
}

export default App;