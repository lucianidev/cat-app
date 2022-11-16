import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Cat from './components/Cat.js';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Cat />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    backgroundColor: '#cfabd0',
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%'
  },

});
