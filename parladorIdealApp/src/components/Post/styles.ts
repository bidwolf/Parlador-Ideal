import styled from "styled-components/native";
import { defaultTheme } from "../../theme";

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
font-size: ${defaultTheme.font_size.XSM + 'px'};
`
export const PostData = styled.Text`
margin-right: 12px;
color: ${defaultTheme.colors.success};
font-size: ${defaultTheme.font_size.XSM + 'px'};
`
export const Author = styled.Text`
font-size:${defaultTheme.font_size.SM + 'px'};
margin-left: 24px;
color: ${defaultTheme.colors.blue300};
`
export const PostContainer = styled.SafeAreaView`
flex: 1;
opacity: 0.8;
overflow-y: scroll;
margin-top: 24px;
`
export const PostContent = styled.Text`
font-size:${defaultTheme.font_size.SM + 'px'};
color : ${defaultTheme.colors.text.main}
`