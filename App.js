import { SafeAreaView, StyleSheet } from 'react-native';
import Homepage from './components/HomePage';
import NavBar from './components/NavBar';
import Featured from './components/Featured';
import ProductView1 from './components/ProductView1';
import ProductView2 from './components/ProductView2';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Homepage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
