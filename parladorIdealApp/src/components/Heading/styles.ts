import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
    alignItems:'flex-start'
  },
  title:{
    color:defaultTheme.colors.blue300,
    fontFamily:defaultTheme.font_family.regular,
    fontSize:defaultTheme.font_size.LG
  }
});