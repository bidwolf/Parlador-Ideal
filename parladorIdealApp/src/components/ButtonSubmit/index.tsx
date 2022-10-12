import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonSubmitContainer, TextButton } from './styles'
interface Props extends TouchableOpacityProps {
  buttonText: string
}
export const ButtonSubmit: React.FC<Props> = ({
  buttonText,
  ...rest
}: Props) => {
  return (
      <ButtonSubmitContainer {...rest}>
        <TextButton>{buttonText}</TextButton>
      </ButtonSubmitContainer>
  )
}
