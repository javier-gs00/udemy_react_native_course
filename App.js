import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Starting template</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
