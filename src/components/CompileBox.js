import React from 'react';

const CompileBox = ({stdin, setStdin, stdout}) => {
    return (
        
        <div className='compile-box'>
            <div className="input-box">
                <textarea name="user-input" id="user-input"  value={stdin}
                    onChange={(e) => setStdin(e.target.value)}
                />

            </div>
            <div className="output-box">
                <textarea readOnly name="user-output" id="user-output" value={stdout}/>
            </div>
        </div>        
        
    );
};

export default CompileBox;