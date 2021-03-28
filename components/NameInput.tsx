import React, { ReactElement, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface NameInputProps {
  onChange: (name: string) => void;
}

const NameInput = ({ onChange }: NameInputProps): ReactElement => {
  const [name, setName] = useState("");

  const onSubmit = () => name && onChange(name);

  return (
    <View style={styles.parent}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        onSubmitEditing={onSubmit}
      />
      <Button title="Add" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    width: 200,
    paddingLeft: 10,
  },
});

export default NameInput;
