import React from 'react';


function test() {
    function input_Text() {
        document.getElementById("test").value = 'JDK\'s blog';
    }
    return (
        <div>
            <input type='text' id='test' value='test용' />
            <input type='button' onclick='input_Text()' value='버튼' />
        </div>


    );
}

export default test;