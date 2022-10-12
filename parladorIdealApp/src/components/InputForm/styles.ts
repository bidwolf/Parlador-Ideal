import styled, { css } from 'styled-components/native'
import { defaultTheme } from '../../theme';
interface Props {
  isFocused: boolean
}
export const Container = styled.View`
flex-direction:row;
margin-left: 16px;
margin-Bottom:24px;
align-content: center;
`
export const InputText = styled.TextInput<Props>`
flex: 1;
  background-color: ${defaultTheme.colors.background.black900};
  color: ${defaultTheme.colors.text.secondary};
  padding: 0 16px;
  ${({ isFocused }) => isFocused && css`
    border-width: 1px;
    border-color: ${defaultTheme.colors.blue500};
  `};
`;

export const IconContainer = styled.View<Props>` 

height: 48px;
width: 48px;
justify-content: center;
align-items: center;
margin-right: 4px;

${({ isFocused }) => isFocused && css`
border-left-width: 1px;
border-left-color: ${defaultTheme.colors.blue500};   
`};
`;
export const ErrorContainer = styled.View<Props>`
height: 48px;
width: 48px;
align-self: center;
align-items: center;
justify-content: center;

`