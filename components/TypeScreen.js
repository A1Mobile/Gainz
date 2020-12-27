import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function TypeScreen(props) {
    
    const [text, onChangeText] = React.useState('8R_7KCtShkU');

    function handleSubmit() {
        props.navigation.navigate('WebView', {
            videoURI: `https://www.youtube.com/embed/${text}`,
        });
      }

    return (
        <View style={styles.container} >
            <Text style={ { fontSize: 20, fontWeight: 'bold' } } >
            Embed YouTube ID: 
            </Text>
            <Text style={ { fontSize: 20 } } >
            https://www.youtube.com/embed/
            </Text>
            <TextInput style={{ fontSize: 18, height: 40, width: '80%', borderColor: 'gray', borderWidth: 1 }} 
                value={text}
                onChangeText={text => onChangeText(text)} />
            <Button style={styles.button} onPress={() => handleSubmit()} title='submit' />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      fontSize: 24,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})