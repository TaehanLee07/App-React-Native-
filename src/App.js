import { StatusBar } from 'expo-status-bar';
import SignInScreen from './screen/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <SignInScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});
