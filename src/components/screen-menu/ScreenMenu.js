import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ArrowIcon } from '../icons/ArrowIcon';
export function ScreenMenu({...props}) {

  const GetIcon = (icon) => {
    if(icon) {
      return icon()
    }
  }
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navigateView}>
          {props.navigateItem?.map((item, index) => (
              <View key={index} intensity={100} style={styles.navigateItems}>
                <TouchableOpacity onPress={item.action} style={styles.pressable}>
                  <View style={styles.navigateContain}>
                    <View style={styles.iconContain}>
                      <View style={styles.icon}>{GetIcon(item?.icon)}</View>
                    </View>
                    <Text style={styles.navigateItemText}>{item.label}</Text>
                  </View>
                  <View style={styles.switch}>
                    {item?.switch &&
                        <Text style={styles.switchText}>{item?.switch}</Text>
                    }
                    <View style={styles.arrowIcon}>
                      <ArrowIcon/>
                    </View>
                  </View>

                </TouchableOpacity>
              </View>
          ))}
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  icon: {
    width: 16,
    height: 16,
    overflow: 'visible'
  },
  iconContain: {
    width: 21,
    height: 21,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigateView: {
    borderRadius: 8,
    overflow: 'hidden',
    padding: 4,
    paddingVertical: 8,
    backgroundColor: '#0A2737',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    opacity: 0.2,
  },
  navigateItem: {
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden',
  },
  navigateContain: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  switchText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'MontserratMedium',
  },
  navigateItemText: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'MontserratMedium',
  },
  navigateItems: {
    padding: 0,
  },
})
