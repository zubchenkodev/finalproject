import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMainSidebar } from '../reducers/sidebar/sidebarSlice';
import {StyledAddButton} from '../styles/ReusableComponents';

const StyledAddFolder = styled.button`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2rem;
    font-weight: bold;
    border: none;
    border: 0;
    border-radius: 999px;
    background: #cc0255;
    color: #fff;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.5;
    }
    
`


const AddFolder = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tags = useSelector(state => state.tags.tags);

  const isDisable = tags.length === 0;

  const handleAddFolder = (e) => {
    e.preventDefault();
    dispatch(toggleMainSidebar(false));
    navigate('/new-folder');
  }


  return (
    <StyledAddButton
    onClick={handleAddFolder}
    disabled={isDisable}
    >
    <span><FontAwesomeIcon icon={faFolderPlus} /></span>
    New Folder
    </StyledAddButton>
  )
}

export default AddFolder