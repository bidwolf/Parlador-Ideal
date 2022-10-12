import styled from 'styled-components/native';
import { defaultTheme } from '../../theme';

export const Container = styled.TouchableOpacity`
background-color: ${defaultTheme.colors.background.black900};
border-radius: 8px;
border-color: ${defaultTheme.colors.blue300};
border-width: 0.5px;
padding: 12px 0 12px 0 ;
min-height: 128px;
margin-bottom: 24px;
`;