import styled from 'styled-components/native';
import { defaultTheme } from '../../theme';

export const Container = styled.View`
`;
export const InputContainer = styled.View`
padding-top: 24px;
padding-bottom: 24px;
opacity: 0.5;
align-items: center;
`
export const FooterLink = styled.View`
flex-direction: row;
`

export const SignText = styled.Text`
    color:${defaultTheme.colors.text.main};
    font-size:${defaultTheme.font_size.MD+'px'};
    margin-top:24px;
    padding:8px;
`