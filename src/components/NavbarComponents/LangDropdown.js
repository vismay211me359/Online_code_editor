import React from 'react';
import Select from "react-select";

const LangDropdown = ({ lang, setLang }) => {
    const languages = [
        { value: "javascript", label: "JavaScript" },
        { value: "python", label: "Python3" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
    ]

    const languageNames = {
        "javascript": "JavaScript",
        "python": "Python3",
        "html": "HTML",
        "css": "CSS"
    };
    return (
        <div>
            <Select
                options={languages}
                value={lang}
                onChange={(e) => setLang(e.value)}
                isSearchable={false} 
                placeholder={languageNames[lang]}
            />
        </div>
    );
};

export default LangDropdown;