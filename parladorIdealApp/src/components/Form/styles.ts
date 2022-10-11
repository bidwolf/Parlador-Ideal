import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems:'center',
  },
  input:{
    fontSize:THEME.FONT_SIZE.MD,
    textAlign:'center',
    color: THEME.COLORS.TEXT_SECONDARY,
    width:256,
    marginTop:12,
    marginBottom:12,
    padding:8,
    backgroundColor:THEME.COLORS.BACKGROUND_NEUTRAL,
    borderWidth:1,
    borderColor:THEME.COLORS.CAPTION_300
  },
  button:{
    borderColor:THEME.COLORS.CAPTION_500,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    borderWidth:0.5,
    paddingVertical:8,
    paddingHorizontal:32,
    borderRadius:24,
    marginTop:128,
    marginBottom:64
  },
  buttonText:{
    fontSize:THEME.FONT_SIZE.LG,
    fontFamily:THEME.FONT_FAMILY.BOLD,
    color:THEME.COLORS.CAPTION_300,
  },
  signText: {
    color:THEME.COLORS.TEXT,
    fontSize:THEME.FONT_SIZE.MD,
    marginTop:24
  }
})