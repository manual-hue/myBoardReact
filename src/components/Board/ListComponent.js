import React, {useEffect, useState} from 'react';
import {parse} from "query-string";
import useBoardList from "../../hooks/useBoardList";
import {Link} from "react-router-dom";



const range = (from, to) => {
    const arr = []
    for(let i= from; i <= to; i++){
        arr.push(i)
    }
    return arr
}


const ListComponent = ({location}) => {

    const params = parse(location.search)

    const pageDTO =  {page:params.page, size:params.size | 20}

    const {pageInfo,setPageInfo,getListAjax, movePage, reload}  = useBoardList()

    useEffect(() => {

        getListAjax(pageDTO)

    },[pageDTO.page, reload])


    const boardList = pageInfo.dtoList.map(dto => {


        const linkStr = `/api/board/list/${dto.bno}?page=${pageDTO.page || 1}&size=${pageDTO.size || 10}`

        return <li key={dto.bno}> <Link to={linkStr} >{dto.bno} -- {dto.title}</Link></li>
    })

    const pageList = range(pageInfo.start, pageInfo.end).map(pageNum =>  <li key={pageNum} onClick={() => movePage(pageNum, pageDTO.size)}>{pageNum}</li>)

    return (
        <div>
            <h1>게시글 컴포넌트</h1>
            <h1>Board List Component</h1>

            <ul>
                {boardList}
            </ul>

            <ul>
                {pageInfo.prev? <li onClick={() => movePage(pageInfo.start - 1)}>PREV</li>:""}
                {pageList}
                {pageInfo.next? <li onClick={() => movePage(pageInfo.end + 1)}>NEXT</li>:""}
            </ul>

        </div>
    );
};

export default ListComponent;