/* eslint-disable react/prop-types */

import React,{useEffect, useRef} from 'react'
const Editor = ({isEditorLarge, toggleEditorSize, handleInputChange, markdown}) => {
    const editorRef = useRef(null);
    useEffect(() => {
        editorRef.current.focus();
    }, [])

    return (
        <div id="editor-container" className={isEditorLarge ? ' contain large' : 'contain small'}>
            <div className="heading">
                <h2>Editor</h2>
                <span>(Place the cursor is placed on the extreme left)</span>
                <button className="btn bi-arrows-angle-expand" onClick={toggleEditorSize}>
                </button>
            </div>
            <textarea
            className="control"
            id="editor"
            onChange={handleInputChange}
            value={markdown}
            ref={editorRef}
            />
        </div>
    )
}

export default Editor;