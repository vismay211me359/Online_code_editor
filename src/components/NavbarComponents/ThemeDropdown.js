import React from 'react';
import Select from "react-select";

const ThemeDropdown = ({theme, setTheme}) => {
    const themes = [
        {value: "vs", label: "Light"},
        {value: "vs-dark", label: "Dark"},
    ]

    const themeNames = {
        "vs-dark": "Dark",
        "vs": "Light"
    };

    return (
        <div>
            <Select
                options={themes}
                value={theme}
                onChange={(e) => setTheme(e.value)}
                isSearchable={false}        // disable typing abiltiy in search bar.
                placeholder={themeNames[theme]} />
        </div>
    );
};

export default ThemeDropdown;
