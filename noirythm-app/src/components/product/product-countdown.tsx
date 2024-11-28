"use client";

import { useEffect, useState } from "react";

function ProductCountdown() {
  const [countdown, setCountdown] = useState("");
  const targetDate = new Date("2024-12-31T23:59:59").getTime();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setCountdown("Countdown Complete");
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        setCountdown(countdownString);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="text-center font-semibold text-white flex justify-center">
      {countdown}
      <p className="ml-2">left!</p>
    </div>
  );
}

export default ProductCountdown;
