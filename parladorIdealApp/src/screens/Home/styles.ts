import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { defaultTheme } from '../../theme';

export const Container = styled.SafeAreaView`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 64px;
`;
export const ProfileStatusContainer = styled.SafeAreaView`

padding-left: 16px;
height:128px ;
justify-content: space-evenly;

`
export const Publications = styled.Text`
color: whitesmoke;
opacity: 0.7;
font-size: ${defaultTheme.font_size.XL+'px'};
font-family: ${defaultTheme.font_family.semi_bold};
`
export const Contact = styled.Text`
color: greenyellow;
font-size: ${defaultTheme.font_size.SM+'px'};
font-family: ${defaultTheme.font_family.semi_bold};

`
export const ButtonContainer = styled.SafeAreaView`
margin-top: 24px;
margin-bottom: 24px;
`