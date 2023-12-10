import React from 'react';
import { useSelector } from 'react-redux';
import FoldersListItem from './FoldersListItem';
import { styled } from 'styled-components';

const StyledFolderList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    padding: 1rem;
`

const FoldersList = () => {

    const folders = useSelector(state => state.folders.folders);

    return (
        <StyledFolderList>
            {folders.length > 0 ? folders.map(folder => <FoldersListItem key={folder.id} folder={folder}/> ) :
            <p>🥸 No folders found 🥸</p>
            }
        </StyledFolderList>
    )
}

export default FoldersList