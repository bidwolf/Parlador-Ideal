import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
    alignItems:'flex-start'
  },
  title:{
    color:THEME.COLORS.CAPTION_300,
    fontFamily:THEME.FONT_FAMILY.REGULAR,
    fontSize:THEME.FONT_SIZE.LG
  }
});