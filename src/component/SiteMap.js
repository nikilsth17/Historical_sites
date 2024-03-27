import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Button, Text } from 'react-native';
import * as Location from 'expo-location';

const SiteMap = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 27.7172,
        longitude: 85.3240,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      const [sites, setSites] = useState([]);
      const [selectedSite, setSelectedSite] = useState(null);
    
      const fetchBloodBankData = () => {
        // Dummy sites data with rating and contact information
        const dummySiteData = [
          { name: 'Lumbini', latitude: 27.9207, longitude:  82.7347,contact: '123-456-7890' },
          { name: 'Bhaktapur Durbar Square', latitude: 27.6721, longitude: 85.4283 },
          { name: 'Sagarmatha National Park', latitude: 27.9324, longitude: 86.7014,},
          { name: 'Boudhanath Stupa', latitude: 27.7215, longitude: 85.3620,},
          { name: 'Chitwan National Park', latitude: 27.5193, longitude:84.3135,},
          { name: 'Pashupatinath Temple', latitude: 27.7105, longitude:85.3488,},
          { name: 'Muktinath Temple', latitude:28.8169, longitude:83.8718, },
          { name: 'Janaki Mandir', latitude: 26.7304, longitude:85.9256,},
        ];
        setSites(dummySiteData);
      };
    
      const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      };
    
      useEffect(() => {
        userLocation();
        fetchBloodBankData(); // Fetch sites data when component mounts
      }, []);
    
      const handleMarkerPress = (sites) => {
        setSelectedSite(sites);
      };
    
  return (
    <View style={styles.container}>
    <MapView style={styles.map} region={mapRegion}>
      {sites.map((sites, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: sites.latitude, longitude: sites.longitude }}
          title={sites.name}
          onPress={() => handleMarkerPress(sites)}
        >
          <Callout>
            <View>
              <Text>{sites.name}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
    {selectedSite && (
      <View style={styles.selectedBloodBankContainer}>
        <Text>Selected Sites: {selectedSite.name}</Text>
        <Text>Contact: {selectedSite.contact}</Text>
      </View>
    )}
    <Button title='Get Location' onPress={userLocation} />
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    selectedBloodBankContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: 10,
    },
  });
  
export default SiteMap