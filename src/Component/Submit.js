import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

export default function SimpleSnackbar() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    const id = 10000;
    const [codeSave, setCodeSave] = useCookies([`user_code/${id}`]);
    const [code, setCode] = useState("const a = 0;");

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
            <Button onClick={handleClick} onClick={submitUserCode} >SUBMIT</Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="제출이 완료되었습니다"
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
            </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="Large" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}
