import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { routes } from './src/utills/routes';
import { BottomBar } from './src/components/template/BottomBar/BottomBar';
import * as Font from 'expo-font';
import EventBus from 'react-native-event-bus'
import { TopBar } from './src/components/template/TopBar/TopBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from "react-native"
import './i18n';
import { RegisterModal } from './src/components/modals/RegisterModal';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoadFonts, setIsLoadFonts] = useState(false);
  const [registerModalState, setRegisterModalState] = useState(false);

  const handleCloseRegisterModal = () => {
    setRegisterModalState(!registerModalState)
  }

  useEffect(() => {
    loadFonts();

    EventBus.getInstance().addListener("open-register-modal", this.listener = data => {
      console.log('test')
      setRegisterModalState(!registerModalState)
    })
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
      MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
      MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
      RubikLight: require('./assets/fonts/Rubik-Light.ttf'),
      RubikRegular: require('./assets/fonts/Rubik-Regular.ttf'),
      RubikMedium: require('./assets/fonts/Rubik-Medium.ttf'),
      RubikBold: require('./assets/fonts/Rubik-SemiBold.ttf'),
      RubikExtraBold: require('./assets/fonts/Rubik-ExtraBold.ttf'),
    });

    setIsLoadFonts(true)
  }

  if(Boolean(isLoadFonts && routes?.length)) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>

            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              {routes.map((item, index) =>  (
                <Stack.Screen
                  key={index}
                  name={item.router}
                  component={item.component}
                />
              ))}
            </Stack.Navigator>
          <TopBar/>
          <BottomBar/>
          <RegisterModal modalVisible={registerModalState} closeModal={handleCloseRegisterModal}/>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  } else {
    return (
        <Text>No fonts</Text>
    )
  }

}
