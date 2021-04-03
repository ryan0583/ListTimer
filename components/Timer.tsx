import React, { ReactElement } from "react";
import { Text, View } from "react-native";

interface TimerProps {
  minutes: number;
  seconds: number;
}

const Timer = ({ minutes, seconds }: TimerProps): ReactElement => {
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
