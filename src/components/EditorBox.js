import React from 'react';
import Editor from "@monaco-editor/react";

const EditorBox = ({theme, fontSize, lang, setUserCode}) => {

    return (
        <div className="editor">
            <Editor              
                theme={theme}
                options={{fontSize: fontSize}}
                language={lang}
                onChange={(value) => setUserCode(value)}
            />
        </div>
    );
};

export default EditorBox;