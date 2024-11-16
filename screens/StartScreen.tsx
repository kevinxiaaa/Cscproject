import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type StartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Start'>;

type Props = {
  navigation: StartScreenNavigationProp;
};

export default function StartScreen({ navigation }: Props) {
  return (
    <ImageBackground source={require('../assets/start-background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Campus Occupancy App</Text>
        <Button title="Enter" onPress={() => navigation.navigate('Home')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});
