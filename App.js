import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';



export default function E() {
  return (
    <View style={styles.container}>
      <Text>Eduardo</Text>
      <Text>Kaue</Text>
      <Text>Clone do projeto aula 18-03-2024 lado A</Text>
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
