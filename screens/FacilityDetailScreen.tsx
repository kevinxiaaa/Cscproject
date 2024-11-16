import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type FacilityDetailScreenRouteProp = RouteProp<RootStackParamList, 'FacilityDetail'>;

type Props = {
  route: FacilityDetailScreenRouteProp;
};

export default function FacilityDetailScreen({ route }: Props) {
  const { name } = route.params;

  return (
    <ImageBackground source={require('../assets/detail-background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.occupancy}>Occupancy: 20 / 50</Text> {/* Sample occupancy */}
        <Text style={styles.status}>Status: Busy</Text>
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
    marginBottom: 10,
  },
  occupancy: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  status: { // Added the 'status' style to fix the error
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
