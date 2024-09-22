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

  const initialRoute = () => {
    return routes.find((route) => {
      return route.initial;
    })
  };


  if(Boolean(isLoadFonts && routes?.length)) {
    return (
      <SafeAreaProvider style={{backgroundColor: '#031329'}}>
        <NavigationContainer>

            <Stack.Navigator
              initialRouteName={initialRoute().router}
              screenOptions={{
                headerShown: false,
                animationTypeForReplace: 'push',
                animation: 'fade',
                animationDuration: 200,
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
          <BottomBar initialRouteName={initialRoute().router}/>
          <RegisterModal modalVisible={registerModalState} closeModal={handleCloseRegisterModal}/>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  } else {
    return null;
  }

}
