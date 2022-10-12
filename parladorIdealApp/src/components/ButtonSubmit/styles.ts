import styled from "styled-components/native";
import { defaultTheme } from "../../theme";
interface Props{
  onPress: boolean
}
export const ButtonSubmitContainer = styled.TouchableOpacity<Props>`
    border-Color:${defaultTheme.colors.blue300};
    background-color: ${defaultTheme.colors.background.black800};
    border-Width:0.5px;
    padding:8px 12px 12px 8px;
    border-radius:24px;
    margin-top:128px;
    margin-bottom:64px;
    align-items: center;
    align-content: center;
    `
export const Container = styled.View`
align-items: center;
justify-content: center;
`
export const TextButton = styled.Text`
  font-size:24px;
  font-family:${defaultTheme.font_family.bold};
  color:${defaultTheme.colors.blue300};
`