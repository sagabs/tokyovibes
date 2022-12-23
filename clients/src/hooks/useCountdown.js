import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left

  const Jam = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const Menit = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const Detik = Math.floor((countDown % (1000 * 60)) / 1000);

  return [Jam, Menit, Detik];
};

export default useCountdown;
