import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container : {
    flex:1,
    marginTop:96,
    alignContent:'center',
    alignItems:'center'
  },
  icon :{
    marginTop:24,
    },
  signText: {
    color:THEME.COLORS.ALERT
  }
});