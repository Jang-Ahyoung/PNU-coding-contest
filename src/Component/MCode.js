import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

function MCode(props) {
    const height = 660;
    const width = 880;
    return (

        <CodeMirror

            value={props.code}
            onChange={(editor, data, value) => {
                props.setCode(value)
            }}
            height={height}
            width={width}

            options={{
                mode: 'jsx',
                theme: 'monokai',
                tabSize: 2,
                keyMap: 'sublime',
                autoCloseTags: true,

            }}
        />
    );
}