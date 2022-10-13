import styled from "styled-components/native";
import { defaultTheme } from "../../theme";
interface props{
  size:number
}
export const ButtonSubmitContainer = styled.TouchableOpacity`
    border-Color:${defaultTheme.colors.background.black900};
    background-color: ${defaultTheme.colors.blue400};
    border-Width:0.5px;
    padding:8px;
    max-width: 256px;
    border-radius:24px;
    align-items: center;
    align-content: center;
    `

export const TextButton = styled.Text<props>`
  font-size: ${({size})=>size+'px'} ;
  font-family:${defaultTheme.font_family.bold};
  color:${defaultTheme.colors.text.main};
`