import styled from 'styled-components/native';
import { defaultTheme } from '../../theme';

export const InputContainer = styled.SafeAreaView`
padding-top: 24px;
padding-bottom: 24px;
opacity: 0.5;
align-items: center;
`
export const FooterLink = styled.SafeAreaView`
margin-top: 96px;
flex-direction: row;
`

export const SignText = styled.Text`
    color:${defaultTheme.colors.text.main};
    font-size:${defaultTheme.font_size.MD+'px'};
    margin-top:24px;
    padding:8px;
`
export const ButtonSubmitContainer = styled.SafeAreaView`
margin-top: 24px;
margin-bottom: 24px;
justify-content: center;
align-items: center;
`