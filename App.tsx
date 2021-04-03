import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ButtonBar from "./components/ButtonBar";
import NameInput from "./components/NameInput";
import Player from "./components/Player";

interface PlayerType {
  name: string;
  checked: boolean;
  minutes: number;
  seconds: number;
}

export default function App() {
  const [players, setPlayers] = useState([] as PlayerType[]);
  const [runTimers, setRunTimers] = useState(false);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (runTimers) {
        const newPlayers = [...players];
        players.forEach((player: PlayerType, id: number) => {
          if (player.checked) {
            let newSeconds = player.seconds + 1;
            let newMinutes = player.minutes;
            if (newSeconds >= 59) {
              newMinutes = newMinutes + 1;
              newSeconds = 0;
            }

            const newPlayer = {
              ...players[id],
              minutes: newMinutes,
              seconds: newSeconds,
            };
            newPlayers.splice(id, 1, newPlayer);
          }
        });
        setPlayers(newPlayers);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const addPlayer = (name: string) => {
    const newNames = [
      ...players,
      { name, checked: false, minutes: 0, seconds: 0 },
    ];
    setPlayers(newNames);
  };

  const removePlayer = (id: number) => {
    const newPlayers = [...players];
    newPlayers.splice(id, 1);
    setPlayers(newPlayers);
  };

  const toggleChecked = (id: number) => {
    const oldPlayer = players[id];
    const oldChecked = oldPlayer.checked;
    const newPlayer = { ...oldPlayer, checked: !oldChecked };
    const newPlayers = [...players];
    newPlayers.splice(id, 1, newPlayer);
    setPlayers(newPlayers);
  };

  const toggleRunTimers = () => {
    setRunTimers(!runTimers);
  };

  const resetTimers = () => {
    runTimers && toggleRunTimers();
    const newPlayers = [...players];
    players.forEach((player: PlayerType, id: number) => {
      const newPlayer = {
        ...players[id],
        minutes: 0,
        seconds: 0,
      };
      newPlayers.splice(id, 1, newPlayer);
    });
    setPlayers(newPlayers);
  };

  const selectAll = () => {
    const newPlayers = [...players];
    players.forEach((player: PlayerType, id: number) => {
      const newPlayer = {
        ...players[id],
        checked: true,
      };
      newPlayers.splice(id, 1, newPlayer);
    });
    setPlayers(newPlayers);
  };

  return (
    <View style={styles.container}>
      <NameInput onChange={addPlayer} />
      <ButtonBar
        runTimers={runTimers}
        toggleRunTimers={toggleRunTimers}
        resetTimers={resetTimers}
        selectAll={selectAll}
      />
      <ScrollView>
        {players.map((player: PlayerType, index: number) => (
          <Player
            playerInfo={player}
            key={index}
            id={index}
            deletePlayer={removePlayer}
            toggleChecked={toggleChecked}
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
