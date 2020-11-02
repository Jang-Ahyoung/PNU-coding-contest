
import './App.css';
import MaterialButton from './Component/MaterialButton';
import MCode from './Component/MaterialButton';
import Theme from './Component/Theme';
import Progress from './Component/Progress';
import Hint from './Component/Hint';
import Submit from './Component/Submit';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

import ContactMailIcon from '@material-ui/icons/ContactMail';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function App() {
    // const code = 'const a = 0;';
    const height = 660;
    const width = 880;

    const id = 10000;
    const [code, setCode] = useState("const afhdjh = 0;")
    const onEditorChange = e => {
        setCode(e);
    };
    const [codeSave, setCodeSave] = useCookies([`user_code/${id}`]);
    const submitUserCode = () => {
        setCodeSave(`user_code/${id}`, code, {
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });
        setCodeSave('#include int main(void) { printf("%d", 8) return 0;}');
        console.log(code);
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

            <header className='Navbar'>
                <div className='Navbar_Logo'>
                    <AcUnitIcon style={{ fontSize: 50 }} color="primary" ></AcUnitIcon>
                    <a href="" ><b>PNU Coding Academy 안녕 ㅎㅎ</b></a>

                </div>
                <div className='Navbar_Side'>


                    <IconButton >
                        <ContactMailIcon style={{ fontSize: 30 }} />
                    </IconButton>

                    <IconButton aria-label="delete" >
                        <AddIcon style={{ fontSize: 30 }} />
                    </IconButton>

                    <Button variant="contained" color="primary">Sign up</Button>

                </div>

            </header>


            <div className='Big_Body' >
                <div className="space_Left">
                    <div className='code_Block'>
                        <div className='Language_set'>{/* 언어 설정 */}
                            <p className='code_subject'> Languages : </p>

                            <MaterialButton></MaterialButton>
                            <Button type="submit" onClick={submitUserCode}> Submit </Button>

                            {/* <Submit /> */}
                        </div>

                        <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />

                        {/* 에디터 배경 색 설정 */}
                        <div className='Theme_set'>
                            <p className='code_subject'>Theme : </p>
                            {/* <Theme></Theme> */}
                            {/* <Button variant="secondary" onClick={saveUserCode} disabled={!isEditorReady}> */}

                            <Button variant="secondary">
                                임시 저장
                    </Button>
                        </div>
                    </div>



                    <div className="mirror">
                        <div className="side_Icons">
                            <div className="side1">
                                <IconButton><PlayArrowIcon fontSize="large" /></IconButton>
                                <IconButton color="primary" aria-label="delete" ><DeleteIcon fontSize="large" /></IconButton>
                                {/* <p></p> */}
                            </div>
                            <div>
                                <IconButton><HelpOutlineIcon fontSize="large" /></IconButton>
                            </div>

                        </div>
                        {/* <div > */}

                        {/* <MCode code={code} setCode={(value) => setCode(value)} /> */}

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

                            }}
                        />


                        {/* </div> */}


                    </div>
                    <button id="save" onclick="savefiles(editor);">Run</button>
                    <Progress></Progress>
                </div >
                <div className="space_Left">

                    <div className="result">
                        <p>   Result</p>
                    </div>
                    {/* <div className="hint">
            <Hint ></Hint>
          </div> */}

                </div>






            </div>
        </div>


    );
}

export default App;