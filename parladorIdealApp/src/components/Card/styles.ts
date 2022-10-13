import styled from 'styled-components/native';
import { defaultTheme } from '../../theme';

export const Container = styled.TouchableOpacity`
flex:1;
background-color: ${defaultTheme.colors.background.black900};
border-radius: 8px;
border-color: ${defaultTheme.colors.blue300};
border-width: 0.5px;
padding: 12px ;
width: 256px;
height: 230px;
margin-bottom: 24px;
margin-top: 24px;
margin-right: 24px;
justify-content: space-between;

`;