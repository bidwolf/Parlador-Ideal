import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import { defaultTheme } from '../../theme';
import { Alert } from 'react-native';

interface Props	{
  errorMessage:string
}
export function ErrorInfo({errorMessage}:Props) {
  const handleErrorMessage = ()=>{
    Alert.alert(
      'Entrada inválida',
      errorMessage,
      [
        {
          text: "Ok",
          style: "default",
        },
      ],{
        cancelable: true,
        onDismiss() {
          console.log('Alerta fechado');
          
        },
      }
    )

  }
  return (
      <Feather
            onPress={handleErrorMessage}
            name="alert-circle"
            size={16}
            color={defaultTheme.colors.alert}
          />
  );
}