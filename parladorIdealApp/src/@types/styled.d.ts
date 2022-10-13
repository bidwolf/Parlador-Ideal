import 'styled-components';
import { string } from 'yup';
import StringSchema from 'yup/lib/string';
import { font_family } from '../theme';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        black900: string,
        black800: string,
        black600: string
      },
      primary: string,
      success: string,
      alert: string,
      blue300: string,
      blue400: string,
      blue500: string,
      text: {
        main: string,
        secondary: string,
      },
    },

    font_family: {
      regular: string,
      semi_bold: string,
      bold: string,
      black: string
    },
    font_size: {
      XSM:number,
      SM: number,
      MD: number,
      LG: number,
      XL: number
    }
  }
}
