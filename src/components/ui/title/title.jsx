import React from 'react';
import { StyledTitle } from './styled';

export const TitleLevel = {
  H1: '1',
  H2: '2',
  H3: '3',
  H4: '4',
  H5: '5',
  H6: '6',
};

export const TitleColor = {
  PRIMARY: 'primary',
  GRAY: 'gray',
};

export const TitleType = {
  SECTION: 'section',
  CARD: 'card',
  SOFTSKILLS: 'softSkills',
};

function Title({ level, color, type, children }) {
  return (
    <StyledTitle as={`h${level}`} $color={color} $titleType={type}>
      {children}
    </StyledTitle>
  );
}

export default Title;
