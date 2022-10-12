import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { InputForm, InputProps } from '../InputForm'
type Props = InputProps & {
  control: Control<any>
  name: string
}
export const ControlledInput = ({ control, name, ...rest }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field:{onChange,value}})=>(
        <InputForm
        onChangeText={onChange} value={value}{...rest}
        />
      )}
    />
  )
}
