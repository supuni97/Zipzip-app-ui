import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import NavBar from './NavBar';

const Featured = () => {
  const [search, setSearch] = useState('');
  const updateSearch = (text) => {
    setSearch(text);
  };

  const featuredItems = [
    { id: 1, name: 'Heineken Bottle', ml: '330 ml', price: 'Rs. 500' },
    { id: 2, name: 'Heineken Bottle', ml: '330 ml', price: 'Rs. 500' },
    { id: 3, name: 'Heineken Bottle', ml: '330 ml', price: 'Rs. 500' },
    { id: 4, name: 'Heineken Bottle', ml: '330 ml', price: 'Rs. 500' },
    { id: 5, name: 'Heineken Bottle', ml: '330 ml', price: 'Rs. 500' },
    { id: 6, name: 'Heineken Bottle', ml: '330 ml', price: 'Rs. 500' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchBarContainer}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/000000/search--v1.png',
          }}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBarInput}
          placeholder="Search any Product..."
          placeholderTextColor="#BE202F"
          value={search}
          onChangeText={updateSearch}
        />
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/000000/camera.png',
          }}
          style={styles.cameraIcon}
        />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}>
        {['Featured', 'Categories', 'Most Popular', 'Label4', 'Label5'].map(
          (label, index) => (
            <View key={index} style={styles.labelContainer}>
              <Text style={styles.labelText}>{label}</Text>
            </View>
          )
        )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.featuredText}>Featured</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.featuredItemsContainer}>
        {featuredItems.map((item) => (
          <View key={item.id} style={styles.featuredItem}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/img9.jpg')}
                style={styles.featuredImage}
              />
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios-filled/50/000000/plus-math.png',
                }}
                style={styles.plusIcon}
              />
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
            <Text style={styles.productMl}>{item.ml}</Text>

            <Text style={styles.rating}>★★★★★</Text>
          </View>
        ))}
      </View>
      <NavBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9F9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#BE202F',
  },
  searchBarInput: {
    flex: 1,
    height: 40,
    color: '#BE202F',
  },
  cameraIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    tintColor: '#BE202F',
  },
  horizontalScroll: {
    marginTop: 10,
    paddingLeft: 10,
  },
  labelContainer: {
    backgroundColor: '#fff',
    borderColor: '#800020',
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 2,
    paddingHorizontal: 15,
    marginRight: 10,
    height: 30,
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 8,
    color: '#333',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  featuredText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#888',
  },
  featuredItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginTop: 20,
  },
  featuredItem: {
    width: '48%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#BE202F',
    borderRadius: 5,
    padding: 10,
    alignItems: 'flex-start', 
    backgroundColor: '#fff',
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  featuredImage: {
    width: 176,
    height: 210,
    borderRadius: 8,
  },
  priceTag: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    backgroundColor: '#9b3621',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  priceText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  plusIcon: {
    position: 'absolute',
    bottom: 50,
    right: 5,
    width: 18,
    height: 18,
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#9b3621',
    padding: 3,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productMl: {
    fontSize: 14,
    color: '#666',
  },
  rating: {
    fontSize: 10,
    color: '#f1c40f',
    alignSelf: 'flex-start'
  },
});

export default Featured;
