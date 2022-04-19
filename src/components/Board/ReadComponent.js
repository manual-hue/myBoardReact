import React, {useEffect, useState} from 'react';
import axios from "axios";
import {parse} from "query-string";
import {Link} from "react-router-dom";


const boardDTOState = {
    bno:"", title:"", content:"", writer:"", regDate:null, updateDate:null
}


const ReadComponent = ({bno, location}) => {

    const [boardDTO, setBoardDTO] = useState(boardDTOState)

    const params = parse(location.search)

    const pageDTO =  {page:params.page || 1, size:params.size || 20}

    const listLinkStr = `/board/list?page=${pageDTO.page}&size=${pageDTO.size}`

    useEffect(() => {

        axios.get(`http://localhost:8080/api/board/${bno}`).then(response => {

            setBoardDTO(response.data.board)
        })

    },[bno])

    return (
        <div>
            <div>
                bno: {boardDTO.bno}
            </div>
            <div>
                title: {boardDTO.title}
            </div>
            <div>
                content: {boardDTO.content}
            </div>

            <Link to={listLinkStr}>LIST</Link>

        </div>
    );
};

export default ReadComponent;