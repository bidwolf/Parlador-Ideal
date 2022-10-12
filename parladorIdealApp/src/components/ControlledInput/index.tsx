import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { InputForm, InputProps } from '../InputForm'
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
          <InputForm onChangeText={onChange} value={value} error={error}{...rest} />
        )}
      />
    </>
  )
}
