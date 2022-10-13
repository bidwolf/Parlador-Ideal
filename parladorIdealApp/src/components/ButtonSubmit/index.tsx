import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonSubmitContainer, TextButton } from './styles'
interface Props extends TouchableOpacityProps {
  buttonText: string
  size?:number|string
}
export const ButtonSubmit: React.FC<Props> = ({
  buttonText,size,
  ...rest
}: Props) => {
  return (
      <ButtonSubmitContainer {...rest}>
        <TextButton size={size||'24'}>{buttonText}</TextButton>
      </ButtonSubmitContainer>
  )
}
