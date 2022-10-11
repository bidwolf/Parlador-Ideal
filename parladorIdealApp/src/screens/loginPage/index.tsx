import React from 'react';
import { View } from 'react-native'
import { Heading } from '../../components/Heading'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { THEME } from '../../theme';
import { Form } from '../../components/Form';
export function LoginPage() {
  return (
    <View style={styles.container}>
      
      <Icon name='user' size ={64} color ={THEME.COLORS.CAPTION_300} style={styles.icon}/>
      <Heading
      title='Efetue seu login'
      />
      <Form/>
    </View>
    
  );
}