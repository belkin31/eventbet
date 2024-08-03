import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function CasinoScreen ({...props}) {
    const insets = useSafeAreaInsets();
    return (
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.ScrollView}
        >
        <View style={[styles.container, {paddingTop: insets.top + 66}]}>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
    },
    screenBlock: {
        paddingHorizontal: 16
    },
    ScrollView: {
        backgroundColor: '#031329',
        marginHorizontal: 0,
    }
})