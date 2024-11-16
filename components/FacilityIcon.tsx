import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type FacilityIconProps = {
  name: string;
  image: any;
  onPress: () => void;
};

export default function FacilityIcon({ name, image, onPress }: FacilityIconProps) {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Image source={image} style={styles.iconImage} />
      <Text style={styles.iconText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 100,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  iconImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
