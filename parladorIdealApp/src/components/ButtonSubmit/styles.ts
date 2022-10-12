import styled from "styled-components/native";
import { defaultTheme } from "../../theme";

export const ButtonSubmitContainer = styled.TouchableOpacity`
    border-Color:${defaultTheme.colors.background.black900};
    background-color: ${defaultTheme.colors.blue400};
    border-Width:0.5px;
    padding:8px 12px 12px 8px;
    border-radius:24px;
    margin-top:128px;
    margin-bottom:64px;
    align-items: center;
    align-content: center;
    `

export const TextButton = styled.Text`
  font-size:24px;
  font-family:${defaultTheme.font_family.bold};
  color:${defaultTheme.colors.text.main};
`