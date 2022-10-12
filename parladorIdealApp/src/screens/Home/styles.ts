import styled from 'styled-components/native';
import { defaultTheme } from '../../theme';

export const IconContainer = styled.View` 
flex-direction: row;
justify-content: center;
align-items: center;
margin-right: 24px;
align-self: flex-end;
padding-top: 12px;
padding-bottom: 12px;
`
export const LikesCounter = styled.Text`
margin-left: 12px;
color: ${defaultTheme.colors.alert};
font-size: ${defaultTheme.font_size.XSM+'px'};
`
export const PostData = styled.Text`
margin-right: 12px;
color: ${defaultTheme.colors.success};
font-size: ${defaultTheme.font_size.XSM+'px'};
`
export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
`;
export const Author = styled.Text`
font-size:${defaultTheme.font_size.SM+'px'};
margin-left: 24px;
color: ${defaultTheme.colors.blue300};
`;
export const PostContent= styled.Text`
align-self: center;
font-size:${defaultTheme.font_size.SM+'px'};
margin-top: 24px;
margin-left: 12px;
color : ${ defaultTheme.colors.text.main}
`;