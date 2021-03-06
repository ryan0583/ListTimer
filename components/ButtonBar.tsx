import React, { ReactElement, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface ButtonBarProps {
  runTimers: boolean;
  toggleRunTimers: () => void;
  resetTimers: () => void;
  selectAll: () => void;
}

const ButtonBar = ({
  runTimers,
  toggleRunTimers,
  resetTimers,
  selectAll,
}: ButtonBarProps): ReactElement => {
  return (
    <View style={styles.buttonBar}>
      <Button
        color={runTimers ? "red" : "#2196F3"}
        title={!runTimers ? "Start Timers" : "Stop Timers"}
        onPress={toggleRunTimers}
      />
      <Button title="Reset Timers" onPress={resetTimers} />
      <Button title="Select All" onPress={selectAll} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default ButtonBar;
