import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Search = () => {
    return (
        <View style={styles.container}>
            <Text>Поиск</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Search;