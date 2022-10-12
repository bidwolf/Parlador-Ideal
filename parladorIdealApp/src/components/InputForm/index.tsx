import React, { useState } from 'react';
import { TextInputProps, View } from 'react-native';
import Feather from'react-native-vector-icons/Feather'
import { THEME } from '../../theme';
import { Container } from './styles';
export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}
export function InputForm({icon,value,...rest}:InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }
  return (
    <Container>
      <Feather name={icon} size = {32} color ={THEME.COLORS.CAPTION_300} />
    </Container>
  );
}