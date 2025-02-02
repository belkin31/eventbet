import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native';

//import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../../utills/routes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useTranslation} from "react-i18next";

export function BottomBar({...props}) {
    const {t} = useTranslation()
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const initialRouteIndex = () => {
      if (props?.initialRouteName) {
        return routes.findIndex((route, index) => {
          if (route.router === props?.initialRouteName) {
            return index;
          }
        })
      }
    }

    const [activeTabIndex, setactiveTabIndex] = useState(initialRouteIndex() || 0);


    const clickItem = (router, index) => {
        navigation.navigate(router);
        setactiveTabIndex(index);
    };
    return (
      <View style={styles.container}>
        <View 
          style={[styles.blurView, {paddingBottom: insets.bottom, height: 60 + insets.bottom} ]}
        >
        {routes.map((item, index) => (
            <TouchableOpacity
                key={index}
                onPress={() =>
                    clickItem(item.router, index)
                }
                style={[styles.tabItem, activeTabIndex === index && styles.tabItemActive]}
            >
                <SafeAreaView style={styles.icon}>
                  {item.icon()}
                </SafeAreaView>
                <Text style={styles.label}>{t(item.label)}</Text>
            </TouchableOpacity>
        ))}

        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  blurView: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#011C2D',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 0,
    gap: 8,
  },
  tabItem: {
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'auto',
    gap: 4,
    flex: 1,
    opacity: .5
  },
  tabItemActive: {
    opacity: 1
  },
  label: {
    fontSize: 10,
    color: '#FFFFFF',

    fontFamily: 'MontserratBold',
  },
  icon: {
    width: 16,
    height: 16
  }
})
