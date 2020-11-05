import React from 'react';
import '../test.css';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

import axios from 'axios';
import { useCookies } from 'react-cookie';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Button, IconButton, FormControlLabel, Checkbox } from '@material-ui/core';
import Theme from '../Component/Theme';
import { useState } from 'react';
import MaterialButton from '../Component/MaterialButton';

function Home() {
    const a = ">>Next"
    const height = 600;
    const width = 880;
    const id = 10000;
    const [code, setCode] = useState("const a = 0;")
    const [codeSave, setCodeSave] = useCookies([`user_code/${id}`]);
    const onEditorChange = e => setCode(e);
    const deleteValue = () => setCode('');

    const submitUserCode = () => {
        const problem_id = 1;
        axios.defaults.baseURL = 'http://127.0.0.1:5009/api';
        axios
            .post("/pending/submitCode", {
                problem_number: problem_id,
                language: "c",
                code: code,
            })
            .then((result) => {
                alert("제출에 성공했습니다!");
            })
            .catch((err) => {
                if (err.response === undefined) {
                    alert("서버와 연결이 끊어졌습니다.");
                } else {
                    alert("제출에 실패했습니다...");
                }
            });
    };

    return (
        <div>
            <div className="header">
                <div className="logo__">
                    <img src="img/PNU_Logo.jpg" alt="Logo"></img>
                    <a href="/" >Pnu Coding Academy</a>
                </div>
                <div className="header-menu">
                    <a href="/" >Coding</a>
                    <a href="code" className="active">Code Review</a>
                    <a href="#">Q & A</a>
                </div>
                <div className="user-settings">
                    <div className="dark-light">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg>
                    </div>

                    <div className="user-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" classNameName="feather feather-square">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
                    </div>
                    <img className="user-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt=""></img>
                    <div className="user-name__">David Jang</div>
                </div>
            </div>

            <div className='Big_Body' >
                <div className="space_Left">
                    <Button className="next">{a}</Button>
                </div>
                <div className="space_Left">
                    <div className='code_Block'>
                        <div className='Language_set'>{/* 언어 설정 */}
                            <p className='code_subject'></p>
                            <Button type="submit" onClick={submitUserCode} variant="contained" color="primary">Submit</Button>
                        </div>
                        {/* <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} /> */}
                        <MaterialButton></MaterialButton>
                        <Theme></Theme>

                        <div className='Theme_set'>
                            <Button color="primary">임시 저장</Button>
                        </div>
                    </div>


                    <div className="mirror">
                        <div className="side_Icons">
                            <div className="side1">
                                <IconButton><PlayArrowIcon style={{ fontSize: 30 }} /></IconButton>
                                <IconButton onClick={deleteValue} color="primary" aria-label="delete" ><DeleteIcon style={{ fontSize: 28 }} /></IconButton>
                            </div>
                            <div className="side1">
                                <IconButton><HelpOutlineIcon style={{ fontSize: 30 }} /></IconButton>
                            </div>

                        </div>

                        <CodeMirror
                            value={code}
                            onChange={(editor) => {
                                setCode(editor.getValue());
                            }}
                            height={height}
                            width={width}

                            options={{
                                mode: 'jsx',
                                theme: 'monokai',
                                tabSize: 2,
                                keyMap: 'sublime',
                                autoCloseTags: true,
                                lineWrapping: true,
                                extraKeys: { "Ctrl-Space": "autocomplete" },
                                autocorrect: Boolean,
                                spellcheck: Boolean,
                                electricChars: Boolean,
                            }}
                        />
                    </div>
                </div >
                <div className="space_Left">

                    <div className="result">
                        <p>Result</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;