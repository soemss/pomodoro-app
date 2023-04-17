import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./timer.css";
import autoStart from "../settings/settings";
import alarmDigital from "../audio/alarm-digital.mp3";
import { Howl } from "howler";
import Helmet from "react-helmet";

const alarm = new Howl({
  src: [alarmDigital],
  autoplay: false,
  loop: false,
  volume: 0.15,
});

let studyTime = 1.5e6;
let shortBreak = 600000;
let longBreak = 900000;

// let studyTime = 15000;
// let shortBreak = 5000;
// let longBreak = 900000;
let phase = 0;
const Timer = () => {
  const [timerOn, setTimeOn] = useState(false);
  const [time, setRemainingTime] = useState(studyTime);
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  function updatePhase() {
    alarm.play();

    phase++;
    if (phase === 16) {
      phase = 0;
      setRemainingTime(longBreak);
    } else if (phase % 2 === 0) {
      setRemainingTime(studyTime);
    } else {
      setRemainingTime(shortBreak);
    }
    console.log(phase);
  }
  return (
    <div className="timer">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      <Helmet>
        <title>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)} - pomodoro
        </title>
      </Helmet>
      <div className="button">
        {!timerOn && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0d0f13",
              borderRadius: 3,
              "&:hover": { backgroundColor: "#080a0c" },
              textTransform: "lowercase",
            }}
            className="button"
            onClick={() => setTimeOn(true)}
          >
            <div className="text">start</div>
          </Button>
        )}
        {timerOn && (
          <Button
            variant="contained"
            className="button"
            sx={{
              backgroundColor: "#0d0f13",
              borderRadius: 3,
              "&:hover": { backgroundColor: "#080a0c" },
              textTransform: "lowercase",
            }}
            onClick={() => setTimeOn(false)}
          >
            <div className="text">stop</div>
          </Button>
        )}
      </div>
      {time === 0 && updatePhase()}
    </div>
  );
};
export default Timer;
