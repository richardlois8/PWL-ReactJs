import React from "react";  
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: red;
    color: white;
    padding: 10px;
`;

const Content = () => {
    return(
        <StyledDiv>
            Styling dengan styled component
        </StyledDiv>
    )
};

export default Content