import React from 'react'
import { useSelector } from 'react-redux';
import { StyledSubtitle, StyledSmallColorIconButton, StyledSmallInput, StyledFlexBoxWrapper } from '../styles/ReusableComponents';

import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 2rem;
  margin-top: 10px;
  border-radius: 999px;
  margin-bottom: 1rem;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: #770ef7;
  border-radius: 999px;
`;

const StyledBlock = styled.div`
    padding: 2rem;
    background-color: #ffffff;
    color: #130f25;
    border-radius: 16px;
    box-shadow: 0px 20px 40px rgb(0 0 0 / 6%);
    margin-bottom: 1rem;
    @media screen and (max-width: 1000px) {
        padding: 1rem;
    }
`

const StyledFlex = styled.div`
    display: flex;
    gap: .7rem;
    margin-bottom: 1rem;
`
const StyledNumber = styled.span`
    font-weight: bold;
    color: #fd1675;
`

const StyledMessage = styled.p`

`

const Statistics = () => {

    const notes = useSelector(state => state.notes.notes);

    const folders = useSelector(state => state.folders.folders);

    const categories = useSelector(state => state.tags.tags);

    const countNotesByCategory = categoryId => {
        return notes.filter(note => folders.find(folder => folder.categoryId === categoryId && folder.notesIds.includes(note.id))).length;
    };

    const calculatePercentage = (count, total) => {
        return total === 0 ? 0 : ((count / total) * 100).toFixed(2);
    };

    const countFavNotes = () => {
        return notes.filter(note => note.isFav).length;
    };

    const countStudiedNotes = () => {
        return notes.filter(note => note.isStudied).length;
    };

    const sortedCategories = [...categories].sort((a, b) => {
        const countA = countNotesByCategory(a.id);
        const countB = countNotesByCategory(b.id);
        return countB - countA;
    });

    return (
        
        <StyledBlock>
        <StyledSubtitle>Statistics:</StyledSubtitle>
        <div>
        <StyledFlex><strong>Notes created:</strong><StyledNumber>{notes.length}</StyledNumber></StyledFlex>
        <StyledFlex>
        <strong>Favorite notes:</strong><StyledNumber>{countFavNotes()}</StyledNumber><span>{calculatePercentage(countFavNotes(), notes.length)}%</span>
        </StyledFlex>
        <ProgressBarContainer>
            <ProgressBarFill percentage={calculatePercentage(countFavNotes(), notes.length)} />
        </ProgressBarContainer>
        <StyledFlex>
        <strong>Well studied notes:</strong><StyledNumber>{countStudiedNotes()}</StyledNumber><span>{calculatePercentage(countStudiedNotes(), notes.length)}%</span>
        </StyledFlex>
        <ProgressBarContainer>
            <ProgressBarFill percentage={calculatePercentage(countStudiedNotes(), notes.length)} />
        </ProgressBarContainer>
        <StyledSubtitle>Top Notes by Category:</StyledSubtitle>
        {!notes.length && <StyledMessage>🥸 No notes found 🥸</StyledMessage>}
        <div>
          { categories && sortedCategories
            .filter(category => countNotesByCategory(category.id) > 0)
            .map(category => (<div>
              <StyledFlex key={category.id}>
                <strong>{category.name}:</strong> <StyledNumber>{countNotesByCategory(category.id)}</StyledNumber> <span>{calculatePercentage(countNotesByCategory(category.id), notes.length)}%</span>
              </StyledFlex>
                <ProgressBarContainer>
                    <ProgressBarFill percentage={calculatePercentage(countNotesByCategory(category.id), notes.length)} />
                </ProgressBarContainer>
                </div>
            ))}
        </div>
        
        </div>
        </StyledBlock>
    )
}

export default Statistics