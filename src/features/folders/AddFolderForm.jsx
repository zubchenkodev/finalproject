import React, { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewFolder } from './folders';
import { StyledLabel, StyledTextarea, StyledInput, StyledSelect, StyledSubmitButton } from '../../styles/ReusableComponents';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck,  faAngleLeft} from '@fortawesome/free-solid-svg-icons';


const StyledFolderForm = styled.form`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    overflow-y: auto;
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    @media screen and (max-width: 1000px) {
        width: 100%;
    }

`

const StyledSidebarFooter = styled.footer`
  padding: 1rem;
  border-top: solid 2px #b1b3c3;
  display: flex;
  justify-content: flex-end;
`

const AddFolderForm = () => {

    const [name, setName] = useState('');

    const [description, setDescription] = useState('');

    const [categoryId, setCategoryId] = useState('');

    const dispatch = useDispatch();

    const tags = useSelector(state => state.tags.tags);

    console.log(categoryId);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) return;
        dispatch(addNewFolder(name, description, categoryId));
        setName('');
        setDescription('');
        setCategoryId('');
    }

    return (
        <Fragment>
        <StyledFolderForm>
            <div>
            <StyledLabel htmlFor="folderName">Folder Name:</StyledLabel>
            <StyledInput
                type="text"
                id="folderName"
                name="folderName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
            <div>
            <StyledLabel htmlFor="folderDescription">Folder Description:</StyledLabel>
            <StyledTextarea
                id="folderDescription"
                name="folderDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            { tags.length > 0 &&
                <div>
                <StyledLabel htmlFor="folderCategory">Folder Category:</StyledLabel>
                <StyledSelect name="folderCategory" id="folderCategory" onChange={(e) => setCategoryId(e.target.value)}>
                    <option value="" disabled>Select Category</option>
                    {tags.map(tag => <option value={tag.id} key={tag.id}>{tag.name}</option>)}
                </StyledSelect>
                </div>
            }
            </StyledFolderForm>
            <StyledSidebarFooter>
            <StyledSubmitButton onClick={handleSubmit} type="submit"><span><FontAwesomeIcon icon={faCircleCheck}/></span>Submit</StyledSubmitButton>
            </StyledSidebarFooter>
            </Fragment>
    )
}

export default AddFolderForm