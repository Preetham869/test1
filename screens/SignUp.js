import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';

let customFonts = {
  OldEnglish: require('../assets/OldeEnglish.ttf'),
};

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('../assets/bg2.png')}
            style={{
              flex: 1,
              resizeMode: 'contain',
            }}>
            <ScrollView>
              <Image
                source={require('../assets/Logo1.png')}
                style={{
                  width: '80%',
                  height: 230,
                  marginTop: '37%',
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 45,
                  alignSelf: 'center',
                  marginTop: '10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'black',
                  borderRadius: 10,
                }}>
                <Ionicons name="person" size={24} color="blue" />
                <TextInput
                  style={{
                    width: '80%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'blue',
                  }}
                  placeholder="Name"
                  placeholderTextColor="gray"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 45,
                  alignSelf: 'center',
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'black',
                  borderRadius: 10,
                }}>
<MaterialCommunityIcons name="fast-forward-10" size={24} color="blue" />                <TextInput
                  style={{
                    width: '80%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'blue',
                  }}
                  placeholder="Age"
                  placeholderTextColor="gray"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 45,
                  alignSelf: 'center',
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'black',
                  borderRadius: 10,
                }}>
                <FontAwesome name="at" size={24} color="blue" />
                <TextInput
                  style={{
                    width: '80%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'blue',
                  }}
                  placeholder="Email ID"
                  placeholderTextColor="gray"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 45,
                  alignSelf: 'center',
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'black',
                  borderRadius: 10,
                }}>

      <MaterialCommunityIcons name="lock" size={24} color="blue" />                    <TextInput
                  style={{
                    width: '70%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'blue',
                  }}
                  placeholder="Password"
                  placeholderTextColor="gray"
                />
            <Feather name="eye-off" size={24} color="blue" />
            </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 45,
                  alignSelf: 'center',
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'black',
                  borderRadius: 10,
                }}>
      <MaterialCommunityIcons name="lock-alert" size={24} color="blue"/>               <TextInput
                  style={{
                    width: '70%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'blue',
                  }}
                  placeholder="Confirm Password"
                  placeholderTextColor="gray"
                />
           <Feather name="eye-off" size={24} color="blue" />
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  width: '60%',
                  height: 50,
                  marginTop: '10%',
                  borderRadius: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}>
                <Text
                  style={{
                    fontSize: 35,
                    color: 'blue',
                    fontFamily: 'OldEnglish',
                  }}>Sign In</Text>
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}
