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
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

// let customFonts = {
//   OldEnglish: require('../assets/OldeEnglish.ttf'),
// };

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   fontsLoaded: false,
    };
  }

//   async _loadFontsAsync() {
//     await Font.loadAsync(customFonts);
//     this.setState({ fontsLoaded: true });
//   }

//   componentDidMount() {
//     this._loadFontsAsync();
//   }

  render() {
    // if (!this.state.fontsLoaded) {
    //   return <AppLoading />;
    // } else {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <Text>Hindi Songs Screen</Text>
          </ScrollView>
        </View>
      );
    }
  }
// }
