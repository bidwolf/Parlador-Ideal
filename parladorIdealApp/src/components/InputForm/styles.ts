import { StyleSheet } from 'react-native';
import styled,{css} from 'styled-components/native'
interface Props{
  isFocused: boolean
}
export const Container = styled.View`
flex-direction:row;
margin-left: 16px;
margin-Bottom:24px;
`
export const InputText = styled.TextInput<Props>`
flex: 1;
  background-color: #121214;
  color: #7A7A80;
  padding: 0 16px;
  margin-right: 48px;
  ${({ isFocused }) => isFocused && css`
    border-width: 1px;
    border-color: #2A95B8;    
  `};
`;
export const IconContainer = styled.View<Props>` height: 48px;
width: 48px;
justify-content: center;
align-items: center;
margin-right: 4px;

${({ isFocused }) => isFocused && css`
  border-left-width: 1px;
  border-left-color: #2A95B8;   
`};
`;
