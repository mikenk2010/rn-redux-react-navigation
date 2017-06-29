import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class LoginScreen extends Component {
  state = {
    text : ''
  }

  static navigationOptions = {
   title: 'Login'
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login Screen
        </Text>

        <Text style={styles.instructions}>
          Redux + React Navigation
        </Text>

        <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
         />

        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Login', baobao : this.state.text })}
          title="Log in"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
