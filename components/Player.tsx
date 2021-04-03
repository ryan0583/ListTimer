import React, { ReactElement, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "./Timer";
import Checkbox from "react-native-check-box";

interface TestComponentProps {
  name: string;
  runTimer: boolean;
  id: number;
  deletePlayer: (id: number) => void;
  reset: boolean;
  selectAll: boolean;
  doneSelectAll: () => void;
}

const Player = ({
  name,
  runTimer,
  id,
  deletePlayer,
  reset,
  selectAll,
  doneSelectAll,
}: TestComponentProps): ReactElement => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (selectAll) {
      setChecked(true);
      doneSelectAll();
    }
  }, [selectAll]);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.parent}>
      <Checkbox
        checkBoxColor={"#2196F3"}
        checkedCheckBoxColor={"#2196F3"}
        isChecked={checked}
        onClick={toggleChecked}
      />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.timer}>
        <Timer run={checked && runTimer} reset={reset} />
      </View>
      <Button color="red" title="delete" onPress={() => deletePlayer(id)} />
    </View>
  );
};

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
