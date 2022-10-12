import React from 'react';
import { View ,Text,ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { defaultTheme } from '../../theme';
import { styles } from './styles';
interface Props extends ViewProps{
  title:string
  subtitle?:string
  iconName:string
}
export function Heading({title,subtitle,iconName,...rest}:Props) {
  return (
    <View style={styles.container}>
      <Icon
              name={iconName}
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