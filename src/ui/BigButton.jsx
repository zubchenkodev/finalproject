import React, { Fragment } from 'react';
import styled from'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const StyledBigButton = styled.button`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2rem;
    font-weight: bold;
    border: none;
    border: 0;
    border-radius: 999px;
    background-color: var(--main-color);
    color: #fff;
    cursor: pointer;
`;

const BigButton = ({children, handleClick}) => {

    return (
        <Fragment>
        <GlobalStyles/>
        <StyledBigButton>{children}</StyledBigButton>
        </Fragment>
    )
}

export default BigButton