import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
let CodeMirror = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('react-codemirror2');
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/material.css');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/css/css');
}

const Editor = (props) => {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);

  const handleChange = () => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      {CodeMirror && (
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: 'material',
            lineNumbers: true,
          }}
        />
      )}
    </div>
  );
};
export default Editor;
