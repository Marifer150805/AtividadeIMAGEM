import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
        source={{uri:'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png'}}
      />
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});

