import React from 'react';
import PageTemplate from "../../template/PageTemplate";
import {useParams} from "react-router-dom";
import ReadComponent from "../../components/Board/ReadComponent";

const BoardReadPage = ({location}) => {

    let { bno } = useParams();

    console.log("bno: " + bno)

    return (
        <PageTemplate>
            <ReadComponent bno={bno} location={location}></ReadComponent>
        </PageTemplate>
    );
};

export default BoardReadPage;