import React, { useEffect, useState } from "react";
import loadingImg from "./spinner.gif"

export function CountdownTime() {
  const [dateTime, setDateTime] = useState({
    days   : "00",
    hours  : "00",
    minutes: "00",
    seconds: "00"
  })
  const countdown = document.getElementById("countdown") as HTMLElement
  const loading = document.getElementById("loading") as HTMLElement

  setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex'
  }, 200);

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date()
      const nextYear = new Date(now.getFullYear()+1, 0, 1)
      const diff    = nextYear.getTime() - now.getTime()
      const d = Math.floor(diff / 1000 / 60 / 60 / 24)
      const h = Math.floor(diff / 1000 / 60 / 60) % 24
      const m = Math.floor(diff / 1000 / 60) % 60
      const s = Math.floor(diff / 1000) % 60
      setDateTime({
        days   : d < 10 ? '0' + d : `${d}`,
        hours  : h < 10 ? '0' + h : `${h}`,
        minutes: m < 10 ? '0' + m : `${m}`,
        seconds: s < 10 ? '0' + s : `${s}`
      })
    }, 1000)
    return () => clearInterval(countdown)
  }, [])


  return (
    <>
      <div className="countdown" id="countdown">
        <div className="time">
          <h1 id="days">{dateTime.days}</h1>
          <h2>days</h2>
        </div>
        <div className="time">
          <h1 id="hours">{dateTime.hours}</h1>
          <h2>hours</h2>
        </div>
        <div className="time">
          <h1 id="minutes">{dateTime.minutes}</h1>
          <h2>minutes</h2>
        </div>
        <div className="time">
          <h1 id="seconds">{dateTime.seconds}</h1>
          <h2>seconds</h2>
        </div>
      </div>
      <img
        src={loadingImg}
        alt="Loading..."
        id="loading"
        className="loading"
      />

    </>
  )
}