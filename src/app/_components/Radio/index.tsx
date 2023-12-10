import React from 'react'
import classes from './index.module.scss'
import { type } from 'os'

type RadioProps = {
  value: string
  label: string
  isSelected: boolean
  groupName: string
  handleChange: (value: string) => void
}

const Radio: React.FC<RadioProps> = ({ value, label, isSelected, groupName, handleChange }) => {
  const handleRadioChange = () => {
    handleChange(value)
  }
  return (
    <label className={classes.radioWrapper}>
      <input
        type="radio"
        className={classes.radio}
        checked={isSelected}
        onChange={handleRadioChange}
        name={groupName}
      />
      {label}
    </label>
  )
}

export default Radio
