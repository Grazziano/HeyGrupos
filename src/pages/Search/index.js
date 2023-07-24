import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Tela Procurar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});