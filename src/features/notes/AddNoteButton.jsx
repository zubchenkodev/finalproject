import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { toggleSecondarySidebar } from '../sidebar/sidebarSlice';
import { useDispatch } from 'react-redux';
import { StyledAddButton } from '../../styles/ReusableComponents';


const AddNoteButton = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(toggleSecondarySidebar(false));
        navigate('new-note');
    }

    return (
        <StyledAddButton onClick={handleClick}>
        <span><FontAwesomeIcon icon={faFileCirclePlus} /></span>
        Add Note
        </StyledAddButton>
    )
}

export default AddNoteButton