import React from 'react'
import classes from './index.module.scss'
const Loader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <span className={classes.loader}></span>
    </div>
  )
}

export default Loader
