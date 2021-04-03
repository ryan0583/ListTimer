import React, { ReactElement, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "./Timer";
import Checkbox from "react-native-check-box";

interface PlayerProps {
  playerInfo: {
    name: string;
    checked: boolean;
    minutes: number;
    seconds: number;
  };
  id: number;
  deletePlayer: (id: number) => void;
  toggleChecked: (id: number) => void;
}

const Player = ({
  playerInfo,
  id,
  deletePlayer,
  toggleChecked,
}: PlayerProps): ReactElement => (
  <View style={styles.parent}>
    <Checkbox
      checkBoxColor={"#2196F3"}
      checkedCheckBoxColor={"#2196F3"}
      isChecked={playerInfo.checked}
      onClick={() => toggleChecked(id)}
    />
    <Text style={styles.name}>{playerInfo.name}</Text>
    <View style={styles.timer}>
      <Timer minutes={playerInfo.minutes} seconds={playerInfo.seconds} />
    </View>
    <Button color="red" title="delete" onPress={() => deletePlayer(id)} />
  </View>
);

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
  },
  timer: {
    flex: 1,
    paddingRight: 10,
  },
  parent: {
    flexDirection: "row",
    width: 250,
    paddingTop: 20,
  },
});

export default Player;
