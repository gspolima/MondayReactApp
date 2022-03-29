import React from "react";
import { Text, View, StyleSheet, Image, TextInput, Button } from "react-native";
import { ImageBackground } from "react-native-web";

const image = { uri: "https://images.pexels.com/photos/8533218/pexels-photo-8533218.jpeg" };


const Cadastro = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image} resizeMode="cover"
            >

            </ImageBackground>
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1517817748493-49ec54a32465',
                }}
                style={{ width  : 200, height: 200 }}
            />
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome completo"
            />
            
            <TextInput
                style={styles.input}
                placeholder="CPF"
                keyboardType="number-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="number-pad"
                
            />
            <Button
                title="Cadastrar"
                color="#000000"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 30
    },
    input: {
        borderColor: "#000000",
        padding: 10,
        borderWidth: 1,
        height: 40,
        width: 300,
    }
  });

export default Cadastro;