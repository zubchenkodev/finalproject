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

const StyledMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
`

const FoldersList = () => {

    const folders = useSelector(state => state.folders.folders);

    return (
        <StyledFolderList>
            {folders.length > 0 ? folders.map(folder => <FoldersListItem key={folder.id} folder={folder}/> ) :
            <StyledMessage>
                <b>🥸 No folders found 🥸</b>
                <p>Generate a folder by clicking on the 'Add Folder' button located below. Please, remember that you can only add folders after creating categories.</p>
            </StyledMessage>
            }
        </StyledFolderList>
    )
}

export default FoldersList