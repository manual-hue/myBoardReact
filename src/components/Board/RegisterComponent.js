import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";


const boardDTOState =  {
    title:'Test Title',
    content:'Test Content',
    writer:'tester'
}

const RegisterComponent = () => {

    const history = useHistory()

    const [boardDTO,setBoardDTO] = useState({...boardDTOState})

    const setValue = (e) => {

        boardDTO[e.target.name] = e.target.value

    }

    const registerAajx = () => {

        axios.post("http://localhost:8080/api/board/register", boardDTO).then(response => {

            console.log(response.data)

            history.push(`/board/list?page=1&size=20`)

        })
    }

    return (
        <div>
            <input type={'text'} name={'title'} value={boardDTO.title} onChange={(e) => setValue(e)}/>
            <input type={'text'} name={'content'}  value={boardDTO.content} onChange={(e) => setValue(e)}/>
            <input type={'text'} name={'writer'}  value={boardDTO.writer} onChange={(e) => setValue(e)}/>
            <button onClick={() => registerAajx()}>Register</button>
        </div>
    );
};

export default RegisterComponent;