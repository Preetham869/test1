import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TextInput,
    TouchableOpacity
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
                <ScrollView>
                    <Image
                        source={require("../assets/Logo.png")}
                        style={{ width: "80%", height: 250, marginTop: "20%", alignSelf: 'center', resizeMode: 'contain' }}
                    />

                    {/* <ImageBackground
                        source={require("../assets/musicBackground.jpg")}
                        style={{ width: "80%", height: 250, marginTop: "20%", alignSelf: 'center', resizeMode: 'contain' }}
                    /> */}

                    <Text style={{ fontsize: 22, fontWeight: 'bold', marginLeft: '5%', fontFamily:"OldEnglish" }}>Login</Text>

                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Feather name="at-sign" size={20} color="black" />
                        <TextInput style={{ width: '90%', height: 30, borderBottomWidth: 1, paddingLeft: 10, borderBottomColor: "gray" }} placeholder="Email ID" />
                    </View>

                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="lock" size={24} color="black" />
                        <TextInput style={{ width: '85%', height: 30, borderBottomWidth: 1, paddingLeft: 10, borderBottomColor: "gray" }} placeholder="Password" />
                        <Feather name="eye-off" size={24} color="gray" />
                    </View>

                    <Text style={{ marginTop: 10, color: 'blue', fontWeight: 'bold', alignSelf: 'flex-end', marginHorizontal: '5%' }}>Forgot Password?</Text>

                    <TouchableOpacity style={{ backgroundColor: 'blue', width: '90%', height: 40, marginTop: 30, borderRadius: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: 'white' }}>Login</Text>
                    </TouchableOpacity>

                    <Text style={{ color: 'gray', alignSelf: 'center', marginTop: 30 }}>OR</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#ccc', width: '90%', height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require("../assets/Google.png")} />
                        <Text style={{ marginLeft: 10, color: 'gray' }}>Login with Google</Text>
                    </TouchableOpacity>

                    <Text style={{ alignSelf: 'center', marginTop: 30, color: 'gray' }}>New to Logistics?<Text style={{ color: 'blue', fontWeight: 'bold' }}> Register</Text> </Text>

                </ScrollView>
            </View>
        )
    }
   }
 }
