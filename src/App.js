import './App.css';
import { useState } from "react";
import EditorBox from './components/EditorBox';
import CompileBox from './components/CompileBox';
import Navbar from './components/Navbar';
import axios from "axios";

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
        if (lang === "css" || lang === "html") {
            alert("cannot run HTML or CSS")
        } else {
            if (stdout !== "") {
                setStdout("");
            }

            const data = {
                "stdin": stdin,
                "script": userCode,
                "language": langCodeList[lang],
                "versionId": versionIdList[lang]
            };

            axios.post("http://localhost:3001/execute", data)
                .then(function (res) {
                    console.log(res);
                    if (res.data.statusCode === 200) {
                        setStdout(res.data.output)
                    }
                })
                .catch(function (error) {
                    console.log(error.body)
                });
        }

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