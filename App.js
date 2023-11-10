import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  ScrollView  from "./src/Scroll";
import  ScrollView  from "./src/Flatlists";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
