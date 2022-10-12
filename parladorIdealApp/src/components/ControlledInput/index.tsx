import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { InputForm, InputProps } from '../InputForm'
import { Error } from './styles'
type Props = InputProps & {
  control: Control<any>
  name: string
  error?: FieldError
}
export const ControlledInput = ({ control, error, name, ...rest }: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputForm onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </>
  )
}
