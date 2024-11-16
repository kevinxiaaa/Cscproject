import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface FacilityProps {
  facility: {
    id: string;
    name: string;
    occupancy: number;
    capacity: number;
  };
}

export default function FacilityCard({ facility }: FacilityProps) {
  const { name, occupancy, capacity } = facility;
  const isBusy = occupancy >= capacity * 0.8;

  // Function to select the appropriate image based on facility name
  const getImageSource = () => {
    switch (name.toLowerCase()) {
      case 'gym':
        return require('../assets/gym.png');
      case 'library':
        return require('../assets/library.png');
      case 'laundry':
        return require('../assets/laundry.png');
      case 'pool table':
        return require('../assets/pool-table.png');
      default:
        return require('../assets/icon.png'); // Use a default image if none match
    }
  };

  return (
    <View style={[styles.card, isBusy ? styles.busyCard : styles.availableCard]}>
      <Image source={getImageSource()} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.occupancy}>Occupancy: {occupancy} / {capacity}</Text>
      <View style={[styles.statusBadge, isBusy ? styles.busyBadge : styles.availableBadge]}>
        <Text style={styles.statusText}>{isBusy ? 'Busy' : 'Available'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  busyCard: {
    borderColor: '#e74c3c',
    borderWidth: 2,
  },
  availableCard: {
    borderColor: '#2ecc71',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  occupancy: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  busyBadge: {
    backgroundColor: '#e74c3c',
  },
  availableBadge: {
    backgroundColor: '#2ecc71',
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
