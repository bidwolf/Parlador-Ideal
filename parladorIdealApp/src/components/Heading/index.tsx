import React from 'react';
import { View ,Text,ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { defaultTheme } from '../../theme';
import { styles } from './styles';
interface Props extends ViewProps{
  title:string
  subtitle?:string
  icon ?:Icon
}
export function Heading({title,subtitle,icon,...rest}:Props) {
  return (
    <View style={styles.container}>
      <Icon
              name="user-plus"
              size={64}
              color={defaultTheme.colors.blue300}
              style={styles.icon}
            />
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}