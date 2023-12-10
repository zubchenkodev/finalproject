import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeTag } from './tags';
import { StyledTag } from '../../styles/ReusableComponents';


export const Tag = ({tag, deletable}) => {

    const dispatch = useDispatch();

    const onRemoveTag = () => {
        dispatch(removeTag(tag.id))
    }

    return (
        <StyledTag>
        <FontAwesomeIcon icon={faHashtag} />
        {tag.name}
        {deletable &&
            <span onClick={onRemoveTag}><FontAwesomeIcon icon={faXmark} /></span>
        }
        </StyledTag>
    )
}

export default Tag;
