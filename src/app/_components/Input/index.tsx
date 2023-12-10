import React, { useState } from 'react'
import { FieldValues, UseFormRegister, Validate } from 'react-hook-form'

import classes from './index.module.scss'

type Props = {
  name: string
  label: string
  register: UseFormRegister<FieldValues & any>
  required?: boolean
  error: any
  type?: 'text' | 'number' | 'password' | 'email'
  validate?: (value: string) => boolean | string
  disabled?: boolean
}

export const Input: React.FC<Props> = ({
  name,
  label,
  required,
  register,
  error,
  type = 'text',
  validate,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={classes.inputWrap}>
      <label htmlFor="name" className={classes.label}>
        {label}
        {required ? <span className={classes.asterisk}>&nbsp;*</span> : ''}
      </label>
      <div className={classes.passwordInputWrapper}>
        <input
          className={[classes.input, error && classes.error].filter(Boolean).join(' ')}
          {...{ type: showPassword ? 'text' : type }}
          {...register(name, {
            required,
            validate,
            ...(type === 'email'
              ? {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please enter a valid email',
                  },
                }
              : {}),
          })}
          disabled={disabled}
        />
        {type === 'password' && (
          <>
            <input
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
              className={classes.showPasswordCheckbox}
            />
            <span className={classes.checkBoxMsg}>{showPassword ? 'hide' : 'show'} password</span>
          </>
        )}
      </div>
      {error && (
        <div className={classes.errorMessage}>
          {!error?.message && error?.type === 'required'
            ? 'This field is required'
            : error?.message}
        </div>
      )}
    </div>
  )
}
