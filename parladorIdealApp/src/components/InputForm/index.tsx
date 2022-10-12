import React, { useState } from 'react'
import { FieldError } from 'react-hook-form/dist/types/errors'
import { TextInputProps, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { defaultTheme } from '../../theme'
import { Container, IconContainer, InputText, ErrorContainer } from './styles'
export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name']
  value?: string
  error?: FieldError
}
export function InputForm({ icon, value, error, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }
  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={icon}
          size={32}
          color={
            error
              ? defaultTheme.colors.alert
              : isFilled
              ? defaultTheme.colors.success
              : isFocused
              ? defaultTheme.colors.blue300
              : defaultTheme.colors.text.main
          }
        />
      </IconContainer>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        placeholderTextColor={defaultTheme.colors.text.secondary}
        value={value}
        {...rest}
      />
      <ErrorContainer>
        {error && (
          <Feather
            name="alert-circle"
            size={16}
            color={defaultTheme.colors.alert}
          />
        )}
      </ErrorContainer>
    </Container>
  )
}
