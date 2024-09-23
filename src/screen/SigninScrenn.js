import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SignInScreen from './Screen/SignInScreen';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/main.png')} style={style.image} />
      <StatusBar style="dark" />
      <SignInScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
