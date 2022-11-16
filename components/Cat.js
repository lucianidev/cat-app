import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import findCatImage from '../lib/catImageFinder';



const Cat = () => {
    const [imageLink, setImageLink] = useState(undefined);

    useEffect(() => {
        findCatImage().then(data => {
            setImageLink(data);
        });
    }, [])

    return (
        <View>
            <Image
                style={styles.image}
                source={{
                    uri: imageLink,
                }} />

            <TouchableOpacity style={styles.button} onPress={async () => {
                findCatImage().then(data => {
                    setImageLink(data);
                });
            }}><Text style={styles.text}>find another cat!</Text></TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 400,
        resizeMode: 'cover',
        borderRadius: 30,
    },

    button: {
        margin: 20,
        padding: 15,
        backgroundColor: 'black',
        borderRadius: 360,
    },

    text : {
        textAlign : 'center',
    }
});

export default Cat;