import React, { ChangeEvent, useState } from 'react'
import classes from './index.module.scss'

interface CheckboxProps {
  value: string
  label: string
  isSelectedCategory: boolean
  handleClick: (value: string) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ value, label, isSelectedCategory, handleClick }) => {
  const [checked, setChecked] = useState(isSelectedCategory)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    handleClick(value)
  }
  return (
    <label className={classes.checkboxWrapper}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        className={classes.checkbox}
      />
      {label}
    </label>
  )
}

export default Checkbox
