import axios from "axios";
import {useState} from "react";
import {useHistory} from "react-router-dom";


const pageInfoState = {
    count:0,
    page:1,
    size:10,
    prev:false,
    next:false,
    start:0,
    end:0,
    dtoList:[]
}

const range = (from, to) => {
    const arr = []
    for(let i= from; i <= to; i++){
        arr.push(i)
    }
    return arr
}


export default () => {

    const history = useHistory()
    const [pageInfo, setPageInfo] = useState(pageInfoState)

    const getListAjax = async (pageDTO) =>{

        const response = await axios.get(`http://localhost:8080/api/board/list?page=${pageDTO.page ? pageDTO.page: 1}&size=${pageDTO.size}`)

        setPageInfo(response.data)

    }

    const [reload, setReload] = useState(false)

    const movePage = (num, size) => {
        history.push(`/board/list?page=${num}&size=${size}`)
        setReload(!reload)
    }

    return {
        pageInfo,
        setPageInfo,
        getListAjax,
        movePage,
        reload
    }

}



















