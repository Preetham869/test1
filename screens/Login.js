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

let customFonts = {
  OldEnglish: require('../assets/OldeEnglish.ttf'),
};

export default class Login extends React.Component {
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
            source={require('../assets/Background.jpg')}
            style={{
              flex: 1,
              resizeMode: 'contain',
            }}>
            <ScrollView>
              <Image
                source={require('../assets/Logo.png')}
                style={{
                  width: '90%',
                  height: 250,
                  marginTop: '20%',
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="at" size={24} color="white" />
                <TextInput
                  style={{
                    width: '80%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'white',
                  }}
                  placeholder="Email ID"
                  placeholderTextColor="silver"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons name="lock" size={24} color="white" />
                <TextInput
                  style={{
                    width: '72%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'white',
                  }}
                  placeholder="Password"
                  placeholderTextColor="silver"
                />
                <Feather name="eye-off" size={24} color="white" />
              </View>

              <Text
                style={{
                  marginTop: 10,
                  color: 'violet',
                  fontWeight: 'bold',
                  alignSelf: 'flex-end',
                  marginHorizontal: '5%',
                }}> Forgot Password?
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: 'lime',
                  width: '70%',
                  height: 40,
                  marginTop: 30,
                  borderRadius: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    color: 'blue',
                    fontFamily: 'OldEnglish',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: '',
                  alignSelf: 'center',
                  marginTop: 30,
                  fontSize: 20,
                }}>
                OR
              </Text>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  backgroundColor: 'azure',
                  width: '90%',
                  height: 40,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <Image
                  style={{ width: 40, height: 40, marginLeft: '1%' }}
                  source={require('../assets/Google.png')}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    color: 'green',
                    fontFamily: 'OldEnglish',
                    fontSize: 30,
                  }}>
                  Login with Google
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 30,
                  marginBottom: '10%',
                  color: 'white',
                  fontSize: '95%'
                }}>
                Don't have an account?
                <TouchableOpacity>
                <Text
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                  }}>  Sign Up
                </Text>
                </TouchableOpacity>
              </Text>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}
