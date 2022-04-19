import React from 'react';
import PageTemplate from "../template/PageTemplate";
import PersonalInfo from "../components/Portfolio/PersonalInfo";

const PortfolioPage = () => {
    return (
       <PageTemplate>
           <PersonalInfo></PersonalInfo>
       </PageTemplate>
    );
};

export default PortfolioPage;