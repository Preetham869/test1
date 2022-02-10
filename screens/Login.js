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
            source={require('../assets/bg1.jpg')}
            style={{
              flex: 1,
              resizeMode: 'contain',
            }}>
            <ScrollView>
              <Image
                source={require('../assets/Logo.png')}
                style={{
                  width: '80%',
                  height: 230,
                  marginTop: '20%',
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
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:'white',
                  borderRadius:10
                }}>
                <FontAwesome name="at" size={24} color="black" />
                <TextInput
                  style={{
                    width: '80%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'black',
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
                  backgroundColor:'white',
                  borderRadius:10
                }}>
                <MaterialCommunityIcons name="lock" size={24} color="black" />
                <TextInput
                  style={{
                    width: '72%',
                    height: 30,
                    borderBottomWidth: 2,
                    paddingLeft: 10,
                    borderBottomColor: 'black',
                  }}
                  placeholder="Password"
                  placeholderTextColor="gray"
                />
                <Feather name="eye-off" size={24} color="black" />
              </View>

           <TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  color: 'blue',
                  fontWeight: 'bold',
                  alignSelf: 'flex-end',
                  marginHorizontal: '5%',
                  fontSize:14
                }} onPress={()=>{
                  this.props.navigation.navigate('Forgot Password')
                }}> Forgot Password?</Text>
           </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  width: '60%',
                  height: 50,
                  marginTop: 30,
                  borderRadius: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={()=>{
                  this.props.navigation.navigate('Home')
                }}>
                <Text
                  style={{
                    fontSize: 35,
                    color: 'blue',
                    fontFamily: 'OldEnglish',
                  }}> Sign In </Text>
              </TouchableOpacity>

              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 30,
                  fontSize: 25,
                }}>OR</Text>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  backgroundColor: 'azure',
                  width: '90%',
                  height: 50,
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
                  }}>Login with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 30,
                    marginBottom: '10%',
                    color: 'white',
                    fontSize: 15,
                  }}> Don't have an account?
                  <Text
                    style={{
                      color: 'blue',
                      fontWeight: 'bold',
                    }}
                    onPress={()=>{
                      this.props.navigation.navigate('Sign Up')
                    }}>  Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}
