import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ButtonBar from "./components/ButtonBar";
import NameInput from "./components/NameInput";
import Player from "./components/Player";

export default function App() {
  const [names, setNames] = useState([] as string[]);
  const [runTimers, setRunTimers] = useState(false);
  const [reset, setReset] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const addName = (name: string) => {
    const newNames = [...names, name];
    setNames(newNames);
  };

  const removeName = (id: number) => {
    const newNames = [...names];
    newNames.splice(id, 1);
    setNames(newNames);
  };

  const toggleRunTimers = () => {
    !runTimers && setReset(false);
    setRunTimers(!runTimers);
  };

  const resetTimers = () => {
    runTimers && toggleRunTimers();
    setReset(true);
  };

  const doneSelectAll = () => {
    setSelectAll(false);
  };

  return (
    <View style={styles.container}>
      <NameInput onChange={addName} />
      <ButtonBar
        runTimers={runTimers}
        toggleRunTimers={toggleRunTimers}
        resetTimers={resetTimers}
        selectAll={() => setSelectAll(true)}
      />
      <ScrollView>
        {names.map((name: string, index: number) => (
          <Player
            name={name}
            runTimer={runTimers}
            key={index}
            id={index}
            deletePlayer={removeName}
            reset={reset}
            selectAll={selectAll}
            doneSelectAll={doneSelectAll}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
});
