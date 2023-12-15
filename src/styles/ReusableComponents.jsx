import styled from 'styled-components';

export const StyledSubtitle = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #242145;
`;

export const StyledTitle = styled.h3`
    font-size: 1.7rem;
    margin-bottom: 1rem;
    color: #1b1834;
`

export const StyledTextButton = styled.button`
    display: none;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #770ef7;
    @media screen and (max-width: 1000px) {
        display: flex;
    }
`

export const StyledHeading1 = styled.h1`
    font-size: 1.5rem;
    color: #ffffff;
`

export const StyledHeading3 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #1b1834;
`

export const StyledTextBlock = styled.div`
    padding: 2rem;
    background-color: #ffffff;
    color: #130f25;
    border-radius: 16px;
    box-shadow: 0px 20px 40px rgb(0 0 0 / 6%);
    margin-bottom: 1rem;
`;

export const StyledCodeBlock = styled.div`
    padding: 2rem;
    background-color: #1d1e22;
    color: #d6c37b;
    border-radius: 16px;
    margin-bottom: 1rem;
    overflow-x: auto;
    
`

export const StyledInfo = styled.div`
    font-size: .7rem;
    margin-bottom: 1rem;
    color: #130f25;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 16px;
`;

export const StyledMediumIconTextButton = styled.button`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2rem;
    font-weight: bold;
    border: none;
    border: 0;
    border-radius: 999px;
    background-color: #770ef7;
    color: #fff;
    cursor: pointer;
    align-self: flex-end;
`

export const StyledSmallIconButton = styled.button`
    color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;
`

export const StyledSmallColorIconButton = styled.button`
    color: #ffffff;
    background-color: #cc0255;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const StyledSmallInput = styled.input`
    padding: 0 1rem;
    height: 2rem;
    background-color: #ffffff;
    color: #130f25;
    border-radius: 8px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    border: 1px solid #b1b3c3;
`;

export const StyledFlexBoxWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
`

export const StyledTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3rem;
    font-size: .85rem;
    font-weight: bold;
    color: #ffffff;
    padding: .5rem 1rem;
    background-color: #770ef7;
    width: fit-content;
    border-radius: 999px;
`

export const StyledLabel = styled.label`
    color: #cc0255;
    font-weight: bold;
`

export const StyledTextarea = styled.textarea`
    padding: 1rem;
    background-color: #ffffff;
    color: #130f25;
    border-radius: 8px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    min-height: 10rem;
    border: 1px solid #b1b3c3;
`;

export const StyledInput = styled.input`
    padding: .7rem 1rem;
    background-color: #ffffff;
    color: #130f25;
    border-radius: 8px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    border: 1px solid #b1b3c3;
`;

export const StyledSelect = styled.select`
    padding: .7rem 1rem;
    background-color: #ffffff;
    color: #130f25;
    border-radius: 8px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    border: 1px solid #b1b3c3;
`;

export const StyledSelectMini = styled.select`
    padding: .3rem .3rem;
    font-size: .7rem;
    background-color: #ffffff;
    color: #130f25;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    border: 1px solid #b1b3c3;
    margin-bottom: .7rem;
    border-radius: 8px;
`;

export const StyledPage = styled.div`
    background-color: #f4f7fa;
    padding: 1rem;
    height: 100%;
    overflow-y: scroll;
`

export const StyledPageFlex = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
`
export const StyledCheckWrapper = styled.label`
    display: flex;
    gap: .7rem;
    color: #770ef7;
    
`
export const StyledAddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-weight: bold;
    border: none;
    color: #cc0255;
    cursor: pointer;
    height: 100%;
    span {
        font-size: 1.5rem
    }
    &:disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
    }
`

export const StyledSubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-weight: bold;
    border: none;
    color: #770ef7;
    cursor: pointer;
    span {
        font-size: 1.5rem
    }
`
