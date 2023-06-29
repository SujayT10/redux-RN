
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {

    return (
        <View styles={styles.container}>
            <Text style={{ fontSize: 20, textAlign: 'right', padding: 10, backgroundColor: 'orange' }}>
                0
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default Header;
