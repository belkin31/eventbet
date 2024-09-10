import { Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
export function DefaultInput({
    onInput,
    ...props
  }) {

    const HandleInput = (event) => {
        onInput(event, props.name);
    };

    return (
        <SafeAreaView style={styles.container}>
            {props?.label && (<Text style={styles.label}>{props?.label}</Text>)}
            <TextInput 
                value={props.value}
                onChangeText={HandleInput}
                style={styles.input}
                placeholder={props?.placeholder}
                placeholderTextColor={styles.input.placeholderTextColor}
            />
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
        padding: 18,
        fontSize: 12,
        placeholderTextColor: '#FFFFFF85',
        fontFamily: "MontserratBold"
    },
    label: {
        fontSize: 14,
        color: '#69696B',
        paddingHorizontal: 8,
        fontFamily: "MontserratRegular",
    }
})