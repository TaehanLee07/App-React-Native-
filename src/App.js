import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';
import { useState } from 'react';
import UserContext, {UserProvider} from './contexts/UserContext';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <UserContext.Consumer>
          {({ user }) => (<MainStack/> : <AuthStack />)}
        </UserContext.Consumer>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
