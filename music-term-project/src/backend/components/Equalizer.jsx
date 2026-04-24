import { useEffect, useState } from "react";
import "../../frontend/styles/equalizer.css";

function Equalizer({ isPlaying }) {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        // generate random heights
        const newBars = Array.from({ length: 20 }, () =>
          Math.floor(Math.random() * 100)
        );
        setBars(newBars);
      } else {
        // flatten when paused
        setBars(Array(20).fill(10));
      }
    }, 300);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="eq-container">
      {bars.map((height, i) => (
        <div
          key={i}
          className="eq-bar"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
}

export default Equalizer;
