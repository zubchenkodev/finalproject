import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleMainSidebar } from '../sidebar/sidebarSlice';
import {StyledAddButton} from '../../styles/ReusableComponents';

const StyledAddFolder = styled.button`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2rem;
    font-weight: bold;
    border: none;
    border: 0;
    border-radius: 999px;
    background: #e7005e;
    color: #fff;
    cursor: pointer;
`


const AddFolder = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddFolder = (e) => {
    e.preventDefault();
    dispatch(toggleMainSidebar(false));
    navigate('/new-folder');
  }


  return (
    <StyledAddButton
    onClick={handleAddFolder}
    >
    <span><FontAwesomeIcon icon={faFolderPlus} /></span>
    New Folder
    </StyledAddButton>
  )
}

export default AddFolder