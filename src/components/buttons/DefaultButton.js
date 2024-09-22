import { Pressable, StyleSheet, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
export function DefaultButton ({...props}) {

    const HandlePress = (event) => {
        props?.onPress?.(event);
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#21CC51', '#166E55']}
                style={styles.background}
            >
                <Pressable onPress={HandlePress} style={[styles.defaultButton, styles.defaultButton[props?.size]]}>
                    {props.children}
                </Pressable>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    defaultButton: {
        paddingVertical: 6,
        paddingHorizontal: 23,
        justifyContent: 'center',
        alignItems: 'center',
        md: {
            paddingVertical: 10,
            paddingHorizontal: 25
        },
        lg: {
            paddingVertical: 12,
            paddingHorizontal: 25
        }
    },
    background: {
        flexGrow: 1,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#25E39A',
        borderRadius: 8,
        overflow: 'hidden',
        pointerEvents: 'box-none',
        backgroundColor: 'transparent',
    }
})