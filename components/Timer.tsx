import React, { ReactElement } from "react";
import { useState, useEffect } from "react";
import { Text, View } from "react-native";

interface TimerProps {
  initialMinute?: number;
  initialSeconds?: number;
  run?: boolean;
  reset: boolean;
}

const Timer = ({
  initialMinute = 0,
  initialSeconds = 0,
  run = false,
  reset,
}: TimerProps): ReactElement => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (run) {
        setSeconds(seconds + 1);
        if (seconds >= 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (reset) {
      setSeconds(0);
      setMinutes(0);
    }
  }, [reset]);

  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          textAlign: "right",
        }}
      >
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </View>
  );
};

export default Timer;
