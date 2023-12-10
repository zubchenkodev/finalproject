import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const StyledToggleListButton = styled.button`
    color: #FFFFFF;
`

const ToggleListButton = () => {
  return (
    <StyledToggleListButton>
        <FontAwesomeIcon icon={faList} />
    </StyledToggleListButton>
  )
}

export default ToggleListButton