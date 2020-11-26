import React, { Component } from "react";
import { Container, Header, Content, Picker, Form } from "native-base";

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
            <Picker
              note
              mode="dropdown"
              style={{ width: 100 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Desconozco mi tipo" value="key8" />
              <Picker.Item label="A+" value="key0" />
              <Picker.Item label="A-" value="key1" />
              <Picker.Item label="B+" value="key2" />
              <Picker.Item label="B-" value="key3" />
              <Picker.Item label="O+" value="key4" />
              <Picker.Item label="O-" value="key5" />
              <Picker.Item label="AB+" value="key6" />
              <Picker.Item label="AB-" value="key7" />
            </Picker>
    );
  }
}