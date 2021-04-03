import React, { ReactElement, useState, useRef } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface NameInputProps {
  onChange: (name: string) => void;
}

const NameInput = ({ onChange }: NameInputProps): ReactElement => {
  const [name, setName] = useState("");
  const [focus, setFocus] = useState(false);

  const textInput = useRef(null);

  const onSubmit = () => {
    if (name) {
      onChange(name);
    }
    setName("");
    setTimeout(
      () => ((textInput.current as unknown) as TextInput).focus(),
      250
    );
  };

  return (
    <View style={styles.parent}>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={setName}
        onSubmitEditing={onSubmit}
        ref={textInput}
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
