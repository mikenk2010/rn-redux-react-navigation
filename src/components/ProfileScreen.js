import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

var NAME = ''
class ProfileScreen extends Component {
  constructor(props) {
      super(props);

      this.state = {
        username : ''
      }
  }

  // Add right header button and send value to Redux
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    return {
      title: 'Profile 2',
      headerRight: <Button title="Save" onPress={() => navigation.dispatch({type:'EditProfile', username: NAME})} />
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile Screen
        </Text>

        <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(username) =>
             {
               this.setState({username})
               NAME = username
             }
           }
           value={this.state.username}
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

export default connect()(ProfileScreen);
