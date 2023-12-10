'use client'
import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'
const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 3)
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
      setTime({ days, hours, minutes, seconds })
      if (timeDifference === 0) {
        clearInterval(timerInterval)
      }
    }, 1000)
    return () => {
      clearInterval(timerInterval)
    }
  }, [])
  return (
    <section className={classes.promotion}>
      <div className={classes.promText}>
        <h3 className={classes.title}>Deals Of The Month</h3>
        <p>
          Get ready for a shopping experience like never before with our{' '}
          <span>deals of the month</span>
        </p>
        <ul className={classes.stats}>
          <StatBox value={time.days} label="Days" />
          <StatBox value={time.hours} label="Hours" />
          <StatBox value={time.minutes} label="Minutes" />
          <StatBox value={time.seconds} label="Seconds" />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ value, label }: { value: number; label: string }) => {
  return (
    <li className={classes.statBox}>
      <h4>{value}</h4>
      <p>{label}</p>
    </li>
  )
}

export default Promotion
