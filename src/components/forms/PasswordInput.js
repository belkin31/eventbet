import { Text, TextInput, StyleSheet, SafeAreaView, View } from 'react-native';
export function PasswordInput({
    onInput,
    ...props
  }) {

    const HandleInput = (event) => {
        onInput(event, props.name);
    };

    return (
        <SafeAreaView style={styles.container}>
            {props?.label && (<Text style={styles.label}>{props?.label}</Text>)}
            <View style={styles.wrapper}>
                <TextInput 
                    value={props.value}
                    onChangeText={HandleInput}
                    placeholderTextColor={styles.input.placeholderTextColor}
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder={props?.placeholder}
                />
                <View style={styles.showPassword}>
                    {props.children}
                </View>
            </View>
            
            
        </SafeAreaView>
    );
}

const styles =  StyleSheet.create({
    container: {
        gap: 8,
    },
    input: {
        backgroundColor: '#011C2D',
        borderRadius: 8,
        padding: 16,
        fontSize: 12,
        flex: 1,
        fontFamily: "MontserratBold",
        placeholderTextColor: '#FFFFFF85'
    },
    label: {
        fontSize: 12,
        color: '#69696B',
        paddingHorizontal: 8,
        fontFamily: "MontserratRegular",
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    showPassword: {
        width: 14,
        height: 14,
        right: 16,
        position: 'absolute'
    }
})