import { Pressable, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
export function DefaultButton ({...props}) {

    const HandlePress = (event) => {
        props?.onPress?.(event);
    }

    return (
        <LinearGradient
            colors={['#21CC51', '#166E55']}
            style={styles.background}
        >
            <Pressable onPress={HandlePress} style={[styles.defaultButton, styles.defaultButton[props?.size]]}>
                {props.children}
            </Pressable>
        </LinearGradient>

    )
}
const styles = StyleSheet.create({
    defaultButton: {
        paddingVertical: 6,
        paddingHorizontal: 23,
        justifyContent: 'center',
        md: {
            paddingVertical: 10,
            paddingHorizontal: 25
        }
    },
    background: {
        borderWidth: 1,
        borderColor: '#25E39A',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    }
})