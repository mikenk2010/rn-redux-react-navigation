import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

var DATA = []
class MainScreen extends Component {
  static navigationOptions = {
   title: 'Home Screen',
  }

  componentWillReceiveProps(props){
    console.log(props)
  }

  componentDidMount(){
    if(this.props.mynamehere){
      var d = new Date();
      var fake_key = d.getMilliseconds();
      var data = {key: fake_key, username: this.props.mynamehere, time: d.toLocaleTimeString()}
      DATA.push(data)
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <LoginStatusMessage />

        <AuthButton />

        <View style={{flexDirection:'row'}}>
          <Text>Msg from LoginPage: </Text>
          <Text style={{fontWeight:'bold'}}>{this.props.haha}</Text>
        </View>

        <View style={{flex:1, borderColor:'red', borderWidth:1, padding:10, margin:20}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Text>{item.username} -- {item.time}</Text>}
          />
        </View>

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
});

const mapStateToProps = state => ({
  haha: state.auth.baobao,
  mynamehere: state.auth.username
});

export default connect(mapStateToProps)(MainScreen);
