import React, { useState } from 'react'
import { StyledSubtitle, StyledSmallColorIconButton, StyledSmallInput, StyledFlexBoxWrapper } from '../../styles/ReusableComponents';
import { StyledInput, StyledLabel } from '../../styles/AddNewNoteStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Tag from './Tag';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTag } from './tags';
import { styled } from 'styled-components';

const StyledBlock = styled.div`
    padding: 2rem;
    background-color: #ffffff;
    color: #130f25;
    border-radius: 16px;
    box-shadow: 0px 20px 40px rgb(0 0 0 / 6%);
    margin-bottom: 1rem;
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 1rem;
    }
`

const StyledCategoriesFlexbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .7rem;
    margin-bottom: 1rem;
`

const StyledMessage = styled.p`
    margin-bottom: 1rem;
`

const AddNewTags = () => {

    const dispatch = useDispatch();

    const tags = useSelector(state => state.tags.tags);

    const [tagName, setTagName] = useState('');

    const onAddNewTag = (e) => {
        e.preventDefault();
        dispatch(addNewTag(tagName));
        setTagName('')
    }

    return (
        <StyledBlock>
            <StyledSubtitle>Categories:</StyledSubtitle>
            {tags.length > 0 ? 
                <StyledCategoriesFlexbox>
                {tags.map(tag => <Tag key={tag.id} tag={tag} deletable={false}/>)}
                </StyledCategoriesFlexbox>
                :
                <StyledMessage>🥸 No categories found 🥸</StyledMessage>
            }
            <form>
            <StyledLabel htmlFor='tagName'>Add new category</StyledLabel>
            <StyledFlexBoxWrapper>
                <StyledSmallInput 
                    type="text" 
                    id="tagName"
                    name="tagName"
                    value={tagName}
                    onChange={e => setTagName(e.target.value)}
                    />
                <StyledSmallColorIconButton onClick={onAddNewTag}><FontAwesomeIcon icon={faCheck} /></StyledSmallColorIconButton>
            </StyledFlexBoxWrapper>
            </form>
        </StyledBlock>
    )
}

export default AddNewTags