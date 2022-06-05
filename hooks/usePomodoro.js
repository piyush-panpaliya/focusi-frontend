import { useCallback, useEffect, useRef, useState } from "react";

export default function usePomodoro({ inputTime,clicked, onStart, onStop, onComplete }) {
  const timerId = useRef(null);
  const [active, setActive] = useState("idle");
  const time = clicked==="work"?inputTime.work:inputTime.break;
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTime] = useState(time);
  const [ticking, setTicking] = useState(false);

  const clear = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const tick = useCallback(() => {
    if (timeLeft > 0) {
      setTime(timeLeft - 1);
      setProgress((count) => count + 1);
    }
    if (timeLeft <= 1) {
      setTicking(false);
      clear();
      onComplete?.();
    }
  }, [onComplete, timeLeft]);

  useEffect(() => {
    if (ticking) {
      timerId.current = setInterval(tick, 1000);
    } else {
      clear();
      setTime(time)
    }

    return clear;
  }, [tick, ticking]);

  // useEffect(() => {
  //   setTime(time);
  // }, [time,active]);

  const start = useCallback(() => {
    setTicking(true);
    setActive(clicked)
    onStart?.();
  }, [onStart]);

  const stop = useCallback(() => {
    setTicking(false);
    onStop?.();
  }, [onStop]);

  const reset = useCallback(() => {
    setTicking(false);
    setProgress(0);
    setActive("idle")
    onStop?.();
  }, [onStop]);

  return {
    start,
    stop,
    reset,
    ticking,
    active,
    setActive,
    timeLeft,
    progress: (progress / time) * 100,
  };
}